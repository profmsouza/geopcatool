import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Lock, LogIn, FilePlus, RefreshCw, Globe } from 'lucide-react';

export function Login() {
  return (
    <div className="flex flex-col min-h-screen p-6 bg-slate-50">
      <header className="flex items-center gap-3 mb-10">
        <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
          <Globe size={28} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-blue-800">GeoPCATool - Saúde Bucal</h1>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-slate-500">ACADÊMICO UNIVALE</p>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <div className="w-full mb-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-700 to-emerald-500 mb-6 shadow-xl">
            <GraduationCap size={40} className="text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-2 text-slate-900">Bem-vindo de volta</h2>
          <p className="text-slate-600">Avaliação Acadêmica e Profissional Segura</p>
        </div>

        <div className="w-full bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">Endereço de E-mail</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  id="email" 
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all" 
                  placeholder="nome@univale.edu" 
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
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-blue-700 focus:ring-blue-700" />
                <span className="text-slate-600">Lembrar-me</span>
              </label>
              <a href="#" className="text-blue-700 hover:underline font-medium">Esqueceu a senha?</a>
            </div>

            <Link to="/selection" className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-800/20 transition-all flex items-center justify-center gap-2">
              Entrar no Portal <LogIn size={20} />
            </Link>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full mt-8">
          <Link to="/selection" className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl hover:border-emerald-500 transition-colors group">
            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 mb-2 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <FilePlus size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-tight text-slate-700 text-center">Nova Avaliação</span>
          </Link>
          <Link to="/dashboard" className="flex flex-col items-center justify-center p-4 bg-white border border-slate-200 rounded-xl hover:border-blue-700 transition-colors group">
            <div className="p-3 rounded-full bg-blue-100 text-blue-700 mb-2 group-hover:bg-blue-700 group-hover:text-white transition-all">
              <RefreshCw size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-tight text-slate-700 text-center">Dashboard Gestor</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
