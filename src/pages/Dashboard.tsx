import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Activity, Users, MapPin, TrendingUp } from 'lucide-react';

export function Dashboard() {
  const location = useLocation();
  const state = location.state as { score?: number, isHighQuality?: boolean } | null;
  
  // Default mock data if no state is passed
  const score = state?.score ?? 7.2;
  const isHighQuality = state?.isHighQuality ?? (score >= 6.6);

  // Mock hotspots for Governador Valadares
  const hotspots = [
    { id: 1, lat: -18.8514, lng: -41.9466, score: 8.1 }, // Centro
    { id: 2, lat: -18.8650, lng: -41.9500, score: 5.4 }, // Periferia 1
    { id: 3, lat: -18.8400, lng: -41.9300, score: 6.8 }, // Bairro 2
    { id: 4, lat: -18.8700, lng: -41.9200, score: 4.2 }, // Vulnerável
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      <header className="bg-blue-800 text-white p-6 rounded-b-3xl shadow-md">
        <h1 className="text-2xl font-bold mb-1">Painel do Gestor</h1>
        <p className="text-blue-200 text-sm">Governador Valadares - MG</p>
        
        <div className="mt-6 bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/20">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-100 text-sm font-medium mb-1">Escore Geral de Saúde Bucal</p>
              <div className="flex items-end gap-2">
                <span className="text-4xl font-bold">{score.toFixed(1)}</span>
                <span className="text-blue-200 mb-1">/ 10</span>
              </div>
            </div>
            <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${isHighQuality ? 'border-emerald-400 bg-emerald-400/20 text-emerald-300' : 'border-red-400 bg-red-400/20 text-red-300'}`}>
              <Activity size={32} />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-2">
            <span className={`inline-block w-3 h-3 rounded-full ${isHighQuality ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
            <span className="text-sm font-medium">
              {isHighQuality ? 'Alto Escore (Qualidade Adequada)' : 'Baixo Escore (Atenção Necessária)'}
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 space-y-6 mt-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              <Users size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Avaliações</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">1,248</p>
            <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
              <TrendingUp size={12} /> +12% este mês
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-slate-500 mb-2">
              <MapPin size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Áreas Críticas</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">4</p>
            <p className="text-xs text-red-500 font-medium mt-1">
              Escore &lt; 6.6
            </p>
          </div>
        </div>

        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold text-slate-900">Mapa de Vulnerabilidade</h2>
          </div>
          <div className="h-80 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200 relative z-0">
            <MapContainer 
              center={[-18.8514, -41.9466]} 
              zoom={13} 
              style={{ height: '100%', width: '100%' }}
              zoomControl={false}
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              />
              {hotspots.map(spot => (
                <CircleMarker
                  key={spot.id}
                  center={[spot.lat, spot.lng]}
                  radius={spot.score < 6.6 ? 15 : 10}
                  fillColor={spot.score >= 6.6 ? '#10b981' : '#ef4444'}
                  color={spot.score >= 6.6 ? '#059669' : '#dc2626'}
                  weight={2}
                  fillOpacity={0.6}
                >
                  <Popup>
                    <div className="text-center">
                      <p className="font-bold text-slate-900 mb-1">Escore: {spot.score}</p>
                      <span className={`text-xs px-2 py-1 rounded-full text-white ${spot.score >= 6.6 ? 'bg-emerald-500' : 'bg-red-500'}`}>
                        {spot.score >= 6.6 ? 'Adequado' : 'Vulnerável'}
                      </span>
                    </div>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
          <div className="flex justify-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-slate-600 font-medium">Adequado (≥ 6.6)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="text-xs text-slate-600 font-medium">Vulnerável (&lt; 6.6)</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
