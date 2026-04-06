import React from 'react';
import { GraduationCap, Map, BarChart3, BookOpen, Phone, Instagram, Linkedin, FileText, Newspaper, ArrowRight, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 pb-20">
      {/* Header / Hero */}
      <header className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white p-8 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <Map size={250} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-md border border-white/10 shadow-lg">
              <Globe size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold leading-tight tracking-tight">GeoPCATool</h1>
              <p className="text-xs uppercase tracking-widest font-bold text-blue-200 mt-1">Inteligência em Saúde Pública</p>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Mapeamento Socioterritorial <br className="hidden md:block"/> em Saúde Bucal
          </h2>
          <p className="text-blue-50 text-base md:text-lg leading-relaxed mb-8 max-w-2xl font-light">
            Uma plataforma inovadora para avaliação da Atenção Primária à Saúde (APS), baseada no instrumento PCATool-Brasil. Transformando dados brutos em evidências georreferenciadas para tomadas de decisão estratégicas e precisas.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/selection" className="bg-white text-blue-900 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Iniciar Coleta de Dados <ArrowRight size={18} />
            </Link>
            <Link to="/dashboard" className="bg-blue-800/40 text-white border border-blue-300/30 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-800/60 transition-all backdrop-blur-md">
              Acessar Painel Analítico
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8 space-y-8 mt-4 max-w-5xl mx-auto w-full">
        {/* Sobre o Projeto e Ferramenta */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10"></div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-emerald-100 p-4 rounded-2xl text-emerald-600 shrink-0 shadow-inner">
              <BookOpen size={32} />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Sobre o Projeto</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                O <strong>GeoPCATool</strong> é fruto do projeto de Pós-Doutorado do <strong>Prof. Dr. Márcio Souza</strong>. A ferramenta foi desenvolvida para suprir a necessidade de uma avaliação espacializada e contínua dos atributos da Atenção Primária à Saúde (APS), com foco inicial em Saúde Bucal, mas perfeitamente expansível para a saúde geral.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Utilizando o instrumento validado <strong>PCATool-Brasil</strong> (Primary Care Assessment Tool), o sistema coleta a percepção de usuários e profissionais. O grande diferencial é o cruzamento desses dados com a localização geográfica (georreferenciamento), permitindo identificar áreas de vulnerabilidade e direcionar políticas públicas de forma cirúrgica.
              </p>
            </div>
          </div>
        </section>

        {/* Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600 w-fit mb-4">
              <Map size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Inteligência Geográfica</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Mapeamento de vulnerabilidades territoriais para alocação eficiente e equitativa de recursos do SUS.</p>
          </div>
          
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-amber-100 p-3 rounded-xl text-amber-600 w-fit mb-4">
              <BarChart3 size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Decisões Baseadas em Dados</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Painéis analíticos avançados e IA para transformar respostas brutas em relatórios gerenciais acionáveis.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="bg-rose-100 p-3 rounded-xl text-rose-600 w-fit mb-4">
              <HeartPulse size={24} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Foco no SUS</h4>
            <p className="text-sm text-slate-600 leading-relaxed">Fortalecimento da Atenção Primária como ordenadora da rede e coordenadora do cuidado em saúde.</p>
          </div>
        </div>

        {/* Feed de Notícias (Placeholder) */}
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Newspaper size={24} />
              </div>
              Feed de Notícias & Atualizações
            </h3>
          </div>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-5 py-2 bg-slate-50/50 rounded-r-xl">
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider bg-blue-100 px-2 py-1 rounded-md">Lançamento</span>
              <h4 className="font-bold text-slate-800 text-base mt-3">Nova versão do GeoPCATool disponível</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">O sistema agora conta com análise inteligente via IA, cruzamento de dados com taxas de ICSAP e exportação de relatórios gerenciais em PDF.</p>
            </div>
            <div className="border-l-4 border-slate-300 pl-5 py-2">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-1 rounded-md">Pesquisa de Campo</span>
              <h4 className="font-bold text-slate-800 text-base mt-3">Início da coleta de dados em Governador Valadares</h4>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">Equipes de campo iniciaram a aplicação dos questionários nas unidades de saúde do município, focando na avaliação da saúde bucal.</p>
            </div>
          </div>
        </section>

        {/* Contato / Bio */}
        <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          
          <h3 className="text-xl font-bold mb-6 border-b border-slate-700/50 pb-4 relative z-10">Pesquisador Responsável</h3>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
            <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border-4 border-blue-500 shadow-lg shadow-blue-500/20 overflow-hidden relative group">
              <img 
                src="https://i.imgur.com/aqyyDKq.jpeg" 
                alt="Prof. Dr. Márcio Souza" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback para o ícone caso a imagem não carregue
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <GraduationCap size={48} className="text-blue-300 hidden absolute" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 justify-center md:justify-start mb-1">
                <h4 className="text-2xl font-bold text-white">Prof. Dr. Márcio Souza</h4>
                <span className="text-blue-400/70 font-semibold text-lg">UFJF/GV</span>
              </div>
              <p className="text-base text-blue-300 mb-6 font-medium">Pós-Doutorando e Idealizador do GeoPCATool</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="http://lattes.cnpq.br/4578008002785684" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-300 hover:text-white transition-colors bg-slate-800/50 p-3 rounded-xl hover:bg-slate-800">
                  <FileText size={18} className="text-slate-400" />
                  Currículo Lattes
                </a>
                <a href="https://www.linkedin.com/in/souzamlm" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-300 hover:text-white transition-colors bg-slate-800/50 p-3 rounded-xl hover:bg-slate-800">
                  <Linkedin size={18} className="text-blue-400" />
                  LinkedIn
                </a>
                <a href="https://instagram.com/biostatpro" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-300 hover:text-white transition-colors bg-slate-800/50 p-3 rounded-xl hover:bg-slate-800">
                  <Instagram size={18} className="text-pink-400" />
                  @biostatpro
                </a>
                <a href="https://wa.me/5533987064570?text=Ol%C3%A1%2C%20Prof.%20Dr.%20M%C3%A1rcio%20Souza!%20Vim%20pelo%20projeto%20GeoPCATool.%20Gostaria%20de%20conversar%20contigo..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-sm text-slate-300 hover:text-white transition-colors bg-slate-800/50 p-3 rounded-xl hover:bg-slate-800">
                  <Phone size={18} className="text-emerald-400" />
                  (33) 98706-4570
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
