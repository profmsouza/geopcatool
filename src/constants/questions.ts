export interface Question {
  id: number;
  code: string;
  text: string;
  desc: string;
  type?: 'likert' | 'filter' | 'a2_filter' | 'a3_filter' | 'affiliation' | 'text';
}

// ==============================================================================
// 1. PCATOOL – BRASIL PARA PACIENTES CRIANÇAS VERSÃO EXTENSA - OK
// ==============================================================================
export const QUESTIONS_CRIANCA_EXTENSA: Question[] = [
  // Afiliação
  { id: 1, code: "A1", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) onde você geralmente leva a criança quando ele(a) adoece ou se você precisa de conselhos sobre a saúde dele(a)?", desc: "Grau de Afiliação", type: "filter" },
  { id: 2, code: "A1.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 3, code: "A1.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 4, code: "A2", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que melhor conhece a criança como pessoa?", desc: "Grau de Afiliação", type: "a2_filter" },
  { id: 5, code: "A2.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 6, code: "A2.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 7, code: "A3", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que é mais responsável pelo atendimento de saúde da criança?", desc: "Grau de Afiliação", type: "a3_filter" },
  { id: 8, code: "A3.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 9, code: "A3.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 10, code: "A4", text: "Qual o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) da criança?", desc: "Grau de Afiliação", type: "text" },
  { id: 11, code: "A4.1", text: "Qual o endereço do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) da criança?", desc: "Grau de Afiliação", type: "text" },
  { id: 12, code: "A5", text: "Escreva o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) identificado(a) como a referência para os cuidados de saúde da criança, e esclareça ao(à) entrevistado(a) que a partir de agora, todas as perguntas serão sobre este(a) serviço ou profissional de saúde.", desc: "Grau de Afiliação", type: "text" },

  // Acesso de Primeiro Contato - Utilização
  { id: 13, code: "B1", text: "Quando a criança precisa de uma consulta de revisão (consulta de rotina, check-up), você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” antes de ir a outro serviço de saúde?", desc: "Acesso de Primeiro Contato - Utilização" },
  { id: 14, code: "B2", text: "Quando a criança tem um novo problema de saúde, você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” antes de ir a outro serviço de saúde?", desc: "Acesso de Primeiro Contato - Utilização" },
  { id: 15, code: "B3", text: "Quando a criança precisa consultar com um(a) especialista, o(a) “serviço de saúde/médico(a)/enfermeiro(a)” obrigatoriamente deve encaminhar a criança?", desc: "Acesso de Primeiro Contato - Utilização" },
  
  // Acesso de Primeiro Contato - Acessibilidade
  { id: 16, code: "C1", text: "Quando o(a) “serviço de saúde” está aberto(a) e a criança adoece, alguém deste serviço de saúde atende a criança no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 17, code: "C2", text: "Você precisa esperar por muito tempo ou falar com muitas pessoas para marcar consulta para a criança no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 18, code: "C3", text: "É fácil marcar uma consulta de revisão para a criança (consulta de rotina, check-up) no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 19, code: "C4", text: "Quando você chega no(a) “serviço de saúde”, você tem que esperar mais de 30 minutos para que a criança consulte com o(a) médico(a) ou enfermeiro(a) (sem considerar a triagem ou o acolhimento)?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 20, code: "C5", text: "É difícil para você conseguir atendimento médico para a criança no(a) “serviço de saúde” quando pensa que é necessário?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 21, code: "C6", text: "Quando o(a) “serviço de saúde” está aberto(a), você consegue aconselhamento rápido pelo telefone ou por ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat skype, hangout, e-mail) se precisar?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  
  // Longitudinalidade
  { id: 22, code: "D1", text: "Quando você vai ao(à) “serviço de saúde”, é o(a) mesmo(a) médico(a) ou enfermeiro(a) que atende a criança todas às vezes?", desc: "Longitudinalidade" },
  { id: 23, code: "D2", text: "Se você tiver uma pergunta pode telefonar ou utilizar alguma forma de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) e falar com o(a) médico(a) ou enfermeiro(a) que melhor conhece a criança?", desc: "Longitudinalidade" },
  { id: 24, code: "D3", text: "Você acha que o(a) “médico(a)/enfermeiro(a)” entende o que você diz ou pergunta?", desc: "Longitudinalidade" },
  { id: 25, code: "D4", text: "O(A) “médico(a)/enfermeiro(a)” responde as suas perguntas de maneira que você entenda?", desc: "Longitudinalidade" },
  { id: 26, code: "D5", text: "O(A) “médico(a)/enfermeiro(a)” dá tempo suficiente para você falar sobre as suas preocupações ou problemas com a saúde da criança?", desc: "Longitudinalidade" },
  { id: 27, code: "D6", text: "Você se sente à vontade contando as suas preocupações ou problemas sobre a saúde da criança ao(à) médico(a)/enfermeiro(a)”?", desc: "Longitudinalidade" },
  { id: 28, code: "D7", text: "O(A) “médico(a)/enfermeiro(a)” conhece a criança mais como pessoa do que somente como alguém com um problema de saúde?", desc: "Longitudinalidade" },
  { id: 29, code: "D8", text: "O(A) “médico(a)/enfermeiro(a)” conhece a história clínica (história médica) completa da criança?", desc: "Longitudinalidade" },
  { id: 30, code: "D9", text: "O(A) “médico(a)/enfermeiro(a)” sabe a respeito de todos os medicamentos que a criança está tomando?", desc: "Longitudinalidade" },
  { id: 31, code: "D10", text: "Se fosse muito fácil, você mudaria do(a) “serviço de saúde” para outro serviço de saúde?", desc: "Longitudinalidade" },
  { id: 32, code: "D11", text: "Você acha que o(a) “médico(a)/enfermeiro(a)” conhece a família da criança bastante bem?", desc: "Longitudinalidade" },
  { id: 33, code: "D12", text: "O(A) “médico(a)/enfermeiro(a)” sabe quais problemas são mais importantes para você e a família da criança?", desc: "Longitudinalidade" },
  { id: 34, code: "D13", text: "O(A) “médico(a)/enfermeiro(a)” sabe sobre o trabalho ou o emprego dos familiares da criança?", desc: "Longitudinalidade" },
  { id: 35, code: "D14", text: "De alguma forma, o(a) “médico(a)/enfermeiro(a)” saberia se você tivesse problemas em obter ou pagar por medicamentos que a criança precisa?", desc: "Longitudinalidade (Item Negativo)" },
  
  // Coordenação - Integração de Cuidados
  { id: 36, code: "E1", text: "A criança foi consultar qualquer tipo de especialista ou serviço especializado no período em que ela está em acompanhamento no(a)/com o(a) “serviço de saúde/ médico(a)/enfermeiro(a)”?", desc: "Coordenação - Integração de Cuidados (Filtro)", type: "filter" },
  { id: 37, code: "E2", text: "O(A) “médico(a)/enfermeiro(a)” sugeriu (indicou, encaminhou) que a criança fosse consultar com esse(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 38, code: "E3", text: "O(A) “médico(a)/enfermeiro(a)” sabe que a criança fez essa consulta com esse(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 39, code: "E4", text: "O(A) “médico(a)/enfermeiro(a)” sabe quais foram os resultados da consulta com o(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 40, code: "E5", text: "Depois que a criança foi a esse(a) especialista ou no serviço especializado, o(a) “médico(a)/enfermeiro(a)” conversou com você sobre o que aconteceu durante essa consulta?", desc: "Coordenação - Integração de Cuidados" },
  { id: 41, code: "E6", text: "O(A) “médico(a)/enfermeiro(a)” pareceu interessado(a) na qualidade do cuidado que a criança recebeu na consulta com o(a) especialista ou no serviço especializado (perguntou se a criança foi bem ou mal atendida)?", desc: "Coordenação - Integração de Cuidados" },
  
  // Coordenação - Sistemas de Informações
  { id: 42, code: "F1", text: "Quando você leva a criança ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” você leva algum dos registros de saúde ou boletins de atendimento que a criança recebeu em atendimentos anteriores (ex.: fichas de atendimento de emergência, carteira de vacinação, resultado de exames de laboratório)?", desc: "Coordenação - Sistemas de Informações" },
  { id: 43, code: "F2", text: "Quando você leva a criança ao(à) “serviço de saúde/médico(a)/enfermeiro(a)”, o prontuário (história clínica) da criança está sempre disponível na consulta?", desc: "Coordenação - Sistemas de Informações" },
  { id: 44, code: "F3", text: "Se quisesse, você poderia ler (consultar) o prontuário da criança no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Coordenação - Sistemas de Informações" },
  
  // Integralidade - Serviços Disponíveis
  { id: 45, code: "G1", text: "Vacinas (imunizações).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 46, code: "G2", text: "Verificar se a família da criança pode participar de algum programa de assistência social ou benefícios sociais (ex.: Programa Bolsa Família, Tarifa Social).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 47, code: "G3", text: "Planejamento familiar ou métodos anticoncepcionais.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 48, code: "G4", text: "Inclusão em programa de suplementação nutricional (ex.: leite, alimentos).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 49, code: "G5", text: "Aconselhamento ou tratamento para o uso prejudicial de drogas lícitas ou ilícitas (ex.: álcool, cocaína, remédios para dormir)", desc: "Integralidade - Serviços Disponíveis" },
  { id: 50, code: "G6", text: "Aconselhamento para problemas de saúde mental (ex.: ansiedade, depressão).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 51, code: "G7", text: "Sutura de um corte que necessite de pontos.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 52, code: "G8", text: "Aconselhamento e solicitação de teste anti-HIV.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 53, code: "G9", text: "Identificação (algum tipo de avaliação) de problemas visuais (para enxergar).", desc: "Integralidade - Serviços Disponíveis" },
  
  // Integralidade - Serviços Prestados
  { id: 54, code: "H1", text: "Orientações sobre alimentação saudável, boa higiene e sono adequado (dormir suficientemente).", desc: "Integralidade - Serviços Prestados" },
  { id: 55, code: "H2", text: "Segurança no lar (ex.: como guardar medicamentos em segurança, proteção para piscina, proteção para tomada).", desc: "Integralidade - Serviços Prestados" },
  { id: 56, code: "H3", text: "Mudanças no crescimento e desenvolvimento da criança, o que você deve esperar para ada idade (ex.: quando a criança irá caminhar, controlar o xixi).", desc: "Integralidade - Serviços Prestados" },
  { id: 57, code: "H4", text: "Maneiras de lidar com os problemas de comportamento da criança.", desc: "Integralidade - Serviços Prestados" },
  { id: 58, code: "H5", text: "Maneiras para manter a criança segura (ex.: evitar tombos de altura ou manter as crianças afastadas do fogão).", desc: "Integralidade - Serviços Prestados" },
  
  // Orientação Familiar
  { id: 59, code: "I1", text: "O(A) “médico(a)/enfermeiro(a)” pergunta as suas ideias e opiniões (o que você pensa) ao planejar o tratamento e cuidado da criança?", desc: "Orientação Familiar" },
  { id: 60, code: "I2", text: "O(A) “médico(a)/enfermeiro(a)” já perguntou para você sobre doenças ou problemas que podem ocorrer na família da criança (ex.: câncer, alcoolismo, depressão)?", desc: "Orientação Familiar" },
  { id: 61, code: "I3", text: "O(A) “médico(a)/enfermeiro(a)” se reuniria com outros membros da família da criança se você achasse necessário?", desc: "Orientação Familiar" },
  
  // Orientação Comunitária
  { id: 62, code: "J1", text: "Alguém do(a) “serviço de saúde” faz visitas domiciliares?", desc: "Orientação Comunitária" },
  { id: 63, code: "J2", text: "O(A) “médico(a)/enfermeiro(a)” da criança conhece os problemas de saúde importantes na sua vizinhança?", desc: "Orientação Comunitária" },
  { id: 64, code: "J3", text: "Pesquisas na comunidade para identificar problemas de saúde que deveriam ser conhecidos no serviço.", desc: "Orientação Comunitária" },
  { id: 65, code: "J4", text: "Convida você e a família da criança para participar do Conselho Local de Saúde (Conselho Gestor/Conselho de Usuários) ou Conselho Distrital de Saúde.", desc: "Orientação Comunitária" }
];
// ==============================================================================

// ==============================================================================
// 2 - PCATOOL – BRASIL PARA PACIENTES CRIANÇAS VERSÃO REDUZIDA - OK
// ==============================================================================
export const QUESTIONS_CRIANCA_REDUZIDA: Question[] = [
  // Afiliação
  { id: 1, code: "A1", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) onde você geralmente leva a criança quando ele(a) adoece ou se você precisa de conselhos sobre a saúde dele(a)?", desc: "Grau de Afiliação", type: "filter" },
  { id: 2, code: "A1.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 3, code: "A1.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 4, code: "A2", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que melhor conhece a criança como pessoa?", desc: "Grau de Afiliação", type: "a2_filter" },
  { id: 5, code: "A2.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 6, code: "A2.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 7, code: "A3", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que é mais responsável pelo atendimento de saúde da criança?", desc: "Grau de Afiliação", type: "a3_filter" },
  { id: 8, code: "A3.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 9, code: "A3.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 10, code: "A4", text: "Qual o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) da criança?", desc: "Grau de Afiliação", type: "text" },
  { id: 11, code: "A4.1", text: "Qual o endereço do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) da criança?", desc: "Grau de Afiliação", type: "text" },
  { id: 12, code: "A5", text: "Escreva o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) identificado(a) como a referência para os cuidados de saúde da criança, e esclareça ao(à) entrevistado(a) que a partir de agora, todas as perguntas serão sobre este(a) serviço ou profissional de saúde.", desc: "Grau de Afiliação", type: "text" },

  // Acesso de Primeiro Contato - Utilização
  { id: 13, code: "B1", text: "Quando a criança precisa de uma consulta de revisão (consulta de rotina, check-up), você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” antes de ir a outro serviço de saúde?", desc: "Acesso de Primeiro Contato - Utilização" },
  { id: 14, code: "B2", text: "Quando a criança tem um novo problema de saúde, você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” antes de ir a outro serviço de saúde?", desc: "Acesso de Primeiro Contato - Utilização" },
  
  // Acesso de Primeiro Contato - Acessibilidade
  { id: 15, code: "C1", text: "Quando o(a) “serviço de saúde” está aberto(a) e a criança adoece, alguém deste serviço de saúde atende a criança no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 16, code: "C3", text: "É fácil marcar uma consulta de revisão para a criança (consulta de rotina, check-up) no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 17, code: "C4", text: "Quando você chega no(a) “serviço de saúde”, você tem que esperar mais de 30 minutos para que a criança consulte com o(a) médico(a) ou enfermeiro(a) (sem considerar a triagem ou o acolhimento)?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  
  // Longitudinalidade
  { id: 18, code: "D1", text: "Quando você vai ao(à) “serviço de saúde”, é o(a) mesmo(a) médico(a) ou enfermeiro(a) que atende a criança todas às vezes?", desc: "Longitudinalidade" },
  { id: 19, code: "D2", text: "Se você tiver uma pergunta pode telefonar ou utilizar alguma forma de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) e falar com o(a) médico(a) ou enfermeiro(a) que melhor conhece a criança?", desc: "Longitudinalidade" },
  { id: 20, code: "D6", text: "Você se sente à vontade contando as suas preocupações ou problemas sobre a saúde da criança ao(à) médico(a)/enfermeiro(a)”?", desc: "Longitudinalidade" },
  { id: 21, code: "D8", text: "O(A) “médico(a)/enfermeiro(a)” conhece a história clínica (história médica) completa da criança?", desc: "Longitudinalidade" },
  { id: 22, code: "D11", text: "Você acha que o(a) “médico(a)/enfermeiro(a)” conhece a família da criança bastante bem?", desc: "Longitudinalidade" },
  
  // Coordenação - Integração de Cuidados
  { id: 23, code: "E1", text: "A criança foi consultar qualquer tipo de especialista ou serviço especializado no período em que ela está em acompanhamento no(a)/com o(a) “serviço de saúde/ médico(a)/enfermeiro(a)”?", desc: "Coordenação - Integração de Cuidados (Filtro)", type: "filter" },
  { id: 24, code: "E4", text: "O(A) “médico(a)/enfermeiro(a)” sabe quais foram os resultados da consulta com o(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 25, code: "E5", text: "Depois que a criança foi a esse(a) especialista ou no serviço especializado, o(a) “médico(a)/enfermeiro(a)” conversou com você sobre o que aconteceu durante essa consulta?", desc: "Coordenação - Integração de Cuidados" },
  { id: 26, code: "E6", text: "O(A) “médico(a)/enfermeiro(a)” pareceu interessado(a) na qualidade do cuidado que a criança recebeu na consulta com o(a) especialista ou no serviço especializado (perguntou se a criança foi bem ou mal atendida)?", desc: "Coordenação - Integração de Cuidados" },
  
  // Coordenação - Sistemas de Informações
  { id: 27, code: "F2", text: "Quando você leva a criança ao(à) “serviço de saúde/médico(a)/enfermeiro(a)”, o prontuário (história clínica) da criança está sempre disponível na consulta?", desc: "Coordenação - Sistemas de Informações" },
  
  // Integralidade - Serviços Disponíveis
  { id: 28, code: "G3", text: "Planejamento familiar ou métodos anticoncepcionais.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 29, code: "G4", text: "Inclusão em programa de suplementação nutricional (ex.: leite, alimentos).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 30, code: "G5", text: "Aconselhamento ou tratamento para o uso prejudicial de drogas lícitas ou ilícitas (ex.: álcool, cocaína, remédios para dormir)", desc: "Integralidade - Serviços Disponíveis" },
  { id: 31, code: "G6", text: "Aconselhamento para problemas de saúde mental (ex.: ansiedade, depressão).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 32, code: "G9", text: "Identificação (algum tipo de avaliação) de problemas visuais (para enxergar).", desc: "Integralidade - Serviços Disponíveis" },
  
  // Integralidade - Serviços Prestados
  { id: 33, code: "H3", text: "Mudanças no crescimento e desenvolvimento da criança, o que você deve esperar para ada idade (ex.: quando a criança irá caminhar, controlar o xixi).", desc: "Integralidade - Serviços Prestados" },
  { id: 34, code: "H4", text: "Maneiras de lidar com os problemas de comportamento da criança.", desc: "Integralidade - Serviços Prestados" },
  { id: 35, code: "H5", text: "Maneiras para manter a criança segura (ex.: evitar tombos de altura ou manter as crianças afastadas do fogão).", desc: "Integralidade - Serviços Prestados" },
  
  // Orientação Familiar
  { id: 36, code: "I1", text: "O(A) “médico(a)/enfermeiro(a)” pergunta as suas ideias e opiniões (o que você pensa) ao planejar o tratamento e cuidado da criança?", desc: "Orientação Familiar" },
  { id: 37, code: "I2", text: "O(A) “médico(a)/enfermeiro(a)” já perguntou para você sobre doenças ou problemas que podem ocorrer na família da criança (ex.: câncer, alcoolismo, depressão)?", desc: "Orientação Familiar" },
  { id: 38, code: "I3", text: "O(A) “médico(a)/enfermeiro(a)” se reuniria com outros membros da família da criança se você achasse necessário?", desc: "Orientação Familiar" },
  
  // Orientação Comunitária
  { id: 39, code: "J2", text: "O(A) “médico(a)/enfermeiro(a)” da criança conhece os problemas de saúde importantes na sua vizinhança?", desc: "Orientação Comunitária" },
  { id: 40, code: "J4", text: "Convida você e a família da criança para participar do Conselho Local de Saúde (Conselho Gestor/Conselho de Usuários) ou Conselho Distrital de Saúde.", desc: "Orientação Comunitária" }
];
// ==============================================================================

// ==============================================================================
// 3 - PCATOOL – BRASIL PARA PACIENTES ADULTOS VERSÃO EXTENSA - OK
// ==============================================================================
export const QUESTIONS_ADULTO_EXTENSA: Question[] = [
  // Afiliação
  { id: 1, code: "A1", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) onde você geralmente vai quando adoece ou precisa de conselhos sobre a sua saúde?", desc: "Grau de Afiliação", type: "filter" },
  { id: 2, code: "A1.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 3, code: "A1.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 4, code: "A2", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que melhor conhece você como pessoa?", desc: "Grau de Afiliação", type: "a2_filter" },
  { id: 5, code: "A2.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 6, code: "A2.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 7, code: "A3", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que é mais responsável por seu atendimento de saúde?", desc: "Grau de Afiliação", type: "a3_filter" },
  { id: 8, code: "A3.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 9, code: "A3.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 10, code: "A4", text: "Qual o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) do(a) adulto(a)?", desc: "Grau de Afiliação", type: "text" },
  { id: 11, code: "A4.1", text: "Qual o endereço do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) do(a) adulto(a)?", desc: "Grau de Afiliação", type: "text" },
  { id: 12, code: "A5", text: "Escreva o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) identificado(a) como a referência para os cuidados de saúde do(a) adulto(a), e esclareça ao(à) entrevistado(a) que a partir de agora, todas as perguntas serão sobre este(a) serviço ou profissional de saúde.", desc: "Grau de Afiliação", type: "text" },

  // Acesso de Primeiro Contato - Utilização
  { id: 13, code: "B1", text: "Quando você precisa de uma consulta de revisão (consulta de rotina, check-up), você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” antes de ir a outro serviço de saúde?", desc: "Acesso de Primeiro Contato - Utilização" },
  { id: 14, code: "B2", text: "Quando você tem um novo problema de saúde, você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” antes de ir a outro serviço de saúde?", desc: "Acesso de Primeiro Contato - Utilização" },
  { id: 15, code: "B3", text: "Quando você precisa de uma consulta com um(a) especialista, o(a) “serviço de saúde/médico(a)/enfermeiro(a)” obrigatoriamente deve encaminhar você?", desc: "Acesso de Primeiro Contato - Utilização" },
  
  // Acesso de Primeiro Contato - Acessibilidade
  { id: 16, code: "C1", text: "O(A) “serviço de saúde” fica aberto(a) no sábado e/ou no domingo?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 17, code: "C2", text: "O(A) “serviço de saúde” fica aberto(a) pelo menos algumas noites de dias úteis até às 20 horas?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 18, code: "C3", text: "Quando o(a) “serviço de saúde” está aberto(a) e você adoece, alguém deste serviço de saúde atende você no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 19, code: "C4", text: "Quando o(a) “serviço de saúde” está aberto(a), você consegue aconselhamento rápido pelo telefone ou por ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) se precisar?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 20, code: "C5", text: "Quando o(a) “serviço de saúde” está fechado(a) e você adoece, existe um número de telefone ou contato de ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) que você possa contatar?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 21, code: "C6", text: "Quando o(a) “serviço de saúde” está fechado(a) no sábado e no domingo e você adoece, alguém deste serviço atende você no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 22, code: "C7", text: "Quando o(a) “serviço de saúde” está fechado(a) e você adoece durante a noite, alguém deste serviço atende você na mesma noite?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 23, code: "C8", text: "É fácil marcar uma consulta de revisão (consulta de rotina, check-up) no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 24, code: "C9", text: "Quando você chega no(a) “serviço de saúde”, você tem que esperar mais de 30 minutos para consultar com o(a) médico(a) ou enfermeiro(a) (sem considerar a triagem ou o acolhimento)?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  { id: 25, code: "C10", text: "Você precisa esperar por muito tempo ou falar com muitas pessoas para marcar uma consulta no(a)/ com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  { id: 26, code: "C11", text: "É difícil para você conseguir atendimento médico no(a) “serviço de saúde” quando pensa que é necessário?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  { id: 27, code: "C12", text: "Quando você necessita ir ao(à) “serviço de saúde”, você precisa faltar ao trabalho ou à escola?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  
  // Longitudinalidade
  { id: 28, code: "D1", text: "Quando você vai ao(à) “serviço de saúde”, é o(a) mesmo(a) médico(a) ou enfermeiro(a) que atende você todas às vezes?", desc: "Longitudinalidade" },
  { id: 29, code: "D2", text: "Você acha que o(a) “médico(a)/enfermeiro(a)” entende o que você diz ou pergunta?", desc: "Longitudinalidade" },
  { id: 30, code: "D3", text: "O(A) “médico(a)/enfermeiro(a)” responde as suas perguntas de maneira que você entenda?", desc: "Longitudinalidade" },
  { id: 31, code: "D4", text: "Se você tiver uma pergunta sobre a sua saúde, pode telefonar ou utilizar alguma forma de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) para falar com o(a) médico(a) ou enfermeiro(a) que melhor conhece você?", desc: "Longitudinalidade" },
  { id: 32, code: "D5", text: "O(A) “médico(a)/enfermeiro(a)” dá tempo suficiente para você falar sobre as suas preocupações ou problemas?", desc: "Longitudinalidade" },
  { id: 33, code: "D6", text: "Você se sente à vontade contando as suas preocupações ou problemas ao(à) “médico(a)/enfermeiro(a)”?", desc: "Longitudinalidade" },
  { id: 34, code: "D7", text: "O(A) “médico(a)/enfermeiro(a)” conhece você mais como pessoa do que somente como alguém com um problema de saúde?", desc: "Longitudinalidade" },
  { id: 35, code: "D8", text: "O(A) “médico(a)/enfermeiro(a)” sabe quem mora com você?", desc: "Longitudinalidade" },
  { id: 36, code: "D9", text: "O(A) “médico(a)/enfermeiro(a)” sabe quais problemas são mais importantes para você e a sua família?", desc: "Longitudinalidade" },
  { id: 37, code: "D10", text: "O(A) “médico(a)/enfermeiro(a)” conhece a sua história clínica (história médica) completa?", desc: "Longitudinalidade" },
  { id: 38, code: "D11", text: "O(A) “médico(a)/enfermeiro(a)” sabe sobre o seu trabalho ou emprego?", desc: "Longitudinalidade" },
  { id: 39, code: "D12", text: "De alguma forma, o(a) “médico(a)/enfermeiro(a)” saberia se você tivesse problemas em obter ou pagar por medicamentos que você precisa?", desc: "Longitudinalidade" },
  { id: 40, code: "D13", text: "O(A) “médico(a)/enfermeiro(a)” sabe a respeito de todos os medicamentos que você está tomando?", desc: "Longitudinalidade" },
  { id: 41, code: "D14", text: "Se fosse muito fácil, você mudaria do(a) “serviço de saúde” para outro serviço de saúde?", desc: "Longitudinalidade (Item Negativo)" },
  
  // Coordenação - Integração de Cuidados
  { id: 42, code: "E1", text: "Você foi consultar qualquer tipo de especialista ou serviço especializado no período em que você está em acompanhamento no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Coordenação - Integração de Cuidados" },
  { id: 43, code: "E2", text: "O(A) “médico(a)/enfermeiro(a)” sugeriu (indicou, encaminhou) que você fosse consultar com esse(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 44, code: "E3", text: "O(A) “médico(a)/enfermeiro(a)” sabe que você fez essa consulta com esse(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 45, code: "E4", text: "O(A) “médico(a)/enfermeiro(a)” discutiu com você sobre os diferentes serviços onde você poderia ser atendido(a) para esse problema de saúde?", desc: "Coordenação - Integração de Cuidados" },
  { id: 46, code: "E5", text: "O(A) “médico(a)/enfermeiro(a)” ou alguém que trabalha no(a) “serviço de saúde” ajudou você a marcar essa consulta com o(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 47, code: "E6", text: "O(A) “médico(a)/enfermeiro(a)” enviou alguma informação para o(a) especialista sobre o motivo dessa consulta (com o(a) especialista ou no serviço especializado)?", desc: "Coordenação - Integração de Cuidados" },
  { id: 48, code: "E7", text: "O(A) “médico(a)/enfermeiro(a)” sabe quais foram os resultados da consulta com o(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 49, code: "E8", text: "Depois que você foi a esse(a) especialista ou no serviço especializado, o(a) “médico(a)/enfermeiro(a)” conversou com você sobre o que aconteceu durante essa consulta?", desc: "Coordenação - Integração de Cuidados" },
  { id: 50, code: "E9", text: "O(A) “médico(a)/enfermeiro(a)” pareceu interessado(a) na qualidade do cuidado que você recebeu na consulta com o(a) especialista ou no serviço especializado (perguntou se você foi bem ou mal atendido)?", desc: "Coordenação - Integração de Cuidados" },
  
  // Coordenação - Sistemas de Informações
  { id: 51, code: "F1", text: "Quando você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” você leva algum dos registros de saúde ou boletins de atendimento que você recebeu em atendimentos anteriores (ex.: fichas de atendimento de emergência, resultado de exames de laboratório)?", desc: "Coordenação - Sistemas de Informações" },
  { id: 52, code: "F2", text: "Quando você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)”, o seu prontuário (história clínica) está sempre disponível na consulta?", desc: "Coordenação - Sistemas de Informações" },
  { id: 53, code: "F3", text: "Se quisesse, você poderia ler (consultar) o seu prontuário no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Coordenação - Sistemas de Informações" },
  
  // Integralidade - Serviços Disponíveis
  { id: 54, code: "G1", text: "Aconselhamento sobre nutrição ou dieta.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 55, code: "G2", text: "Verificar se a sua família pode participar de algum programa de assistência social ou benefícios sociais (ex.: Programa Bolsa Família, Tarifa Social).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 56, code: "G3", text: "Inclusão em programa de suplementação nutricional (ex.: leite, alimentos).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 57, code: "G4", text: "Vacinas (imunizações).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 58, code: "G5", text: "Avaliação da saúde bucal (Exame dentário).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 59, code: "G6", text: "Tratamento dentário.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 60, code: "G7", text: "Planejamento familiar ou métodos anticoncepcionais.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 61, code: "G8", text: "Aconselhamento ou tratamento para o uso prejudicial de drogas lícitas ou ilícitas (ex.: álcool, cocaína, remédios para dormir).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 62, code: "G9", text: "Aconselhamento para problemas de saúde mental (ex.: ansiedade, depressão).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 63, code: "G10", text: "Sutura de um corte que necessite de pontos.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 64, code: "G11", text: "Aconselhamento e solicitação de teste anti-HIV.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 65, code: "G12", text: "Identificação (algum tipo de avaliação) de problemas auditivos (para escutar).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 66, code: "G13", text: "Identificação (algum tipo de avaliação) de problemas visuais (para enxergar).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 67, code: "G14", text: "Colocação de tala (ex.: para tornozelo torcido).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 68, code: "G15", text: "Remoção de verrugas.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 69, code: "G16", text: "Exame preventivo para câncer de colo do útero (CP, Citopatológico, Teste Papanicolau).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 70, code: "G17", text: "Aconselhamento sobre tabagismo (ex.: como parar de fumar).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 71, code: "G18", text: "Cuidados pré-natais.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 72, code: "G19", text: "Remoção de unha encravada.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 73, code: "G20", text: "Aconselhamento sobre as mudanças que acontecem com o envelhecimento (ex.: diminuição da memória, risco de cair).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 74, code: "G21", text: "Orientações sobre cuidados no domicílio para alguém da sua família (ex.: curativos, troca de sondas, banho na cama).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 75, code: "G22", text: "Orientações sobre os cuidados em saúde caso alguém de sua família fique incapacitado e não possa tomar decisões sobre a sua saúde (ex.: doação de órgãos se alguém de sua família fique incapacitado para decidir, por exemplo, em estado de coma)", desc: "Integralidade - Serviços Disponíveis" },
  
  // Integralidade - Serviços Prestados
  { id: 76, code: "H1", text: "Orientações sobre alimentação saudável, boa higiene e sono adequado (dormir suficientemente).", desc: "Integralidade - Serviços Prestados" },
  { id: 77, code: "H2", text: "Segurança no lar (ex.: como guardar medicamentos em segurança, proteção para piscina, proteção para tomada).", desc: "Integralidade - Serviços Prestados" },
  { id: 78, code: "H3", text: "Orientações sobre o uso de cinto de segurança ou assentos seguros para crianças ao andar de carro ou sobre como evitar que crianças tenham queda de altura.", desc: "Integralidade - Serviços Prestados" },
  { id: 79, code: "H4", text: "Maneiras de lidar com conflitos de família que podem surgir de vez em quando.", desc: "Integralidade - Serviços Prestados" },
  { id: 80, code: "H5", text: "Orientações sobre exercícios físicos apropriados para você.", desc: "Integralidade - Serviços Prestados" },
  { id: 81, code: "H6", text: "Testes de sangue para verificar os níveis de colesterol.", desc: "Integralidade - Serviços Prestados" },
  { id: 82, code: "H7", text: "Verificar e discutir os medicamentos que você está usando.", desc: "Integralidade - Serviços Prestados" },
  { id: 83, code: "H8", text: "Possíveis exposições a substâncias perigosas (ex.: veneno para formiga/para rato, água sanitária) no lar, no trabalho ou na vizinhança.", desc: "Integralidade - Serviços Prestados" },
  { id: 84, code: "H9", text: "Perguntar se você tem uma arma de fogo e orientar como guardá-la com segurança.", desc: "Integralidade - Serviços Prestados" },
  { id: 85, code: "H10", text: "Como prevenir queimaduras (ex.: causadas por água quente, óleo quente, outras substâncias).", desc: "Integralidade - Serviços Prestados" },
  { id: 86, code: "H11", text: "Como prevenir quedas.", desc: "Integralidade - Serviços Prestados" },
  { id: 87, code: "H12", text: "SÓ PARA MULHERES: como prevenir osteoporose ou ossos frágeis.", desc: "Integralidade - Serviços Prestados" },
  { id: 88, code: "H13", text: "SÓ PARA MULHERES: o cuidado de problemas comuns relacionados à menstruação ou à menopausa.", desc: "Integralidade - Serviços Prestados" },

  // Orientação Familiar
  { id: 89, code: "I1", text: "O(A) “médico(a)/enfermeiro(a)” pergunta as suas ideias e opiniões (o que você pensa) ao planejar o tratamento e cuidado para você ou para alguém da sua família?", desc: "Orientação Familiar" },
  { id: 90, code: "I2", text: "O(A) “médico(a)/enfermeiro(a)” já perguntou para você sobre doenças ou problemas que podem ocorrer em sua família (ex.: câncer, alcoolismo, depressão)?", desc: "Orientação Familiar" },
  { id: 91, code: "I3", text: "O(A) “médico(a)/enfermeiro(a)” se reuniria com membros de sua família se você achasse necessário?", desc: "Orientação Familiar" },
  
  // Orientação Comunitária
  { id: 92, code: "J1", text: "Alguém do(a) “serviço de saúde” faz visitas domiciliares?", desc: "Orientação Comunitária" },
  { id: 93, code: "J2", text: "O(A) “médico(a)/enfermeiro(a)” conhece os problemas de saúde importantes na sua vizinhança?", desc: "Orientação Comunitária" },
  { id: 94, code: "J3", text: "O(A) “serviço de saúde/médico(a)/enfermeiro(a)” leva em conta opiniões e ideias da comunidade sobre como melhorar os serviços de saúde?", desc: "Orientação Comunitária" },
  { id: 95, code: "J4", text: "Pesquisas com os pacientes para ver se os serviços estão satisfazendo (atendendo) as necessidades das pessoas.", desc: "Orientação Comunitária" },
  { id: 96, code: "J5", text: "Pesquisas na comunidade para identificar problemas de saúde que deveriam ser conhecidos no serviço.", desc: "Orientação Comunitária" },
  { id: 97, code: "J6", text: "Convida você e a sua família para participar do Conselho Local de Saúde (Conselho Gestor/Conselho de Usuários) ou Conselho Distrital de Saúde.", desc: "Orientação Comunitária" }
];
// ==============================================================================

// ==============================================================================
// 4 - PCATOOL – BRASIL PARA PACIENTES ADULTOS VERSÃO REDUZIDA - OK
// ==============================================================================
export const QUESTIONS_ADULTO_REDUZIDA: Question[] = [
  // Afiliação
  { id: 1, code: "A1", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) onde você geralmente vai quando adoece ou precisa de conselhos sobre a sua saúde?", desc: "Grau de Afiliação", type: "filter" },
  { id: 2, code: "A1.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 3, code: "A1.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 4, code: "A2", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que melhor conhece você como pessoa?", desc: "Grau de Afiliação", type: "a2_filter" },
  { id: 5, code: "A2.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 6, code: "A2.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 7, code: "A3", text: "Há um(a) serviço de saúde/médico(a)/enfermeiro(a) que é mais responsável por seu atendimento de saúde?", desc: "Grau de Afiliação", type: "a3_filter" },
  { id: 8, code: "A3.1", text: "Qual o nome deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  { id: 9, code: "A3.2", text: "Qual o endereço deste(a) serviço de saúde ou profissional?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 10, code: "A4", text: "Qual o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) do(a) adulto(a)?", desc: "Grau de Afiliação", type: "text" },
  { id: 11, code: "A4.1", text: "Qual o endereço do(a) serviço de saúde/médico(a)/enfermeiro(a) procurado(a) no último atendimento médico ou com enfermeiro(a) do(a) adulto(a)?", desc: "Grau de Afiliação", type: "text" },
  { id: 12, code: "A5", text: "Escreva o nome do(a) serviço de saúde/médico(a)/enfermeiro(a) identificado(a) como a referência para os cuidados de saúde do(a) adulto(a), e esclareça ao(à) entrevistado(a) que a partir de agora, todas as perguntas serão sobre este(a) serviço ou profissional de saúde.", desc: "Grau de Afiliação", type: "text" },

  // Acesso de Primeiro Contato - Utilização
  { id: 13, code: "B2", text: "Quando você tem um novo problema de saúde, você vai ao(à) “serviço de saúde/médico(a)/enfermeiro(a)” antes de ir a outro serviço de saúde?", desc: "Acesso de Primeiro Contato - Utilização" },
  
  // Acesso de Primeiro Contato - Acessibilidade
  { id: 14, code: "C4", text: "Quando o(a) “serviço de saúde” está aberto(a), você consegue aconselhamento rápido pelo telefone ou por ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) se precisar?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 15, code: "C11", text: "É difícil para você conseguir atendimento médico no(a) “serviço de saúde” quando pensa que é necessário?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  
  // Longitudinalidade
  { id: 16, code: "D1", text: "Quando você vai ao(à) “serviço de saúde”, é o(a) mesmo(a) médico(a) ou enfermeiro(a) que atende você todas às vezes?", desc: "Longitudinalidade" },
  { id: 17, code: "D6", text: "Você se sente à vontade contando as suas preocupações ou problemas ao(à) “médico(a)/enfermeiro(a)”?", desc: "Longitudinalidade" },
  { id: 18, code: "D9", text: "O(A) “médico(a)/enfermeiro(a)” sabe quais problemas são mais importantes para você e a sua família?", desc: "Longitudinalidade" },
  { id: 19, code: "D14", text: "Se fosse muito fácil, você mudaria do(a) “serviço de saúde” para outro serviço de saúde?", desc: "Longitudinalidade (Item Negativo)" },
  
  // Coordenação - Integração de Cuidados
  { id: 20, code: "E1", text: "Você foi consultar qualquer tipo de especialista ou serviço especializado no período em que você está em acompanhamento no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Coordenação - Integração de Cuidados" },
  { id: 21, code: "E2", text: "O(A) “médico(a)/enfermeiro(a)” sugeriu (indicou, encaminhou) que você fosse consultar com esse(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 22, code: "E6", text: "O(A) “médico(a)/enfermeiro(a)” enviou alguma informação para o(a) especialista sobre o motivo dessa consulta (com o(a) especialista ou no serviço especializado)?", desc: "Coordenação - Integração de Cuidados" },
  { id: 23, code: "E9", text: "O(A) “médico(a)/enfermeiro(a)” pareceu interessado(a) na qualidade do cuidado que você recebeu na consulta com o(a) especialista ou no serviço especializado (perguntou se você foi bem ou mal atendido)?", desc: "Coordenação - Integração de Cuidados" },
  
  // Coordenação - Sistemas de Informações
  { id: 24, code: "F3", text: "Se quisesse, você poderia ler (consultar) o seu prontuário no(a)/com o(a) “serviço de saúde/médico(a)/enfermeiro(a)”?", desc: "Coordenação - Sistemas de Informações" },
  
  // Integralidade - Serviços Disponíveis
  { id: 25, code: "G9", text: "Aconselhamento para problemas de saúde mental (ex.: ansiedade, depressão).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 26, code: "G17", text: "Aconselhamento sobre tabagismo (ex.: como parar de fumar).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 27, code: "G20", text: "Aconselhamento sobre as mudanças que acontecem com o envelhecimento (ex.: diminuição da memória, risco de cair).", desc: "Integralidade - Serviços Disponíveis" },
  
  // Integralidade - Serviços Prestados
  { id: 28, code: "H1", text: "Orientações sobre alimentação saudável, boa higiene e sono adequado (dormir suficientemente).", desc: "Integralidade - Serviços Prestados" },
  { id: 29, code: "H5", text: "Orientações sobre exercícios físicos apropriados para você.", desc: "Integralidade - Serviços Prestados" },
  { id: 30, code: "H7", text: "Verificar e discutir os medicamentos que você está usando.", desc: "Integralidade - Serviços Prestados" },
  { id: 31, code: "H11", text: "Como prevenir quedas.", desc: "Integralidade - Serviços Prestados" },

  // Orientação Familiar
  { id: 32, code: "I1", text: "O(A) “médico(a)/enfermeiro(a)” pergunta as suas ideias e opiniões (o que você pensa) ao planejar o tratamento e cuidado para você ou para alguém da sua família?", desc: "Orientação Familiar" },
  { id: 33, code: "I3", text: "O(A) “médico(a)/enfermeiro(a)” se reuniria com membros de sua família se você achasse necessário?", desc: "Orientação Familiar" },
  
  // Orientação Comunitária
  { id: 34, code: "J4", text: "Pesquisas com os pacientes para ver se os serviços estão satisfazendo (atendendo) as necessidades das pessoas.", desc: "Orientação Comunitária" }
];
// ==============================================================================

// ==============================================================================
// 5 - PCATOOL – BRASIL PARA PROFISSIONAIS MÉDICOS E ENFERMEIROS VERSÃO EXTENSA - OK
// ==============================================================================
export const QUESTIONS_PROFISSIONAL_EXTENSA: Question[] = [
  // Acesso de Primeiro Contato - Acessibilidade
  { id: 1, code: "A1", text: "O seu serviço de saúde está aberto no sábado e/ou no domingo?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 2, code: "A2", text: "O seu serviço de saúde está aberto pelo menos algumas noites de dias úteis até às 20 horas?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 3, code: "A3", text: "Quando o seu serviço de saúde está aberto e algum(a) paciente adoece, alguém do seu serviço o(a) atende no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 4, code: "A4", text: "Quando o seu serviço de saúde está aberto, os pacientes conseguem aconselhamento rápido pelo telefone ou por ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) se acreditam ser necessário?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 5, code: "A5", text: "Quando o seu serviço de saúde está fechado e os pacientes adoecem, existe um número de telefone ou contato de ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) o qual possam contatar?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 6, code: "A6", text: "Quando o seu serviço de saúde está fechado no sábado e no domingo e algum(a) paciente adoece, alguém do seu serviço o(a) atende no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 7, code: "A7", text: "Quando o seu serviço de saúde está fechado e algum(a) paciente adoece durante a noite, alguém do seu serviço o(a) atende na mesma noite?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 8, code: "A8", text: "É fácil para um(a) paciente marcar uma consulta de revisão (consulta de rotina, check-up) no seu serviço de saúde?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 9, code: "A9", text: "Na média, os pacientes precisam esperar mais de 30 minutos para serem atendidos pelo(a) médico(a) ou pelo(a) enfermeiro(a) (sem considerar a triagem ou o acolhimento)?", desc: "Acesso de Primeiro Contato - Acessibilidade" },

  // Longitudinalidade
  { id: 10, code: "B1", text: "No seu serviço de saúde, os pacientes são sempre atendidos pelo(a) mesmo(a) médico(a) ou enfermeiro(a)?", desc: "Longitudinalidade" },
  { id: 11, code: "B2", text: "Você consegue entender as perguntas dos seus pacientes?", desc: "Longitudinalidade" },
  { id: 12, code: "B3", text: "Você acredita que os seus pacientes entendem o que você diz ou pergunta?", desc: "Longitudinalidade" },
  { id: 13, code: "B4", text: "Se os pacientes têm uma pergunta sobre a saúde deles, podem telefonar ou utilizar alguma forma de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) e falar com o(a) médico(a) ou enfermeiro(a) que os conhece melhor?", desc: "Longitudinalidade" },
  { id: 14, code: "B5", text: "Você dá aos pacientes tempo suficiente para falarem (discutirem) sobre as suas preocupações ou problemas?", desc: "Longitudinalidade" },
  { id: 15, code: "B6", text: "Você acredita que os seus pacientes se sentem confortáveis ao contar para você as suas preocupações ou problemas?", desc: "Longitudinalidade" },
  { id: 16, code: "B7", text: "Você acredita que conhece “muito bem” os pacientes do seu serviço de saúde?", desc: "Longitudinalidade" },
  { id: 17, code: "B8", text: "Você sabe quem mora com cada um de seus pacientes?", desc: "Longitudinalidade" },
  { id: 18, code: "B9", text: "Você sabe quais problemas são mais importantes para os seus pacientes?", desc: "Longitudinalidade" },
  { id: 19, code: "B10", text: "Você conhece a história clínica (história médica) completa de cada paciente?", desc: "Longitudinalidade" },
  { id: 20, code: "B11", text: "Você sabe qual o trabalho ou o emprego de cada paciente?", desc: "Longitudinalidade" },
  { id: 21, code: "B12", text: "Você saberia se os seus pacientes tivessem problemas em obter ou pagar por medicamentos receitados?", desc: "Longitudinalidade" },
  { id: 22, code: "B13", text: "Você sabe a respeito de todos os medicamentos que os seus pacientes estão tomando?", desc: "Longitudinalidade" },
  
  // Coordenação - Integração de Cuidados
  { id: 23, code: "C1", text: "Você sabe de todas as consultas que os seus pacientes fazem com especialistas ou nos serviços especializados?", desc: "Coordenação - Integração de Cuidados" },
  { id: 24, code: "C2", text: "Quando os seus pacientes necessitam de encaminhamento, você discute sobre os diferentes serviços onde eles podem ser atendidos?", desc: "Coordenação - Integração de Cuidados" },
  { id: 25, code: "C3", text: "Alguém do seu serviço de saúde ajuda o(a) paciente a marcar essa consulta com o(a) especialista ou no serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 26, code: "C4", text: "Quando os seus pacientes são encaminhados, você fornece aos pacientes alguma informação que seja para o(a) especialista ou serviço especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 27, code: "C5", text: "Você recebe do(a) especialista ou do serviço especializado informações úteis sobre o(a) paciente encaminhado(a)?", desc: "Coordenação - Integração de Cuidados" },
  { id: 28, code: "C6", text: "Após a consulta com o(a) especialista ou no serviço especializado, você conversa com o(a) seu(sua) paciente sobre os resultados dessa consulta?", desc: "Coordenação - Integração de Cuidados" },
  
  // Coordenação – Sistemas de Informações
  { id: 29, code: "D1", text: "Você solicita aos pacientes que tragam os seus registros médicos recebidos em atendimentos anteriores (ex.: fichas de atendimento de emergência, carteira de vacinação, resultados de exames de laboratório)?", desc: "Coordenação – Sistemas de Informações" },
  { id: 30, code: "D2", text: "Se os pacientes quisessem, você permitiria que eles examinassem os prontuários deles?", desc: "Coordenação – Sistemas de Informações" },
  { id: 31, code: "D3", text: "Os prontuários dos pacientes estão sempre disponíveis quando você os atende?", desc: "Coordenação – Sistemas de Informações" },
  { id: 32, code: "D4", text: "Fluxogramas dos resultados dos exames laboratoriais.", desc: "Coordenação – Sistemas de Informações" },
  { id: 33, code: "D5", text: "“Guidelines”/protocolos impressos junto aos prontuários dos pacientes.", desc: "Coordenação – Sistemas de Informações" },
  { id: 34, code: "D6", text: "Auditorias periódicas dos prontuários médico.", desc: "Coordenação – Sistemas de Informações" },
  { id: 35, code: "D7", text: "Lista de problemas no prontuário dos pacientes.", desc: "Coordenação – Sistemas de Informações" },
  { id: 36, code: "D8", text: "Lista de medicamentos em uso no prontuário dos pacientes.", desc: "Coordenação – Sistemas de Informações" },
  
  // Integralidade - Serviços Disponíveis
  { id: 37, code: "E1", text: "Aconselhamento sobre nutrição ou dieta.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 38, code: "E2", text: "Vacinas (imunizações).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 39, code: "E3", text: "Verificar se a família pode participar de algum programa de assistência social ou benefícios sociais (ex.: Programa Bolsa Família, Tarifa Social).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 40, code: "E4", text: "Avaliação da saúde bucal (exame dentário).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 41, code: "E5", text: "Tratamento dentário.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 42, code: "E6", text: "Planejamento familiar ou métodos anticoncepcionais.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 43, code: "E7", text: "Aconselhamento ou tratamento para o uso prejudicial de drogas lícitas ou ilícitas (ex.: álcool, cocaína, remédios para dormir).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 44, code: "E8", text: "Aconselhamento para problemas de saúde mental (ex.: ansiedade, depressão).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 45, code: "E9", text: "Sutura de um corte que necessite de pontos.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 46, code: "E10", text: "Aconselhamento e solicitação de teste anti-HIV.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 47, code: "E11", text: "Identificação (algum tipo de avaliação) de problemas auditivos (para escutar).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 48, code: "E12", text: "Identificação (algum tipo de avaliação) de problemas visuais (para enxergar).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 49, code: "E13", text: "Colocação de tala (ex.: para tornozelo torcido).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 50, code: "E14", text: "Remoção de verrugas.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 51, code: "E15", text: "Exame preventivo para câncer de colo do útero (CP, Teste Papanicolau).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 52, code: "E16", text: "Aconselhamento sobre tabagismo (ex.: como parar de fumar).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 53, code: "E17", text: "Cuidados pré-natais.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 54, code: "E18", text: "Remoção de unha encravada.", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 55, code: "E19", text: "Orientações sobre os cuidados em saúde caso o paciente fique incapacitado e não possa tomar decisões sobre a sua saúde (ex.: doação de órgãos caso alguém de sua família fique incapacitado para decidir, por exemplo, em estado de coma)", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 56, code: "E20", text: "Aconselhamento sobre as mudanças que acontecem com o envelhecimento (ex.: diminuição da memória, risco de cair).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 57, code: "E21", text: "Orientações sobre cuidados no domicílio para alguém da família do(a) paciente (ex.: curativos, troca de sondas, banho na cama).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  { id: 58, code: "E22", text: "Inclusão em programa de suplementação nutricional (ex.: leite, alimentos).", desc: "Integralidade - Serviços Disponíveis", type: "filter" },
  
  // Integralidade - Serviços Prestados
  { id: 59, code: "F1", text: "Orientações sobre alimentação saudável, boa higiene e sono adequado (dormir suficientemente).", desc: "Integralidade - Serviços Prestados" },
  { id: 60, code: "F2", text: "Segurança no lar (ex.: como guardar medicamentos com segurança, proteção para piscina, proteção para tomada).", desc: "Integralidade - Serviços Prestados" },
  { id: 61, code: "F3", text: "Orientações sobre o uso de cinto de segurança, assentos seguros para crianças ao andar de carro ou sobre como evitar que crianças tenham queda de altura.", desc: "Integralidade - Serviços Prestados" },
  { id: 62, code: "F4", text: "Maneiras de lidar com conflitos familiares.", desc: "Integralidade - Serviços Prestados" },
  { id: 63, code: "F5", text: "Orientações sobre exercícios físicos apropriados.", desc: "Integralidade - Serviços Prestados" },
  { id: 64, code: "F6", text: "Níveis de colesterol.", desc: "Integralidade - Serviços Prestados" },
  { id: 65, code: "F7", text: "Medicações em uso.", desc: "Integralidade - Serviços Prestados" },
  { id: 66, code: "F8", text: "Possíveis exposições a substâncias perigosas (ex.: veneno para formiga/para rato, água sanitária) no lar, no trabalho ou na vizinhança.", desc: "Integralidade - Serviços Prestados" },
  { id: 67, code: "F9", text: "Disponibilidade, armazenagem e segurança de armas.", desc: "Integralidade - Serviços Prestados" },
  { id: 68, code: "F10", text: "Prevenção de queimaduras (ex.: causadas por água quente, óleo quente, outras substâncias).", desc: "Integralidade - Serviços Prestados" },
  { id: 69, code: "F11", text: "Prevenção de quedas.", desc: "Integralidade - Serviços Prestados" },
  { id: 70, code: "F12", text: "Prevenção de osteoporose em mulheres.", desc: "Integralidade - Serviços Prestados" },
  { id: 71, code: "F13", text: "Cuidado de problemas comuns relacionados à menstruação ou à menopausa.", desc: "Integralidade - Serviços Prestados" },
  { id: 72, code: "F14", text: "Maneiras de lidar com os problemas de comportamento das crianças.", desc: "Integralidade - Serviços Prestados" },
  { id: 73, code: "F15", text: "Mudanças de crescimento e desenvolvimento da criança esperadas para cada faixa etária (ex.: quando a criança irá caminhar, controlar o xixi).", desc: "Integralidade - Serviços Prestados" },
  { id: 74, code: "F16", text: "Tópicos de segurança para crianças menores de 6 anos: ensiná-las a atravessar a rua em segurança e a usar assentos de segurança para crianças nos carros.", desc: "Integralidade - Serviços Prestados" },
  { id: 75, code: "F17", text: "Tópicos de segurança para crianças entre 6 e 12 anos: manter distância das armas, usar cintos de segurança e usar capacetes (para ciclistas).", desc: "Integralidade - Serviços Prestados" },
  { id: 76, code: "F18", text: "Tópicos de segurança para crianças acima de 12 anos: sexo seguro, dizer não às drogas, não beber e dirigir.", desc: "Integralidade - Serviços Prestados" },
  
  // Orientação Familiar
  { id: 77, code: "G1", text: "Você pergunta aos pacientes quais são as suas ideias e opiniões ao planejar o tratamento e o cuidado do paciente ou alguém da família?", desc: "Orientação Familiar" },
  { id: 78, code: "G2", text: "Você pergunta sobre doenças ou problemas de saúde que podem ocorrer na família dos pacientes?", desc: "Orientação Familiar" },
  { id: 79, code: "G3", text: "Você está disposto(a) e capacitado(a) para se reunir com membros da família dos pacientes para discutir um problema de saúde ou familiar?", desc: "Orientação Familiar" },
  { id: 80, code: "G4", text: "Uso de genogramas e/ou outros instrumentos de avaliação do funcionamento familiar.", desc: "Orientação Familiar" },
  { id: 81, code: "G5", text: "Discussão sobre fatores de risco familiares (ex.: genéticos).", desc: "Orientação Familiar" },
  { id: 82, code: "G6", text: "Discussão sobre recursos econômicos da família dos pacientes.", desc: "Orientação Familiar" },
  { id: 83, code: "G7", text: "Discussão sobre fatores de risco sociais (ex.: perda de emprego).", desc: "Orientação Familiar" },
  { id: 84, code: "G8", text: "Discussão sobre condições de vida (ex.: refrigerador em condições de funcionamento).", desc: "Orientação Familiar" },
  { id: 85, code: "G9", text: "Discussão sobre estado de saúde de outros membros da família.", desc: "Orientação Familiar" },
  { id: 86, code: "G10", text: "Discussão sobre as funções parentais.", desc: "Orientação Familiar" },
  { id: 87, code: "G11", text: "Avaliação de sinais de abuso infantil.", desc: "Orientação Familiar" },
  { id: 88, code: "G12", text: "Avaliação de sinais de crise familiar.", desc: "Orientação Familiar" },
  { id: 89, code: "G13", text: "Avaliação do impacto da saúde do paciente sobre o funcionamento da família.", desc: "Orientação Familiar" },
  { id: 90, code: "G14", text: "Avaliação do nível de desenvolvimento familiar.", desc: "Orientação Familiar" },

  // Orientação Comunitária
  { id: 91, code: "H1", text: "Você ou alguém do seu serviço de saúde faz visitas domiciliares?", desc: "Orientação Comunitária" },
  { id: 92, code: "H2", text: "Você acredita que o seu serviço de saúde tem o conhecimento adequado dos problemas de saúde da comunidade atendida?", desc: "Orientação Comunitária" },
  { id: 93, code: "H3", text: "No seu serviço de saúde são obtidas opiniões e ideias da comunidade sobre como melhorar os serviços de saúde?", desc: "Orientação Comunitária" },
  { id: 94, code: "H4", text: "No seu serviço de saúde são obtidas opiniões e ideias da comunidade sobre como melhorar os serviços de saúde?", desc: "Orientação Comunitária" },
  { id: 95, code: "H5", text: "Informações de mortalidade (dados sobre óbitos).", desc: "Orientação Comunitária" },
  { id: 96, code: "H6", text: "Dados de doenças de notificação compulsória (ex.: DSTs, TB).", desc: "Orientação Comunitária" },
  { id: 97, code: "H7", text: "Taxas de imunização da comunidade.", desc: "Orientação Comunitária" },
  { id: 98, code: "H8", text: "Dados secundários sobre saúde e riscos ocupacionais.", desc: "Orientação Comunitária" },
  { id: 99, code: "H9", text: "Informações clínicas do próprio serviço (ex.: número de gestantes, número de pacientes hipertensos, número de pacientes com TB).", desc: "Orientação Comunitária" },
  { id: 100, code: "H10", text: "Pesquisas com os seus pacientes.", desc: "Orientação Comunitária" },
  { id: 101, code: "H11", text: "Pesquisas na sua comunidade.", desc: "Orientação Comunitária" },
  { id: 102, code: "H12", text: "Feedback (retorno das informações) de organizações comunitárias ou conselhos gestores de saúde.", desc: "Orientação Comunitária" },
  { id: 103, code: "H13", text: "Feedback (retorno das informações) da equipe de saúde.", desc: "Orientação Comunitária" },
  { id: 104, code: "H14", text: "Análise de dados de saúde locais ou estatísticas vitais.", desc: "Orientação Comunitária" },
  { id: 105, code: "H15", text: "Avaliações sistemáticas de seus programas e serviços prestados.", desc: "Orientação Comunitária" },
  { id: 106, code: "H16", text: "Atuação dos Agentes Comunitários de Saúde.", desc: "Orientação Comunitária" },
  { id: 107, code: "H17", text: "Presença de usuários no Conselho Local de Saúde (Conselho Gestor/Conselho de Usuários) ou Conselho Distrital de Saúde.", desc: "Orientação Comunitária" },
  { id: 108, code: "H18", text: "Atuar em rede com agências estatais e locais envolvidas com grupos culturalmente diversos.", desc: "Orientação Comunitária" },
  { id: 109, code: "H19", text: "Vínculos com serviços/organizações religiosas.", desc: "Orientação Comunitária" },
  { id: 110, code: "H20", text: "Envolvimento com associações de moradores/lideranças comunitárias.", desc: "Orientação Comunitária" },
  { id: 111, code: "H21", text: "Agentes comunitários de saúde ou membros do Conselho Local de Saúde (Conselho Gestor/Conselho de Usuários) ou Conselho Distrital de Saúde.", desc: "Orientação Comunitária" }
];
// ==============================================================================

// ==============================================================================
// 6 – PCATOOL – BRASIL SAÚDE BUCAL PARA PACIENTES ADULTOS VERSÃO EXTENSA - OK
// ==============================================================================
export const QUESTIONS_BUCAL_EXTENSA: Question[] = [
  // Afiliação
  { id: 1, code: "A1", text: "Há um(a) serviço de saúde bucal/dentista onde você geralmente vai quando tem uma doença na boca ou nos dentes ou quando precisa de conselhos sobre a sua saúde bucal?", desc: "Grau de Afiliação", type: "filter" },
  { id: 2, code: "A1.1", text: "Qual o nome deste(a) serviço de saúde bucal ou dentista?", desc: "Grau de Afiliação", type: "text" },
  { id: 3, code: "A1.2", text: "Qual o endereço deste(a) serviço de saúde bucal ou dentista?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 4, code: "A2", text: "Há um(a) serviço de saúde bucal/dentista que melhor conhece você como pessoa?", desc: "Grau de Afiliação", type: "a2_filter" },
  { id: 5, code: "A2.1", text: "Qual o nome deste(a) serviço de saúde bucal ou dentista?", desc: "Grau de Afiliação", type: "text" },
  { id: 6, code: "A2.2", text: "Qual o endereço deste(a) serviço de saúde bucal ou dentista?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 7, code: "A3", text: "Há um(a) serviço de saúde bucal/dentista que é mais responsável por seu atendimento de saúde bucal?", desc: "Grau de Afiliação", type: "a3_filter" },
  { id: 8, code: "A3.1", text: "Qual o nome deste(a) serviço de saúde bucal ou dentista?", desc: "Grau de Afiliação", type: "text" },
  { id: 9, code: "A3.2", text: "Qual o endereço deste(a) serviço de saúde bucal ou dentista?", desc: "Grau de Afiliação", type: "text" },
  
  { id: 10, code: "A4", text: "Qual o nome do(a) serviço de saúde bucal/dentista procurado(a) no último atendimento odontológico do(a) adulto(a)?", desc: "Grau de Afiliação", type: "text" },
  { id: 11, code: "A4.1", text: "Qual o endereço do(a) serviço de saúde bucal/dentista procurado(a) no último atendimento odontológico do(a) adulto(a)?", desc: "Grau de Afiliação", type: "text" },
  { id: 12, code: "A5", text: "Escreva o nome do(a) serviço de saúde bucal/dentista identificado(a) como a referência para os cuidados de saúde bucal do(a) adulto(a), e esclareça ao(à) entrevistado(a) que a partir de agora, todas as perguntas serão sobre este(a) serviço ou profissional de saúde bucal.", desc: "Grau de Afiliação", type: "text" },

  // Acesso de Primeiro Contato - Utilização
  { id: 13, code: "B1", text: "Quando você precisa de uma consulta de revisão da saúde bucal com o(a) dentista (consulta de rotina, check-up), você vai ao(à) “serviço de saúde bucal/dentista” antes de ir a outro serviço de saúde bucal?", desc: "Acesso de Primeiro Contato - Utilização" },
  { id: 14, code: "B2", text: "Quando você tem um novo problema na boca ou nos dentes, você vai ao(à) “serviço de saúde bucal/dentista” antes de ir a outro serviço de saúde bucal?", desc: "Acesso de Primeiro Contato - Utilização" },
  { id: 15, code: "B3", text: "Quando você precisa de uma consulta com um(a) dentista especialista (ex.: para fazer um tratamento de canal - endodontista ou tratamento de gengivas - periodontista), o “serviço de saúde bucal/dentista” obrigatoriamente deve encaminhar você?", desc: "Acesso de Primeiro Contato - Utilização" },
  
  // Acesso de Primeiro Contato - Acessibilidade
  { id: 16, code: "C1", text: "O(A) “serviço de saúde bucal” fica aberto no sábado e/ou no domingo?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 17, code: "C2", text: "O(A) “serviço de saúde bucal” fica aberto(a) pelo menos algumas noites de dias úteis até às 20 horas?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 18, code: "C3", text: "Quando o(a) “serviço de saúde bucal” está aberto(a) e você apresenta algum problema na boca ou nos dentes, alguém deste serviço atende você no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 19, code: "C4", text: "Quando o(a) “serviço de saúde bucal” está aberto(a), você consegue aconselhamento rápido pelo telefone ou por ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) se precisar?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 20, code: "C5", text: "Quando o(a) “serviço de saúde bucal” está fechado(a), existe um número de telefone ou contato de ferramenta de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) que você possa contatar se apresentar um problema na boca ou nos dentes?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 21, code: "C6", text: "Quando o(a) “serviço de saúde bucal” está fechado(a) no sábado e no domingo e você apresenta um problema na boca ou nos dentes, alguém deste serviço atende você no mesmo dia?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 22, code: "C7", text: "Quando o(a) “serviço de saúde bucal” está fechado(a) e você apresenta um problema na boca ou nos dentes durante a noite, alguém deste serviço atende você na mesma noite?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 23, code: "C8", text: "É fácil marcar uma consulta de revisão com o(a) dentista (consulta de rotina, “check-up”) no(a)/com o(a) “serviço de saúde bucal/dentista”?", desc: "Acesso de Primeiro Contato - Acessibilidade" },
  { id: 24, code: "C9", text: "Quando você chega no(a) “serviço de saúde bucal”, você tem que esperar mais de 30 minutos para consultar com o(a) dentista (sem considerar a triagem ou o acolhimento)?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  { id: 25, code: "C10", text: "Você precisa esperar por muito tempo, ou falar com muitas pessoas para marcar uma consulta com o(a) dentista no(a) “serviço de saúde bucal”?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  { id: 26, code: "C11", text: "É difícil para você conseguir atendimento com o(a) dentista no(a) “serviço de saúde bucal” quando pensa que é necessário?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },
  { id: 27, code: "C12", text: "Quando você necessita ir ao(à) “serviço de saúde bucal”, você precisa faltar ao trabalho ou à escola?", desc: "Acesso de Primeiro Contato - Acessibilidade (Item Negativo)" },

  // Longitudinalidade
  { id: 28, code: "D1", text: "Quando você vai ao(à) “serviço de saúde bucal”, é o(a) mesmo(a) dentista que atende você todas às vezes?", desc: "Longitudinalidade" },
  { id: 29, code: "D2", text: "Você acha que o(a) “dentista” entende o que você diz ou pergunta?", desc: "Longitudinalidade" },
  { id: 30, code: "D3", text: "O(A) “dentista” responde as suas perguntas de maneira que você entenda?", desc: "Longitudinalidade" },
  { id: 31, code: "D4", text: "Se você tiver uma pergunta sobre a sua saúde bucal, pode telefonar ou utilizar alguma forma de comunicação virtual (ex.: whatsapp, telegram, wechat, skype, hangout, e-mail) e falar com o(a) dentista que melhor conhece você?", desc: "Longitudinalidade" },
  { id: 32, code: "D5", text: "O(A) “dentista” dá tempo suficiente para falar sobre as suas preocupações ou problemas?", desc: "Longitudinalidade" },
  { id: 33, code: "D6", text: "Você se sente à vontade contando as suas preocupações ou problemas ao(à) “dentista”?", desc: "Longitudinalidade" },
  { id: 34, code: "D7", text: "O(A) “dentista” conhece você mais como pessoa do que somente como alguém com um problema de saúde bucal?", desc: "Longitudinalidade" },
  { id: 35, code: "D8", text: "O(A) “dentista” sabe quem mora com você?", desc: "Longitudinalidade" },
  { id: 36, code: "D9", text: "O(A) “dentista” sabe quais problemas são mais importantes para você?", desc: "Longitudinalidade" },
  { id: 37, code: "D10", text: "O(A) “dentista” conhece a sua história de saúde geral e de saúde bucal completa?", desc: "Longitudinalidade" },
  { id: 38, code: "D11", text: "O(A) “dentista” sabe sobre o seu trabalho ou emprego?", desc: "Longitudinalidade" },
  { id: 39, code: "D12", text: "De alguma forma, o(a) “dentista” saberia se você tivesse problemas em obter ou pagar por medicamentos ou produtos de higiene oral (ex.: escova, pasta de dente ou fio-dental) que você precisa?", desc: "Longitudinalidade" },
  { id: 40, code: "D13", text: "O(A) “dentista” sabe a respeito de todos os medicamentos que você está tomando?", desc: "Longitudinalidade" },
  { id: 41, code: "D14", text: "Se quisesse, você mudaria do(a) “serviço de saúde bucal/dentista” para outro serviço de saúde bucal ou dentista?", desc: "Longitudinalidade (Item Negativo)" },
  { id: 42, code: "D15", text: "Se fosse muito fácil, você mudaria do(a) “serviço de saúde bucal” para outro serviço de saúde bucal?", desc: "Longitudinalidade (Item Negativo)" },
 
  // Coordenação - Integração de Cuidados
  { id: 43, code: "E1", text: "No(a) “serviço de saúde bucal” você recebe os resultados dos seus exames de raio-x dentários?", desc: "Coordenação - Integração de Cuidados" },
  { id: 44, code: "E2", text: "Você foi consultar qualquer tipo de dentista especialista ou serviço de saúde bucal especializado no período em que você está em acompanhamento no(a)/com o(a) “serviço de saúde bucal/dentista”(Ex.: para fazer tratamento de canal, para fazer tratamento nas gengivas ou para fazer uma cirurgia mais complicada na boca)?", desc: "Coordenação - Integração de Cuidados" },
  { id: 45, code: "E3", text: "O(A) “dentista” sugeriu (indicou, encaminhou) que você fosse consultar com esse(a) dentista especialista ou no serviço de saúde bucal especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 46, code: "E4", text: "O(A) “dentista” sabe que você fez essa consulta com esse(a) especialista ou no serviço de saúde bucal especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 47, code: "E5", text: "O(A) “dentista” discutiu com você diferentes serviços onde você poderia ser atendido(a) para esse problema de saúde bucal?", desc: "Coordenação - Integração de Cuidados" },
  { id: 48, code: "E6", text: "O(A) “dentista” ou alguém que trabalha no(a) “serviço de saúde bucal” ajudou você a marcar essa consulta com o(a) dentista especialista ou no serviço de saúde bucal especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 49, code: "E7", text: "O(A) “dentista” enviou alguma informação para o(a) dentista especialista sobre o motivo dessa consulta (com o(a) especialista ou no serviço de saúde bucal especializado)?", desc: "Coordenação - Integração de Cuidados" },
  { id: 50, code: "E8", text: "O(A) “dentista” sabe quais foram os resultados dessa consulta com o(a) dentista especialista ou no serviço de saúde bucal especializado?", desc: "Coordenação - Integração de Cuidados" },
  { id: 51, code: "E9", text: "Depois que você foi a esse(a) dentista especialista ou serviço de saúde bucal especializado, o(a) “dentista” conversou com você sobre o que aconteceu durante essa consulta?", desc: "Coordenação - Integração de Cuidados" },
  { id: 52, code: "E10", text: "O(A) “dentista” pareceu interessado na qualidade do cuidado que você recebeu no(a) dentista especialista ou serviço de saúde bucal especializado (perguntou se você foi bem ou mal atendido)?", desc: "Coordenação - Integração de Cuidados" },
 
  // Coordenação - Sistemas de Informações
  { id: 53, code: "F1", text: "Quando você vai ao(à) “serviço de saúde bucal/dentista” você leva algum dos registros de saúde bucal ou boletins de atendimento com o(a) dentista que você recebeu em atendimentos anteriores (ex.: fichas de atendimento de urgência, exames de raio-x dos dentes)?", desc: "Coordenação - Sistemas de Informações" },
  { id: 54, code: "F2", text: "Se quisesse, você poderia ler (consultar) o seu prontuário (história clínica dentária) no(a)/ com o(a) “serviço de saúde bucal/dentista”?", desc: "Coordenação - Sistemas de Informações" },
  { id: 55, code: "F3", text: "Quando você vai ao(à) “serviço de saúde bucal/dentista”, o seu prontuário (história clínica dentária) está sempre disponível na consulta?", desc: "Coordenação - Sistemas de Informações" },
  
  // Integralidade - Serviços Disponíveis
  { id: 56, code: "G1", text: "Aplicação de Flúor nos dentes e orientação sobre o seu uso.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 57, code: "G2", text: "Tratamento das doenças da Gengiva (limpeza dos dentes).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 58, code: "G3", text: "Exame preventivo da boca (Câncer de Boca).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 59, code: "G4", text: "Aconselhamento sobre tabagismo (ex.: como parar de fumar).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 60, code: "G5", text: "Atendimento da gestante com dentista (Pré-natal odontológico).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 61, code: "G6", text: "Orientações de saúde bucal para quem cuida (cuidadores) de pacientes acamados ou com deficiência.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 62, code: "G7", text: "Tratamento e orientações de saúde bucal em seu domicílio aos pacientes acamados ou que não podem sair de suas casas.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 63, code: "G8", text: "Restauração ou obturação dos dentes.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 64, code: "G9", text: "Extração dentária (arrancar um dente que não possa ser tratado).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 65, code: "G10", text: "Tratamento e orientações para pessoas com mau hálito.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 66, code: "G11", text: "Tratamento e orientações para aftas.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 67, code: "G12", text: "Orientações de como cuidar das próteses dentárias (ex.: dentadura, ponte móvel).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 68, code: "G13", text: "Tratamento e orientações dos sintomas em casos de dor na articulação da boca (no carrinho).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 69, code: "G14", text: "Tratamento e orientação em caso de dor no dente siso (dente do juízo).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 70, code: "G15", text: "Orientação e encaminhamento de pessoas que respiram pela boca para tratamento médico.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 71, code: "G16", text: "Orientações sobre feridas na boca (ex.: herpes simples).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 72, code: "G17", text: "Orientações e encaminhamento de pessoas com malformações no lábio e no céu da boca (ex.: fenda labial, fenda palatina, lábio leporino).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 73, code: "G18", text: "Orientações sobre alterações no gosto dos alimentos (paladar).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 74, code: "G19", text: "Orientações às pessoas que rangem os dentes (bruxismo).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 75, code: "G20", text: "Orientações sobre transtornos alimentares (problemas alimentares).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 76, code: "G21", text: "Orientações sobre problemas causados pelo excesso de flúor nos dentes (fluorose).", desc: "Integralidade - Serviços Disponíveis" },
  { id: 77, code: "G22", text: "Esclarecimentos sobre problemas que possam ocorrer quando se utiliza “piercing” na boca.", desc: "Integralidade - Serviços Disponíveis" },
  { id: 78, code: "G23", text: "Orientações e cuidados de saúde bucal às pessoas com pressão alta (hipertensos) e/ou diabéticos.", desc: "Integralidade - Serviços Disponíveis" },

  // Integralidade - Serviços Prestados
  { id: 79, code: "H1", text: "Orientações sobre como realizar a higiene da boca (escova/fio dental).", desc: "Integralidade - Serviços Prestados" },
  { id: 80, code: "H2", text: "Orientações sobre medicamentos (remédios que interferem na boca).", desc: "Integralidade - Serviços Prestados" },
  { id: 81, code: "H3", text: "Exame da boca/exame dos dentes/exame odontológico.", desc: "Integralidade - Serviços Prestados" },
  { id: 82, code: "H4", text: "Orientações sobre hábitos que podem prejudicar a boca e os dentes (ex.: roer unhas, morder bochechas).", desc: "Integralidade - Serviços Prestados" },
  { id: 83, code: "H5", text: "Orientações sobre o que fazer para prevenir o câncer de boca.", desc: "Integralidade - Serviços Prestados" },
  { id: 84, code: "H6", text: "Tratamento e orientações sobre desgastes nos dentes.", desc: "Integralidade - Serviços Prestados" },
  { id: 85, code: "H7", text: "Realização de atividades de educação em saúde na unidade de saúde ou na comunidade (ex.: grupos, oficinas, palestras).", desc: "Integralidade - Serviços Prestados" },
  { id: 86, code: "H8", text: "Orientações sobre mudanças que ocorrem na boca com o envelhecimento.", desc: "Integralidade - Serviços Prestados" },
  { id: 87, code: "H9", text: "Orientações sobre a água que você bebe.", desc: "Integralidade - Serviços Prestados" },

  // Orientação Familiar
  { id: 88, code: "I1", text: "O(A) “dentista” pergunta as suas ideias e opiniões (o que você pensa) ao planejar o tratamento e cuidado de saúde bucal para você ou para alguém da sua família?", desc: "Orientação Familiar" },
  { id: 89, code: "I2", text: "O(A) “dentista” já perguntou para você sobre doenças ou problemas comuns que podem ocorrer em sua família (ex.: câncer de boca, diabetes, pressão alta, tabagismo, alcoolismo)?", desc: "Orientação Familiar" },
  { id: 90, code: "I3", text: "O(A) “dentista” se reuniria com membros de sua família se você achasse necessário?", desc: "Orientação Familiar" },

  // Orientação Comunitária
  { id: 91, code: "J1", text: "Alguém do(a) “serviço de saúde bucal” faz visitas domiciliares?", desc: "Orientação Comunitária" },
  { id: 92, code: "J2", text: "O(A) “dentista” conhece os problemas de saúde importantes na sua vizinhança?", desc: "Orientação Comunitária" },
  { id: 93, code: "J3", text: "O(A) “serviço de saúde bucal/dentista” leva em conta opiniões e ideias da comunidade sobre como melhorar os serviços de saúde?", desc: "Orientação Comunitária" },
  { id: 94, code: "J4", text: "Pesquisas com os pacientes para ver se os serviços de saúde bucal estão satisfazendo (atendendo) as necessidades das pessoas.", desc: "Orientação Comunitária" },
  { id: 95, code: "J5", text: "Pesquisas na comunidade para identificar problemas de saúde bucal que deveriam ser conhecidos no serviço.", desc: "Orientação Comunitária" },
  { id: 96, code: "J6", text: "Convida você e a sua família para participar do Conselho Local de Saúde (Conselho Gestor/Conselho de Usuários) ou Conselho Distrital de Saúde.", desc: "Orientação Comunitária" }
];
// ==============================================================================
