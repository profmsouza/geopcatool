import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Info, MapPin, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { calculatePCAToolScore } from '../lib/calculator';
import { supabase } from '../lib/supabase';

const QUESTIONS = [
  { id: 1, text: "Considero minha saúde bucal excelente.", desc: "Autopercepção positiva da saúde bucal." },
  { id: 2, text: "Sinto dor nos dentes frequentemente.", desc: "Presença de sintomas dolorosos recorrentes." },
  { id: 3, text: "Tenho dificuldade para mastigar alimentos duros.", desc: "Impacto funcional na mastigação." },
  { id: 4, text: "Escovo os dentes pelo menos duas vezes ao dia.", desc: "Hábito de higiene bucal diário." },
  { id: 5, text: "Uso fio dental regularmente.", desc: "Hábito de higiene interproximal." },
  { id: 6, text: "Visito o dentista pelo menos uma vez por ano.", desc: "Frequência de uso de serviços odontológicos." },
  { id: 7, text: "Tenho acesso fácil a serviços odontológicos.", desc: "Acessibilidade aos serviços." },
  { id: 8, text: "Sinto vergonha do aspecto dos meus dentes.", desc: "Impacto psicossocial da saúde bucal." },
  { id: 9, text: "Minha saúde bucal afeta minha qualidade de vida.", desc: "Impacto geral na qualidade de vida." },
  { id: 10, text: "Recebo orientações adequadas sobre cuidados bucais.", desc: "Acesso a informações preventivas." },
  { id: 11, text: "Tenho condições financeiras para tratamento odontológico.", desc: "Acessibilidade financeira." },
  { id: 12, text: "Considero importante cuidar da saúde bucal.", desc: "Valorização da saúde bucal." }
];

export function Questionnaire() {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>(Array(12).fill(0));
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    }
  }, []);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = value;
    setAnswers(newAnswers);
    
    // Auto advance after a short delay
    if (currentQ < QUESTIONS.length - 1) {
      setTimeout(() => setCurrentQ(q => q + 1), 300);
    }
  };

  const handleFinish = async () => {
    if (answers.includes(0)) {
      alert("Por favor, responda todas as perguntas.");
      return;
    }

    const { score, isHighQuality } = calculatePCAToolScore(answers);
    
    try {
      // Attempt to save to Supabase
      await supabase.from('survey_responses').insert([
        {
          answers,
          score,
          is_high_quality: isHighQuality,
          latitude: location?.lat,
          longitude: location?.lng,
          created_at: new Date().toISOString()
        }
      ]);
    } catch (e) {
      console.error("Failed to save to Supabase, continuing anyway", e);
    }

    navigate('/dashboard', { state: { score, isHighQuality } });
  };

  const q = QUESTIONS[currentQ];
  const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="flex items-center p-4 justify-between w-full">
          <button onClick={() => navigate(-1)} className="text-blue-800 flex w-10 h-10 items-center justify-center rounded-full hover:bg-blue-50 transition-colors">
            <ArrowLeft size={24} />
          </button>
          <div className="text-center flex-1">
            <h2 className="text-slate-900 text-lg font-bold leading-tight tracking-tight">Questionário PCATool</h2>
            <div className="flex items-center justify-center gap-1.5 mt-0.5">
              <MapPin size={14} className="text-emerald-600" />
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                {location ? `GPS: ${location.lat.toFixed(2)}, ${location.lng.toFixed(2)}` : 'Buscando GPS...'}
              </span>
            </div>
          </div>
          <button className="text-blue-800 flex w-10 h-10 items-center justify-center rounded-full hover:bg-blue-50 transition-colors">
            <Info size={24} />
          </button>
        </div>
        
        <div className="w-full px-4 pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-blue-800 font-bold text-xs uppercase tracking-widest">Módulo Saúde Bucal</span>
                <p className="text-slate-900 text-base font-semibold leading-none">Autoavaliação</p>
              </div>
              <p className="text-slate-500 text-xs font-medium italic">Questão {currentQ + 1} de {QUESTIONS.length}</p>
            </div>
            <div className="h-2 w-full rounded-full bg-blue-100 overflow-hidden">
              <div className="h-full rounded-full bg-blue-800 transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full p-4 overflow-y-auto">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100 mb-6">
          <span className="inline-block px-2 py-1 rounded bg-blue-100 text-blue-800 text-[10px] font-bold uppercase tracking-wider mb-3">Item {currentQ + 1}</span>
          <h3 className="text-slate-900 text-xl font-bold leading-snug mb-4">{q.text}</h3>
          <p className="text-slate-500 text-sm leading-relaxed italic">{q.desc}</p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-8">
          {[
            { val: 1, label: "Com certeza não" },
            { val: 2, label: "Provavelmente não" },
            { val: 3, label: "Provavelmente sim" },
            { val: 4, label: "Com certeza sim" }
          ].map((option) => (
            <button 
              key={option.val}
              onClick={() => handleAnswer(option.val)}
              className={cn(
                "group flex items-center justify-between p-4 rounded-xl border-2 transition-all",
                answers[currentQ] === option.val 
                  ? "border-blue-800 bg-blue-50" 
                  : "border-blue-100 bg-white hover:border-blue-800 hover:bg-blue-50"
              )}
            >
              <div className="flex items-center gap-4">
                <span className={cn(
                  "flex w-10 h-10 items-center justify-center rounded-lg font-bold transition-colors",
                  answers[currentQ] === option.val
                    ? "bg-blue-800 text-white"
                    : "bg-blue-100 text-blue-800 group-hover:bg-blue-800 group-hover:text-white"
                )}>
                  {option.val}
                </span>
                <span className="font-medium text-slate-700">{option.label}</span>
              </div>
              <CheckCircle2 className={cn(
                "transition-opacity",
                answers[currentQ] === option.val ? "opacity-100 text-blue-800" : "opacity-0 group-hover:opacity-100 text-blue-800"
              )} />
            </button>
          ))}
          
          <div className="my-2 border-t border-dashed border-blue-200"></div>
          
          <button 
            onClick={() => handleAnswer(9)}
            className={cn(
              "group flex items-center justify-between p-4 rounded-xl border-2 transition-all",
              answers[currentQ] === 9
                ? "border-slate-400 bg-slate-100"
                : "border-slate-200 bg-slate-50 hover:border-slate-400"
            )}
          >
            <div className="flex items-center gap-4">
              <span className={cn(
                "flex w-10 h-10 items-center justify-center rounded-lg font-bold",
                answers[currentQ] === 9 ? "bg-slate-400 text-white" : "bg-slate-200 text-slate-600"
              )}>9</span>
              <span className="font-medium text-slate-600">Não sei / Não lembro</span>
            </div>
            {answers[currentQ] === 9 && <CheckCircle2 className="text-slate-500" />}
          </button>
        </div>

        <div className="flex gap-4 mb-10">
          <button 
            onClick={() => setCurrentQ(q => Math.max(0, q - 1))}
            disabled={currentQ === 0}
            className="flex-1 py-4 px-6 rounded-xl border-2 border-blue-800 text-blue-800 font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} /> Anterior
          </button>
          
          {currentQ < QUESTIONS.length - 1 ? (
            <button 
              onClick={() => setCurrentQ(q => q + 1)}
              disabled={answers[currentQ] === 0}
              className="flex-1 py-4 px-6 rounded-xl bg-blue-800 text-white font-bold hover:bg-blue-900 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-800/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próxima <ChevronRight size={20} />
            </button>
          ) : (
            <button 
              onClick={handleFinish}
              disabled={answers[currentQ] === 0}
              className="flex-1 py-4 px-6 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Finalizar
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
