import React, { useState, useEffect } from 'react';
import { Save, Key, AlertCircle, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';
import { cn } from '../lib/utils';

export function Settings() {
  const { user } = useAuth();
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null);

  useEffect(() => {
    if (user) {
      loadSettings();
    }
  }, [user]);

  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('user_settings')
        .select('gemini_api_key')
        .eq('id', user?.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading settings:', error);
      } else if (data && data.gemini_api_key) {
        setApiKey(data.gemini_api_key);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    setStatus(null);

    try {
      const { error } = await supabase
        .from('user_settings')
        .upsert({ 
          id: user.id, 
          gemini_api_key: apiKey,
          updated_at: new Date().toISOString()
        });

      if (error) throw error;
      
      setStatus({ type: 'success', message: 'Configurações salvas com sucesso!' });
    } catch (err: any) {
      setStatus({ type: 'error', message: err.message || 'Erro ao salvar configurações.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto mt-16 mb-24">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Configurações do Gestor</h1>
        <p className="text-slate-600 mt-1">Gerencie suas chaves de API e preferências do sistema.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-lg text-blue-700">
              <Key size={24} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Inteligência Artificial (DeepSeek)</h2>
              <p className="text-sm text-slate-500">Configure sua chave de API para habilitar análises automáticas no Dashboard.</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-6">
          {status && (
            <div className={cn(
              "p-4 rounded-xl text-sm flex items-start gap-3",
              status.type === 'success' ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
            )}>
              {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /> : <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />}
              <p>{status.message}</p>
            </div>
          )}

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-slate-700">
                DeepSeek API Key
              </label>
              <a 
                href="https://platform.deepseek.com/api_keys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-700 hover:text-blue-800 hover:underline flex items-center gap-1"
              >
                Gerar chave na DeepSeek
              </a>
            </div>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="sk-..."
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-700 focus:border-transparent outline-none transition-all font-mono text-sm"
            />
            <p className="mt-2 text-xs text-slate-500">
              Sua chave é armazenada com segurança no banco de dados e usada exclusivamente para gerar relatórios e insights sobre os dados coletados no seu município.
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50"
            >
              <Save size={20} />
              {loading ? 'Salvando...' : 'Salvar Configurações'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
