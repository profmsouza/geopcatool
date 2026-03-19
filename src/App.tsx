/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Selection } from './pages/Selection';
import { Inventory } from './pages/Inventory';
import { Questionnaire } from './pages/Questionnaire';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/selection" element={<Selection />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patients" element={<div className="p-6 text-center text-slate-500 mt-20">Módulo de Pacientes em desenvolvimento</div>} />
          <Route path="/dashboard/stats" element={<div className="p-6 text-center text-slate-500 mt-20">Módulo de Estatísticas em desenvolvimento</div>} />
          <Route path="/settings" element={<div className="p-6 text-center text-slate-500 mt-20">Configurações em desenvolvimento</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
