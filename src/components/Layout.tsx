import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Home, ClipboardList, Settings, Users, Map as MapIcon, BarChart2, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';

export function Layout() {
  const location = useLocation();
  const { signOut } = useAuth();
  const isDashboard = location.pathname.startsWith('/dashboard');
  const isSettings = location.pathname.startsWith('/settings');
  const isHome = location.pathname.startsWith('/home');
  
  // Use wider layout for dashboard, settings, and home
  const isWideLayout = isDashboard || isSettings || isHome;
  
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <main className={cn(
        "flex-1 w-full mx-auto relative pb-20",
        isWideLayout ? "max-w-7xl" : "max-w-md"
      )}>
        <Outlet />
      </main>
      
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50">
        <div className={cn(
          "flex justify-around items-center mx-auto px-2 py-2",
          isWideLayout ? "max-w-7xl" : "max-w-md"
        )}>
          <NavItem to="/home" icon={<Home size={24} />} label="Início" active={location.pathname === '/home'} />
          
          <NavItem to="/selection" icon={<ClipboardList size={24} />} label="Coleta" active={location.pathname === '/selection'} />
          
          <NavItem to="/dashboard" icon={<BarChart2 size={24} />} label="Painel" active={location.pathname === '/dashboard'} />
          
          <NavItem to="/settings" icon={<Settings size={24} />} label="Ajustes" active={location.pathname === '/settings'} />
          
          <button 
            onClick={() => signOut()}
            className="flex flex-col items-center justify-center gap-1 p-2 transition-colors text-slate-500 hover:text-red-600"
          >
            <LogOut size={24} />
            <span className="text-[10px] font-semibold uppercase tracking-wider">Sair</span>
          </button>
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
