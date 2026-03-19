import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, FileText, Timer, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

export function Selection() {
  const navigate = useNavigate();
  const [targetGroup, setTargetGroup] = useState('Adulto');
  const [version, setVersion] = useState('Completa');

  return (
    <div className="flex flex-col min-h-screen pb-20 bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="flex items-center p-4 justify-between w-full">
          <button onClick={() => navigate(-1)} className="text-slate-600 flex w-10 h-10 shrink-0 items-center justify-center hover:bg-slate-100 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10 text-slate-900">Seleção de Instrumento</h1>
        </div>
      </header>

      <main className="flex-1 w-full p-4 space-y-6">
        <section>
          <h2 className="text-xl font-bold leading-tight tracking-tight mb-4 text-slate-900">Escolha o Grupo Alvo</h2>
          <div className="flex bg-slate-200 p-1 rounded-xl">
            {['Adulto', 'Criança', 'Profissional'].map((group) => (
              <label key={group} className="flex cursor-pointer h-11 grow items-center justify-center overflow-hidden rounded-lg px-2 has-[:checked]:bg-white has-[:checked]:shadow-sm has-[:checked]:text-blue-800 text-slate-600 text-sm font-semibold transition-all">
                <span className="truncate">{group}</span>
                <input 
                  type="radio" 
                  name="target-group" 
                  value={group} 
                  checked={targetGroup === group}
                  onChange={() => setTargetGroup(group)}
                  className="hidden" 
                />
              </label>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900">Selecione a Versão</h2>
          
          <label className="relative block cursor-pointer group">
            <input 
              type="radio" 
              name="version" 
              value="Completa"
              checked={version === 'Completa'}
              onChange={() => setVersion('Completa')}
              className="peer hidden" 
            />
            <div className={cn(
              "p-5 bg-white border-2 rounded-2xl shadow-sm transition-all hover:shadow-md",
              version === 'Completa' ? "border-blue-800" : "border-transparent"
            )}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-800">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Versão Completa</h3>
                    <p className="text-sm text-slate-500">Extensa • ~20 minutes</p>
                  </div>
                </div>
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  version === 'Completa' ? "bg-blue-800 border-blue-800" : "border-slate-300"
                )}>
                  {version === 'Completa' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Uma avaliação abrangente cobrindo todos os domínios da atenção primária e métricas de saúde bucal para uma análise minuciosa.</p>
            </div>
          </label>

          <label className="relative block cursor-pointer group">
            <input 
              type="radio" 
              name="version" 
              value="Reduzida"
              checked={version === 'Reduzida'}
              onChange={() => setVersion('Reduzida')}
              className="peer hidden" 
            />
            <div className={cn(
              "p-5 bg-white border-2 rounded-2xl shadow-sm transition-all hover:shadow-md",
              version === 'Reduzida' ? "border-blue-800" : "border-transparent"
            )}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-800">
                    <Timer size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">Versão Reduzida</h3>
                    <p className="text-sm text-slate-500">Reduzida • ~8 minutes</p>
                  </div>
                </div>
                <div className={cn(
                  "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors",
                  version === 'Reduzida' ? "bg-blue-800 border-blue-800" : "border-slate-300"
                )}>
                  {version === 'Reduzida' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">Uma versão simplificada focada em indicadores-chave de desempenho para triagem rápida e avaliação de alto nível.</p>
            </div>
          </label>
        </section>

        <section className="pt-4">
          <Link to="/inventory" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-800/20 transition-all flex items-center justify-center gap-2">
            Iniciar Questionário <ChevronRight size={20} />
          </Link>
          <p className="text-center text-xs text-slate-500 mt-4">Você pode salvar seu progresso e retornar mais tarde.</p>
        </section>
      </main>
    </div>
  );
}
