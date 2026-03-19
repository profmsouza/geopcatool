import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserSquare2, Users, Stethoscope, ArrowRight } from 'lucide-react';

export function Inventory() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/questionnaire');
  };

  return (
    <div className="flex flex-col min-h-screen pb-20 bg-slate-50">
      <header className="sticky top-0 z-50 bg-white border-b border-blue-100 px-4 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-blue-50 transition-colors">
          <ArrowLeft className="text-blue-800" size={24} />
        </button>
        <div className="flex-1">
          <h1 className="text-lg font-bold leading-tight tracking-tight text-slate-900">GeoPCATool</h1>
          <p className="text-xs text-slate-500">Inventário Sócio-Demográfico</p>
        </div>
      </header>

      <main className="w-full px-4 py-6 space-y-8">
        <div className="space-y-3">
          <div className="flex justify-between items-end">
            <h2 className="text-base font-semibold text-slate-900">Progresso do Inventário</h2>
            <span className="text-sm font-medium text-blue-800">1 / 4</span>
          </div>
          <div className="h-2 w-full bg-blue-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-800 w-1/4 rounded-full"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-blue-100 pb-2">
              <UserSquare2 className="text-blue-800" size={24} />
              <h3 className="text-xl font-bold text-slate-900">I. Identificação</h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Registro *</span>
                <input type="text" required className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all" placeholder="Digite o número do registro" />
              </label>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-blue-100 pb-2">
              <Users className="text-blue-800" size={24} />
              <h3 className="text-xl font-bold text-slate-900">II. Perfil sociodemográfico</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Data de Nascimento *</span>
                <input type="date" required className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Idade *</span>
                <input type="number" required placeholder="00" className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all" />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Escolaridade *</span>
                <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all">
                  <option value="">Selecione uma opção</option>
                  <option value="1">Fundamental incompleto</option>
                  <option value="2">Fundamental completo</option>
                  <option value="3">Médio incompleto</option>
                  <option value="4">Médio completo</option>
                  <option value="5">Superior incompleto</option>
                  <option value="6">Superior completo</option>
                  <option value="7">Pós-graduação</option>
                </select>
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Renda familiar mensal *</span>
                <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all">
                  <option value="">Selecione uma opção</option>
                  <option value="1">Até 1 SM</option>
                  <option value="2">1-2 SM</option>
                  <option value="3">2-3 SM</option>
                  <option value="4">3-5 SM</option>
                  <option value="5">Mais de 5 SM</option>
                </select>
              </label>
              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-medium text-slate-700">Bairro de residência *</span>
                <input type="text" required placeholder="Nome do Bairro" className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all" />
              </label>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-blue-100 pb-2">
              <Stethoscope className="text-blue-800" size={24} />
              <h3 className="text-xl font-bold text-slate-900">III. Acesso a Serviços</h3>
            </div>
            <div className="space-y-6">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Distância até a UBS mais próxima *</span>
                <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all">
                  <option value="">Selecione uma opção</option>
                  <option value="1">Menos de 500m</option>
                  <option value="2">500m-1km</option>
                  <option value="3">1-2km</option>
                  <option value="4">Mais de 2km</option>
                </select>
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-slate-700">Meio de transporte usual para serviços de saúde *</span>
                <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 bg-white focus:border-blue-800 focus:ring-1 focus:ring-blue-800 outline-none transition-all">
                  <option value="">Selecione uma opção</option>
                  <option value="1">A pé</option>
                  <option value="2">Transporte público</option>
                  <option value="3">Veículo próprio</option>
                  <option value="4">Outro</option>
                </select>
              </label>
            </div>
          </section>

          <div className="pt-4 pb-12">
            <button type="submit" className="w-full h-14 bg-blue-800 text-white font-bold rounded-xl shadow-lg shadow-blue-800/20 hover:bg-blue-900 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              <span>Continuar para o Questionário</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
