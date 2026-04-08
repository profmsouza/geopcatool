import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import { MapPin, Search, Save, ArrowLeft, Navigation, Upload, FileSpreadsheet, CheckCircle, XCircle, Loader2, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Papa from 'papaparse';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const customIcon = new L.Icon({
  iconUrl: 'https://i.imgur.com/WZXGlks.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

function LocationMarker({ position, setPosition }: { position: L.LatLng | null, setPosition: (pos: L.LatLng) => void }) {
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}></Marker>
  );
}

function MapUpdater({ center }: { center: L.LatLng | null }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 16);
    }
  }, [center, map]);
  return null;
}

export function AddHealthUnit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [cepLoading, setCepLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    cep: '',
    state: '',
    city: '',
    neighborhood: '',
    street: '',
  });

  const [position, setPosition] = useState<L.LatLng | null>(null);
  const [mapCenter, setMapCenter] = useState<L.LatLng | null>(null);

  const [activeTab, setActiveTab] = useState<'individual' | 'lote'>('individual');
  const [bulkLoading, setBulkLoading] = useState(false);
  const [bulkResults, setBulkResults] = useState<{ total: number; success: number; failed: number; errors: string[] } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, '');
    setFormData({ ...formData, cep: e.target.value });

    if (cep.length === 8) {
      setCepLoading(true);
      setError('');
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        
        if (data.erro) {
          setError('CEP não encontrado.');
          return;
        }

        setFormData(prev => ({
          ...prev,
          state: data.uf,
          city: data.localidade,
          neighborhood: data.bairro,
          street: data.logradouro,
        }));

        // Try to geocode the address to set initial map position
        const address = `${data.logradouro}, ${data.bairro}, ${data.localidade}, ${data.uf}, Brazil`;
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
        const geoData = await geoResponse.json();

        if (geoData && geoData.length > 0) {
          const newPos = new L.LatLng(parseFloat(geoData[0].lat), parseFloat(geoData[0].lon));
          setPosition(newPos);
          setMapCenter(newPos);
        } else {
          // Fallback to city center
          const cityGeoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${data.localidade}, ${data.uf}, Brazil`)}`);
          const cityGeoData = await cityGeoResponse.json();
          if (cityGeoData && cityGeoData.length > 0) {
            const newPos = new L.LatLng(parseFloat(cityGeoData[0].lat), parseFloat(cityGeoData[0].lon));
            setPosition(newPos);
            setMapCenter(newPos);
          }
        }
      } catch (err) {
        setError('Erro ao buscar CEP.');
      } finally {
        setCepLoading(false);
      }
    }
  };

  const handleGetLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const newPos = new L.LatLng(pos.coords.latitude, pos.coords.longitude);
          setPosition(newPos);
          setMapCenter(newPos);
        },
        (err) => {
          console.error("Error getting location:", err);
          setError("Não foi possível obter a sua localização. Verifique as permissões do navegador.");
        },
        { enableHighAccuracy: true }
      );
    } else {
      setError("Geolocalização não é suportada pelo seu navegador.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!position) {
      setError('Por favor, selecione a localização exata no mapa.');
      return;
    }

    setLoading(true);
    try {
      const { error: insertError } = await supabase
        .from('health_units')
        .insert([
          {
            name: formData.name,
            cep: formData.cep.replace(/\D/g, ''),
            state: formData.state,
            city: formData.city,
            neighborhood: formData.neighborhood,
            street: formData.street,
            lat: position.lat,
            lng: position.lng,
          }
        ]);

      if (insertError) throw insertError;

      setSuccess('Unidade de Saúde cadastrada com sucesso!');
      setFormData({
        name: '',
        cep: '',
        state: '',
        city: '',
        neighborhood: '',
        street: '',
      });
      setPosition(null);
    } catch (err: any) {
      setError(err.message || 'Erro ao salvar Unidade de Saúde.');
    } finally {
      setLoading(false);
    }
  };

  const downloadTemplate = () => {
    const csvContent = "Nome da UBS,CEP\nUBS Centro,35010-180\nUBS São Paulo,35030-310";
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "modelo_cadastro_ubs.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setBulkLoading(true);
    setBulkResults(null);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        const rows = results.data as any[];
        let successCount = 0;
        let failedCount = 0;
        const errors: string[] = [];

        for (const row of rows) {
          const name = row['Nome da UBS'] || row['Nome'] || row['nome'] || row['UBS'];
          const rawCep = row['CEP'] || row['cep'];

          if (!name || !rawCep) {
            failedCount++;
            errors.push(`Linha inválida: Nome ou CEP ausente.`);
            continue;
          }

          const cep = String(rawCep).replace(/\D/g, '');
          if (cep.length !== 8) {
            failedCount++;
            errors.push(`UBS "${name}": CEP inválido (${rawCep}).`);
            continue;
          }

          try {
            // Fetch address from ViaCEP
            const viaCepResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const viaCepData = await viaCepResponse.json();

            if (viaCepData.erro) {
              failedCount++;
              errors.push(`UBS "${name}": CEP não encontrado (${cep}).`);
              continue;
            }

            const state = viaCepData.uf;
            const city = viaCepData.localidade;
            const neighborhood = viaCepData.bairro;
            const street = viaCepData.logradouro;

            // Fetch coordinates from Nominatim
            let lat = 0;
            let lng = 0;
            const address = `${street}, ${neighborhood}, ${city}, ${state}, Brazil`;
            const geoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
            const geoData = await geoResponse.json();

            if (geoData && geoData.length > 0) {
              lat = parseFloat(geoData[0].lat);
              lng = parseFloat(geoData[0].lon);
            } else {
              // Fallback to city center
              const cityGeoResponse = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(`${city}, ${state}, Brazil`)}`);
              const cityGeoData = await cityGeoResponse.json();
              if (cityGeoData && cityGeoData.length > 0) {
                lat = parseFloat(cityGeoData[0].lat);
                lng = parseFloat(cityGeoData[0].lon);
              } else {
                failedCount++;
                errors.push(`UBS "${name}": Não foi possível obter coordenadas para o endereço.`);
                continue;
              }
            }

            // Insert into Supabase
            const { error: insertError } = await supabase
              .from('health_units')
              .insert([
                {
                  name,
                  cep,
                  state,
                  city,
                  neighborhood,
                  street,
                  lat,
                  lng,
                }
              ]);

            if (insertError) {
              failedCount++;
              errors.push(`UBS "${name}": Erro ao salvar no banco de dados.`);
            } else {
              successCount++;
            }
          } catch (err) {
            failedCount++;
            errors.push(`UBS "${name}": Erro inesperado durante o processamento.`);
          }
          
          // Add a small delay to avoid rate limiting from Nominatim/ViaCEP
          await new Promise(resolve => setTimeout(resolve, 1500));
        }

        setBulkResults({
          total: rows.length,
          success: successCount,
          failed: failedCount,
          errors
        });
        setBulkLoading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      },
      error: (error) => {
        setBulkResults({
          total: 0,
          success: 0,
          failed: 1,
          errors: [`Erro ao ler arquivo: ${error.message}`]
        });
        setBulkLoading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      <div className="flex items-center gap-4 mb-8">
        <button 
          onClick={() => navigate('/dashboard')}
          className="p-2 hover:bg-slate-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-slate-600" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Cadastrar Unidade de Saúde</h1>
          <p className="text-slate-500">Adicione uma nova UBS ao sistema de mapeamento</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="flex border-b border-slate-200">
          <button
            onClick={() => setActiveTab('individual')}
            className={`flex-1 py-4 text-sm font-medium text-center transition-colors ${
              activeTab === 'individual'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Cadastro Individual
          </button>
          <button
            onClick={() => setActiveTab('lote')}
            className={`flex-1 py-4 text-sm font-medium text-center transition-colors ${
              activeTab === 'lote'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Cadastro em Lote (CSV)
          </button>
        </div>

        {activeTab === 'individual' ? (
          <form onSubmit={handleSubmit} className="p-6">
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                {success}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Nome da UBS *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="Ex: UBS Centro"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    CEP *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength={9}
                      value={formData.cep}
                      onChange={handleCepChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="00000-000"
                    />
                    {cepLoading && (
                      <div className="absolute right-3 top-2.5">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Estado</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Cidade</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Bairro</label>
                  <input
                    type="text"
                    required
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Rua</label>
                  <input
                    type="text"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-slate-50"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Localização Exata no Mapa *
                </label>
                <p className="text-xs text-slate-500 mb-2">
                  Clique no mapa para definir a posição exata da unidade.
                </p>
                <div className="flex-1 min-h-[300px] rounded-lg overflow-hidden border border-slate-300 relative z-0">
                  <MapContainer 
                    center={[-18.8523, -41.9466]} // Default to Governador Valadares
                    zoom={13} 
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker position={position} setPosition={setPosition} />
                    <MapUpdater center={mapCenter} />
                  </MapContainer>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={handleGetLocation}
                className="flex items-center justify-center w-9 h-9 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors border border-slate-300 shadow-sm"
                title="Usar minha localização atual"
              >
                <Navigation className="w-4 h-4" />
              </button>
              <button
                type="submit"
                disabled={loading || !position}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 shadow-sm"
              >
                <Save className="w-4 h-4" />
                {loading ? 'Salvando...' : 'Salvar Unidade'}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-50 text-blue-600 rounded-full mb-4">
                  <FileSpreadsheet className="w-8 h-8" />
                </div>
                <h2 className="text-xl font-semibold text-slate-900 mb-2">Importar Planilha de UBS</h2>
                <p className="text-slate-600 mb-6">
                  Faça o upload de um arquivo CSV contendo os nomes e CEPs das Unidades de Saúde. 
                  O sistema buscará automaticamente os endereços e coordenadas.
                </p>
                <button
                  onClick={downloadTemplate}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Baixar Modelo CSV
                </button>
              </div>

              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors relative">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  ref={fileInputRef}
                  disabled={bulkLoading}
                />
                <div className="flex flex-col items-center justify-center gap-3 pointer-events-none">
                  {bulkLoading ? (
                    <>
                      <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
                      <div className="text-slate-700 font-medium">Processando planilha...</div>
                      <div className="text-sm text-slate-500">Isso pode levar alguns minutos dependendo da quantidade de registros.</div>
                    </>
                  ) : (
                    <>
                      <Upload className="w-10 h-10 text-slate-400" />
                      <div className="text-slate-700 font-medium">Clique ou arraste o arquivo CSV aqui</div>
                      <div className="text-sm text-slate-500">Apenas arquivos .csv são suportados</div>
                    </>
                  )}
                </div>
              </div>

              {bulkResults && (
                <div className="mt-8 space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Resultados da Importação</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                      <div className="text-2xl font-bold text-slate-700">{bulkResults.total}</div>
                      <div className="text-sm text-slate-500">Total</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                      <div className="text-2xl font-bold text-green-600">{bulkResults.success}</div>
                      <div className="text-sm text-green-700">Sucesso</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
                      <div className="text-2xl font-bold text-red-600">{bulkResults.failed}</div>
                      <div className="text-sm text-red-700">Falhas</div>
                    </div>
                  </div>

                  {bulkResults.errors.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                      <h4 className="flex items-center gap-2 font-medium text-red-800 mb-2">
                        <XCircle className="w-4 h-4" />
                        Detalhes dos Erros
                      </h4>
                      <ul className="space-y-1 text-sm text-red-700 max-h-40 overflow-y-auto">
                        {bulkResults.errors.map((err, idx) => (
                          <li key={idx}>• {err}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {bulkResults.success > 0 && bulkResults.failed === 0 && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-800">Todas as unidades foram importadas com sucesso!</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
