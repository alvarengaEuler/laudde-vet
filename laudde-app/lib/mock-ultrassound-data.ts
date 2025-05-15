// Modelos de achados normais por órgão/estrutura
export const normalFindingsTemplates: Record<string, string> = {
    figado:
      "Parênquima com ecogenicidade e ecotextura normais. Bordas regulares e dimensões preservadas. Vasos hepáticos de calibre normal. Não há evidências de lesões focais ou difusas.",
  
    vesicula_biliar:
      "Vesícula biliar de paredes finas e regulares, com conteúdo anecogênico. Vias biliares não dilatadas.",
  
    baco: "Parênquima com ecogenicidade e ecotextura homogêneas. Bordas regulares e dimensões preservadas. Não há evidências de lesões focais.",
  
    estomago: "Parede com estratificação e espessura normais. Conteúdo gasoso habitual com formação de artefatos.",
  
    intestinos:
      "Alças intestinais com parede de espessura e estratificação preservadas. Peristaltismo presente e conteúdo habitual. Não há evidências de obstruções, intussuscepções ou massas.",
  
    pancreas:
      "Não visualizado em sua totalidade devido à interposição gasosa, porções visíveis com ecotextura e dimensões normais.",
  
    rins: "Rins direito e esquerdo simétricos, com ecogenicidade e arquitetura corticomedular preservadas. Relação córtico-medular normal. Não há evidências de dilatação de pelve, cálculos ou massas.",
  
    adrenais: "Adrenais com formato, ecotextura e dimensões normais.",
  
    bexiga:
      "Bexiga urinária com paredes regulares e conteúdo anecogênico. Não há evidências de sedimento, cálculos ou massas.",
  
    prostata:
      "Próstata com dimensões, contornos e ecotextura normais. Não há evidências de cistos, abscessos ou neoplasias.",
  
    utero_ovarios:
      "Útero não gravídico de dimensões normais. Ovários com características ultrassonográficas preservadas.",
  
    linfonodos: "Linfonodos mesentéricos e ilíacos com dimensões normais.",
  
    cavidade: "Não há evidências de líquido livre ou massa na cavidade abdominal.",
  }
  
  // Modelos de conclusões normais
  export const normalConclusionTemplates: Record<string, string> = {
    normal: "Exame ultrassonográfico abdominal dentro dos padrões de normalidade para a espécie e idade.",
  
    indefinido: "As alterações observadas são inespecíficas. Sugere-se correlação com exame clínico e laboratoriais.",
  
    hepatopatia: "Alterações ultrassonográficas sugestivas de hepatopatia. Recomenda-se avaliação laboratorial hepática.",
  
    nefropatia: "Alterações ultrassonográficas sugestivas de nefropatia crônica. Recomenda-se avaliação da função renal.",
  
    gastrointestinal:
      "Alterações ultrassonográficas sugestivas de processo inflamatório gastrointestinal. Recomenda-se acompanhamento clínico.",
  }
  
  // Modelos de técnicas utilizadas
  export const techniqueTemplates: Record<string, string> = {
    padrao:
      "Exame realizado com o animal em decúbito dorsal e lateral, utilizando transdutor convexo multifrequencial de 2-8MHz. Janelas acústicas abdominais padrão.",
  
    sedata:
      "Exame realizado com o animal sedado em decúbito dorsal e lateral, utilizando transdutor convexo multifrequencial de 2-8MHz. Janelas acústicas abdominais padrão.",
  
    contencao:
      "Exame realizado com o animal sob contenção física em decúbito dorsal e lateral, utilizando transdutor convexo multifrequencial de 2-8MHz. Janelas acústicas abdominais padrão.",
  }
  
  // Modelos de indicações comuns
  export const indicationTemplates: Record<string, string> = {
    checkup: "Exame de rotina/check-up.",
  
    gastrointestinal: "Avaliação gastrointestinal devido a vômito e diarreia.",
  
    urinario: "Avaliação do trato urinário devido a alterações na micção.",
  
    hepatica: "Avaliação hepática devido a alterações em exames laboratoriais.",
  
    abdominal: "Avaliação abdominal devido a dor/desconforto.",
  
    massa: "Avaliação de massa/aumento de volume abdominal.",
  
    pos_cirurgico: "Acompanhamento pós-cirúrgico.",
  }
  
  // Modelos de alterações comuns
  export const commonAbnormalFindingsTemplates: Record<string, Record<string, string>> = {
    figado: {
      hepatomegalia: "Parênquima com dimensões aumentadas, caracterizando hepatomegalia.",
      esteatose: "Parênquima com ecogenicidade aumentada difusamente, sugestivo de lipidose hepática/esteatose.",
      nodulos: "Presença de nódulos/massas hepáticas, medindo aproximadamente XX mm.",
      heterogeneo: "Parênquima com ecotextura heterogênea difusa.",
    },
  
    vesicula_biliar: {
      lama: "Presença de lama biliar em moderada quantidade.",
      calculos:
        "Presença de estruturas hiperecogênicas formadoras de sombra acústica posterior, compatíveis com cálculos biliares.",
      espessada: "Parede da vesícula biliar espessada, medindo aproximadamente XX mm.",
    },
  
    baco: {
      esplenomegalia: "Baço com dimensões aumentadas, caracterizando esplenomegalia.",
      nodulos: "Presença de nódulos/massas esplênicas, medindo aproximadamente XX mm.",
    },
  
    rins: {
      nefropatia:
        "Rins com aumento de ecogenicidade cortical e perda da definição corticomedular, sugestivo de nefropatia.",
      calculos:
        "Presença de estruturas hiperecogênicas formadoras de sombra acústica posterior em pelve renal, compatíveis com cálculos.",
      dilatacao: "Dilatação de pelve renal (pielectasia), medindo aproximadamente XX mm.",
    },
  
    bexiga: {
      sedimento: "Presença de sedimento em moderada quantidade.",
      calculos:
        "Presença de estruturas hiperecogênicas formadoras de sombra acústica posterior, compatíveis com cálculos vesicais.",
      espessada: "Parede da bexiga espessada, medindo aproximadamente XX mm.",
    },
  
    prostata: {
      hiperplasia:
        "Próstata com dimensões aumentadas, contornos regulares e ecotextura homogênea, sugestivo de hiperplasia prostática benigna.",
      cistos: "Presença de estruturas císticas prostáticas, medindo aproximadamente XX mm.",
    },
  
    utero_ovarios: {
      piometra: "Útero com dimensões aumentadas, conteúdo anecogênico/hipoecogênico, sugestivo de piometra.",
      cistos: "Presença de estruturas císticas ovarianas, medindo aproximadamente XX mm.",
    },
  
    cavidade: {
      liquido_livre: "Presença de líquido livre em cavidade abdominal em pequena/moderada/grande quantidade.",
      peritonite:
        "Presença de líquido livre com debris em suspensão e aumento da ecogenicidade do mesentério, sugestivo de processo inflamatório peritoneal.",
    },
  }
  
  // Ordem anatômica para exibição
  export const anatomicalOrder = [
    { id: "figado", label: "Fígado" },
    { id: "vesicula_biliar", label: "Vesícula biliar e vias biliares" },
    { id: "baco", label: "Baço" },
    { id: "estomago", label: "Estômago" },
    { id: "intestinos", label: "Intestinos" },
    { id: "pancreas", label: "Pâncreas" },
    { id: "rins", label: "Rins" },
    { id: "adrenais", label: "Adrenais" },
    { id: "bexiga", label: "Bexiga urinária" },
    { id: "prostata", label: "Próstata", onlyFor: "male" },
    { id: "utero_ovarios", label: "Útero e ovários", onlyFor: "female" },
    { id: "linfonodos", label: "Linfonodos" },
    { id: "cavidade", label: "Cavidade abdominal" },
  ]
  