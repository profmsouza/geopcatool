import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, FileText, Settings, Users, Map as MapIcon, BarChart2 } from 'lucide-react';
import { cn } from '../lib/utils';

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <main className="flex-1 w-full max-w-md mx-auto relative pb-20">
        <Outlet />
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50">
        <div className="flex justify-around items-center max-w-md mx-auto px-2 py-2">
          <NavItem to="/" icon={<Home size={24} />} label="Início" active={location.pathname === '/'} />
          
          {isDashboard ? (
             <>
               <NavItem to="/dashboard" icon={<MapIcon size={24} />} label="Mapa" active={location.pathname === '/dashboard'} />
               <NavItem to="/dashboard/stats" icon={<BarChart2 size={24} />} label="Resumo" active={location.pathname === '/dashboard/stats'} />
             </>
          ) : (
             <>
               <NavItem to="/selection" icon={<FileText size={24} />} label="Avaliações" active={location.pathname.startsWith('/selection') || location.pathname.startsWith('/inventory') || location.pathname.startsWith('/questionnaire')} />
               <NavItem to="/patients" icon={<Users size={24} />} label="Pacientes" active={location.pathname === '/patients'} />
             </>
          )}
          
          <NavItem to="/settings" icon={<Settings size={24} />} label="Ajustes" active={location.pathname === '/settings'} />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ to, icon, label, active }: { to: string, icon: React.ReactNode, label: string, active: boolean }) {
  return (
    <Link 
      to={to} 
      className={cn(
        "flex flex-col items-center justify-center gap-1 p-2 transition-colors",
        active ? "text-blue-700" : "text-slate-500 hover:text-blue-700"
      )}
    >
      {icon}
      <span className="text-[10px] font-semibold uppercase tracking-wider">{label}</span>
    </Link>
  );
}
