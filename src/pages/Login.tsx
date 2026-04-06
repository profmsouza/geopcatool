import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Lock, Mail, AlertCircle, Globe, GraduationCap } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { cn } from '../lib/utils';

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate('/home');
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        setError('Conta criada com sucesso! Faça login para continuar.');
        setIsLogin(true);
      }
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro durante a autenticação.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen p-6 bg-slate-50">
      <header className="flex items-center gap-3 mb-10">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
          <Globe size={28} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-800">GeoPCATool</h1>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">Avaliação da Atenção Primária</p>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full mb-8 text-center">
          <div className="inline-flex items-center justify-center w-56 h-56 mb-6">
            <img 
              src="https://i.imgur.com/0p5KYy3.png" 
              alt="GeoPCATool Logo" 
              className="w-full h-full object-contain drop-shadow-xl" 
            />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-slate-900">
            {isLogin ? 'Bem-vindo(a) de volta' : 'Crie sua conta'}
          </h2>
          <p className="text-slate-600">
            {isLogin ? 'Avaliação Acadêmica e Profissional Segura' : 'Cadastre-se para gerenciar avaliações'}
          </p>
        </div>

        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <form className="space-y-6" onSubmit={handleAuth}>
            {error && (
              <div className={cn(
                "p-4 rounded-xl text-sm flex items-start gap-3",
                error.includes('sucesso') ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
              )}>
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Endereço de E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all" 
                  placeholder="nome@exemplo.com" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">Senha</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="password" 
                  id="password" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-800/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? 'Aguarde...' : (isLogin ? 'Entrar no Portal' : 'Criar Conta')}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(null);
              }}
              className="text-sm font-medium text-blue-800 hover:text-blue-700"
            >
              {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
