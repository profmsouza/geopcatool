-- Script para gerar 100 registros fictícios completos para o GeoPCATool
-- Preenche todas as variáveis, incluindo os escores individuais por componente.
-- Execute este script no SQL Editor do Supabase.

WITH generated_data AS (
  SELECT
    gen_random_uuid() as id,
    NOW() - (random() * interval '90 days') as created_at,
    'SUS-' || floor(random() * 1000000)::text as registration_number,
    CURRENT_DATE - (floor(random() * 60 + 18) * interval '1 year') as birth_date,
    floor(random() * 60 + 18) as age,
    (ARRAY['Ensino Fundamental', 'Ensino Médio', 'Ensino Superior'])[floor(random() * 3 + 1)] as education_level,
    (ARRAY['Até 1 SM', '1 a 3 SM', 'Mais de 3 SM'])[floor(random() * 3 + 1)] as monthly_income,
    '35000-000' as cep,
    'Rua Fictícia, ' || floor(random() * 1000)::text as street,
    (ARRAY['Centro', 'Ilha dos Araújos', 'Vila Bretas', 'Santa Rita', 'Lourdes', 'São Paulo', 'Grã-Duquesa', 'Altinópolis'])[floor(random() * 8 + 1)] as neighborhood,
    'Governador Valadares' as city,
    'MG' as state,
    -18.8514 + (random() * 0.04 - 0.02) as latitude,
    -41.9466 + (random() * 0.04 - 0.02) as longitude,
    (ARRAY['Menos de 1km', '1 a 3km', 'Mais de 3km'])[floor(random() * 3 + 1)] as distance_to_ubs,
    (ARRAY['A pé', 'Ônibus', 'Carro/Moto'])[floor(random() * 3 + 1)] as transport_mode,
    (ARRAY['bucal', 'geral'])[floor(random() * 2 + 1)] as service_type,
    (ARRAY['Adulto', 'Criança'])[floor(random() * 2 + 1)] as target_group,
    'Extensa' as version,
    '{}'::jsonb as answers,
    '[]'::jsonb as question_codes,
    -- Gerando notas aleatórias entre 3.0 e 10.0 para cada componente
    round((random() * 7 + 3)::numeric, 2) as s_a,
    round((random() * 7 + 3)::numeric, 2) as s_b,
    round((random() * 7 + 3)::numeric, 2) as s_c,
    round((random() * 7 + 3)::numeric, 2) as s_d,
    round((random() * 7 + 3)::numeric, 2) as s_e,
    round((random() * 7 + 3)::numeric, 2) as s_f,
    round((random() * 7 + 3)::numeric, 2) as s_g,
    round((random() * 7 + 3)::numeric, 2) as s_h,
    round((random() * 7 + 3)::numeric, 2) as s_i,
    round((random() * 7 + 3)::numeric, 2) as s_j
  FROM generate_series(1, 100)
)
INSERT INTO survey_responses (
  id, created_at, registration_number, birth_date, age, education_level, monthly_income,
  cep, street, neighborhood, city, state, latitude, longitude, distance_to_ubs,
  transport_mode, service_type, target_group, version, answers, question_codes,
  score, is_high_quality, components,
  score_afiliacao, score_acesso_utilizacao, score_acesso_acessibilidade,
  score_longitudinalidade, score_coordenacao_cuidados, score_coordenacao_sistemas,
  score_integralidade_disponiveis, score_integralidade_prestados,
  score_orientacao_familiar, score_orientacao_comunitaria
)
SELECT
  id, created_at, registration_number, birth_date, age, education_level, monthly_income,
  cep, street, neighborhood, city, state, latitude, longitude, distance_to_ubs,
  transport_mode, service_type, target_group, version, answers, question_codes,
  -- Calcula a média geral
  round((s_a + s_b + s_c + s_d + s_e + s_f + s_g + s_h + s_i + s_j) / 10.0, 2) as score,
  -- Define se é alta qualidade (>= 6.6)
  (s_a + s_b + s_c + s_d + s_e + s_f + s_g + s_h + s_i + s_j) / 10.0 >= 6.6 as is_high_quality,
  -- Monta o JSONB com os componentes (usado pelos gráficos do Dashboard)
  jsonb_build_object(
    'A', s_a, 'B', s_b, 'C', s_c, 'D', s_d, 'E', s_e,
    'F', s_f, 'G', s_g, 'H', s_h, 'I', s_i, 'J', s_j
  ) as components,
  -- Preenche as colunas individuais de score que você tem na tabela
  s_a, s_b, s_c, s_d, s_e, s_f, s_g, s_h, s_i, s_j
FROM generated_data;
