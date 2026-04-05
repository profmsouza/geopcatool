-- Script para gerar dados fictícios (Mock Data) para o Dashboard do GeoPCATool
-- Cidade: Governador Valadares - MG
-- Execute este script no SQL Editor do Supabase

INSERT INTO survey_responses (
  id, 
  created_at, 
  neighborhood, 
  city, 
  state, 
  service_type, 
  target_group, 
  version, 
  answers, 
  question_codes, 
  score, 
  is_high_quality, 
  components, 
  latitude, 
  longitude
) VALUES
-- Centro (Área Central - Geralmente escores melhores)
(gen_random_uuid(), NOW() - INTERVAL '2 days', 'Centro', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 8.2, true, '{"A": 8.5, "B": 9.0, "C": 7.5, "D": 8.0, "E": 8.0}'::jsonb, -18.8514, -41.9466),
(gen_random_uuid(), NOW() - INTERVAL '5 days', 'Centro', 'Governador Valadares', 'MG', 'geral', 'Criança', 'Extensa', '{}'::jsonb, '{}', 7.8, true, '{"A": 8.0, "B": 8.5, "C": 7.0, "D": 7.5, "E": 8.0}'::jsonb, -18.8530, -41.9480),
(gen_random_uuid(), NOW() - INTERVAL '12 days', 'Centro', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 6.9, true, '{"A": 7.0, "B": 7.5, "C": 6.5, "D": 6.5, "E": 7.0}'::jsonb, -18.8490, -41.9450),

-- Ilha dos Araújos (Bairro Nobre - Escores altos)
(gen_random_uuid(), NOW() - INTERVAL '1 day', 'Ilha dos Araújos', 'Governador Valadares', 'MG', 'geral', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 9.1, true, '{"A": 9.5, "B": 9.0, "C": 9.5, "D": 8.5, "E": 9.0}'::jsonb, -18.8580, -41.9400),
(gen_random_uuid(), NOW() - INTERVAL '8 days', 'Ilha dos Araújos', 'Governador Valadares', 'MG', 'bucal', 'Criança', 'Extensa', '{}'::jsonb, '{}', 8.5, true, '{"A": 9.0, "B": 8.5, "C": 8.0, "D": 8.5, "E": 8.5}'::jsonb, -18.8595, -41.9380),

-- Vila Bretas (Bairro Populoso - Escores medianos/baixos)
(gen_random_uuid(), NOW() - INTERVAL '3 days', 'Vila Bretas', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 5.5, false, '{"A": 6.0, "B": 5.0, "C": 4.5, "D": 6.0, "E": 6.0}'::jsonb, -18.8450, -41.9600),
(gen_random_uuid(), NOW() - INTERVAL '7 days', 'Vila Bretas', 'Governador Valadares', 'MG', 'geral', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 6.2, false, '{"A": 6.5, "B": 6.0, "C": 5.5, "D": 6.5, "E": 6.5}'::jsonb, -18.8430, -41.9620),
(gen_random_uuid(), NOW() - INTERVAL '15 days', 'Vila Bretas', 'Governador Valadares', 'MG', 'bucal', 'Criança', 'Extensa', '{}'::jsonb, '{}', 4.8, false, '{"A": 5.0, "B": 4.5, "C": 4.0, "D": 5.0, "E": 5.5}'::jsonb, -18.8470, -41.9580),

-- Santa Rita (Bairro Periférico - Escores mais baixos, vulnerabilidade)
(gen_random_uuid(), NOW() - INTERVAL '4 days', 'Santa Rita', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 4.2, false, '{"A": 4.5, "B": 4.0, "C": 3.5, "D": 4.5, "E": 4.5}'::jsonb, -18.8650, -41.9700),
(gen_random_uuid(), NOW() - INTERVAL '9 days', 'Santa Rita', 'Governador Valadares', 'MG', 'geral', 'Criança', 'Extensa', '{}'::jsonb, '{}', 3.8, false, '{"A": 4.0, "B": 3.5, "C": 3.0, "D": 4.0, "E": 4.5}'::jsonb, -18.8670, -41.9720),
(gen_random_uuid(), NOW() - INTERVAL '20 days', 'Santa Rita', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 5.1, false, '{"A": 5.5, "B": 5.0, "C": 4.5, "D": 5.0, "E": 5.5}'::jsonb, -18.8630, -41.9680),

-- Lourdes (Bairro Tradicional - Escores mistos)
(gen_random_uuid(), NOW() - INTERVAL '2 days', 'Lourdes', 'Governador Valadares', 'MG', 'geral', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 7.1, true, '{"A": 7.5, "B": 7.0, "C": 6.5, "D": 7.5, "E": 7.0}'::jsonb, -18.8400, -41.9300),
(gen_random_uuid(), NOW() - INTERVAL '11 days', 'Lourdes', 'Governador Valadares', 'MG', 'bucal', 'Criança', 'Extensa', '{}'::jsonb, '{}', 6.4, false, '{"A": 6.5, "B": 6.0, "C": 6.0, "D": 6.5, "E": 7.0}'::jsonb, -18.8420, -41.9280),

-- São Paulo (Bairro Populoso - Escores medianos)
(gen_random_uuid(), NOW() - INTERVAL '6 days', 'São Paulo', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 5.9, false, '{"A": 6.0, "B": 5.5, "C": 5.0, "D": 6.5, "E": 6.5}'::jsonb, -18.8700, -41.9500),
(gen_random_uuid(), NOW() - INTERVAL '14 days', 'São Paulo', 'Governador Valadares', 'MG', 'geral', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 6.7, true, '{"A": 7.0, "B": 6.5, "C": 6.0, "D": 7.0, "E": 7.0}'::jsonb, -18.8720, -41.9520),

-- Grã-Duquesa (Bairro Misto - Escores bons)
(gen_random_uuid(), NOW() - INTERVAL '1 day', 'Grã-Duquesa', 'Governador Valadares', 'MG', 'bucal', 'Criança', 'Extensa', '{}'::jsonb, '{}', 7.5, true, '{"A": 8.0, "B": 7.5, "C": 7.0, "D": 7.5, "E": 7.5}'::jsonb, -18.8350, -41.9550),
(gen_random_uuid(), NOW() - INTERVAL '10 days', 'Grã-Duquesa', 'Governador Valadares', 'MG', 'geral', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 6.8, true, '{"A": 7.0, "B": 6.5, "C": 6.5, "D": 7.0, "E": 7.0}'::jsonb, -18.8370, -41.9530),

-- Altinópolis (Bairro Periférico - Escores mistos)
(gen_random_uuid(), NOW() - INTERVAL '5 days', 'Altinópolis', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 5.2, false, '{"A": 5.5, "B": 5.0, "C": 4.5, "D": 5.5, "E": 5.5}'::jsonb, -18.8600, -41.9200),
(gen_random_uuid(), NOW() - INTERVAL '18 days', 'Altinópolis', 'Governador Valadares', 'MG', 'geral', 'Criança', 'Extensa', '{}'::jsonb, '{}', 6.1, false, '{"A": 6.5, "B": 6.0, "C": 5.5, "D": 6.0, "E": 6.5}'::jsonb, -18.8620, -41.9220),

-- Mais alguns dados aleatórios para volume
(gen_random_uuid(), NOW() - INTERVAL '22 days', 'Centro', 'Governador Valadares', 'MG', 'bucal', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 7.9, true, '{"A": 8.0, "B": 8.0, "C": 7.5, "D": 8.0, "E": 8.0}'::jsonb, -18.8500, -41.9470),
(gen_random_uuid(), NOW() - INTERVAL '25 days', 'Vila Bretas', 'Governador Valadares', 'MG', 'geral', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 5.8, false, '{"A": 6.0, "B": 5.5, "C": 5.0, "D": 6.0, "E": 6.5}'::jsonb, -18.8460, -41.9590),
(gen_random_uuid(), NOW() - INTERVAL '28 days', 'Santa Rita', 'Governador Valadares', 'MG', 'bucal', 'Criança', 'Extensa', '{}'::jsonb, '{}', 4.5, false, '{"A": 5.0, "B": 4.0, "C": 3.5, "D": 5.0, "E": 5.0}'::jsonb, -18.8660, -41.9710),
(gen_random_uuid(), NOW() - INTERVAL '30 days', 'Ilha dos Araújos', 'Governador Valadares', 'MG', 'geral', 'Adulto', 'Extensa', '{}'::jsonb, '{}', 8.8, true, '{"A": 9.0, "B": 8.5, "C": 8.5, "D": 9.0, "E": 9.0}'::jsonb, -18.8590, -41.9390);
