export function exportToEsusCSV(data: any[], filename = 'export_esus.csv') {
  if (!data || data.length === 0) return;

  // PEC/e-SUS standard naming (simplified mapping for demonstration)
  const headers = [
    'CO_SEQ_FAT_FICHA_ATEND_INDIVIDUAL',
    'NU_CNS_CIDADAO',
    'DT_NASCIMENTO',
    'CO_SEXO',
    'CO_RACA_COR',
    'CO_LOCALIDADE_IBGE',
    'SCORE_GERAL_PCATOOL',
    'SCORE_ACESSO',
    'SCORE_LONGITUDINALIDADE',
    'SCORE_COORDENACAO',
    'SCORE_INTEGRALIDADE',
    'SCORE_ORIENTACAO_FAMILIAR',
    'SCORE_ORIENTACAO_COMUNITARIA'
  ];

  const rows = data.map(row => {
    return [
      row.id || '',
      row.registration_number || '',
      row.birth_date || '',
      '', // Sexo (not collected in current form)
      '', // Raca/Cor (not collected in current form)
      row.cep || '', // IBGE code would be better, using CEP as fallback
      row.score?.toFixed(2) || '',
      row.score_acesso_acessibilidade?.toFixed(2) || '',
      row.score_longitudinalidade?.toFixed(2) || '',
      row.score_coordenacao_cuidados?.toFixed(2) || '',
      row.score_integralidade_disponiveis?.toFixed(2) || '',
      row.score_orientacao_familiar?.toFixed(2) || '',
      row.score_orientacao_comunitaria?.toFixed(2) || ''
    ].map(val => `"${val}"`).join(';');
  });

  const csvContent = [headers.join(';'), ...rows].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
