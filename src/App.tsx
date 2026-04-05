/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Selection } from './pages/Selection';
import { Inventory } from './pages/Inventory';
import { Questionnaire } from './pages/Questionnaire';
import { Dashboard } from './pages/Dashboard';
import { Settings } from './pages/Settings';
import { AddHealthUnit } from './pages/AddHealthUnit';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50 text-blue-800">Carregando...</div>;
  }
  
  if (!user) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
            <Route path="/home" element={<Home />} />
            <Route path="/selection" element={<Selection />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ubs/nova" element={<AddHealthUnit />} />
            <Route path="/patients" element={<div className="p-6 text-center text-slate-500 mt-20">Módulo de Pacientes em desenvolvimento</div>} />
            <Route path="/dashboard/stats" element={<div className="p-6 text-center text-slate-500 mt-20">Módulo de Estatísticas em desenvolvimento</div>} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
