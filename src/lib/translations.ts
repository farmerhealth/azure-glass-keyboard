/**
 * Dicionário PT → EN.
 * Nunca inventar traduções: só entram aqui traduções reais e verificadas.
 */

export const WORDS: Record<string, string[]> = {
  // pronomes
  eu: ["I"],
  tu: ["you"],
  você: ["you"],
  voce: ["you"],
  vocês: ["you", "you all"],
  voces: ["you", "you all"],
  ele: ["he", "him", "it"],
  ela: ["she", "her", "it"],
  eles: ["they", "them"],
  elas: ["they", "them"],
  nós: ["we", "us"],
  nos: ["we", "us"],
  me: ["me", "myself"],
  te: ["you"],
  lhe: ["him", "her", "you"],
  mim: ["me"],
  ti: ["you"],
  se: ["himself", "herself", "yourself", "if"],
  meu: ["my", "mine"],
  minha: ["my", "mine"],
  seu: ["your", "his", "her"],
  sua: ["your", "his", "her"],
  nosso: ["our", "ours"],
  nossa: ["our", "ours"],
  dele: ["his"],
  dela: ["her", "hers"],

  // artigos e determinantes
  o: ["the", "it"],
  a: ["the", "her", "to"],
  os: ["the"],
  as: ["the"],
  um: ["a", "one"],
  uma: ["a", "one"],
  uns: ["some"],
  umas: ["some"],
  este: ["this"],
  esta: ["this"],
  isso: ["that", "it"],
  isto: ["this"],
  aquele: ["that"],
  aquela: ["that"],
  todo: ["all", "every"],
  toda: ["all", "every"],
  todos: ["all", "everyone"],
  outro: ["other", "another"],
  outra: ["other", "another"],
  muito: ["very", "much", "a lot"],
  muita: ["much", "a lot"],
  pouco: ["little", "few"],
  mais: ["more", "most"],
  menos: ["less", "fewer"],

  // preposições e conectores
  de: ["of", "from"],
  do: ["of the", "from the"],
  da: ["of the", "from the"],
  dos: ["of the"],
  das: ["of the"],
  em: ["in", "on", "at"],
  no: ["in the", "on the"],
  na: ["in the", "on the"],
  para: ["for", "to"],
  pra: ["for", "to"],
  por: ["by", "for", "through"],
  com: ["with"],
  sem: ["without"],
  sobre: ["about", "on", "over"],
  entre: ["between", "among"],
  até: ["until", "up to"],
  ate: ["until", "up to"],
  desde: ["since", "from"],
  e: ["and"],
  ou: ["or"],
  mas: ["but"],
  porque: ["because"],
  que: ["that", "what", "which"],
  como: ["how", "as", "like"],
  quando: ["when"],
  onde: ["where"],
  quem: ["who"],
  qual: ["which", "what"],
  quanto: ["how much"],
  também: ["also", "too"],
  tambem: ["also", "too"],
  já: ["already", "now"],
  ja: ["already", "now"],
  ainda: ["still", "yet"],
  sempre: ["always"],
  nunca: ["never"],
  hoje: ["today"],
  amanhã: ["tomorrow"],
  amanha: ["tomorrow"],
  ontem: ["yesterday"],
  agora: ["now"],
  aqui: ["here"],
  ali: ["there"],
  lá: ["there"],
  la: ["there"],
  sim: ["yes"],
  não: ["no", "not"],
  nao: ["no", "not"],

  // verbos comuns
  ser: ["to be"],
  sou: ["I am"],
  é: ["is"],
  e_: ["is"],
  são: ["are"],
  sao: ["are"],
  estar: ["to be"],
  estou: ["I am"],
  está: ["is"],
  esta_: ["is"],
  ter: ["to have"],
  tenho: ["I have"],
  tem: ["has", "have"],
  fazer: ["to do", "to make"],
  faço: ["I do", "I make"],
  faco: ["I do", "I make"],
  faz: ["does", "makes"],
  ir: ["to go"],
  vou: ["I go", "I will"],
  vai: ["goes", "will"],
  vir: ["to come"],
  venho: ["I come"],
  vem: ["comes"],
  querer: ["to want"],
  quero: ["I want"],
  quer: ["wants"],
  poder: ["to be able", "can"],
  posso: ["I can"],
  pode: ["can"],
  saber: ["to know"],
  sei: ["I know"],
  sabe: ["knows"],
  ver: ["to see"],
  vejo: ["I see"],
  vê: ["sees"],
  falar: ["to speak", "to talk"],
  falo: ["I speak"],
  fala: ["speaks"],
  dizer: ["to say", "to tell"],
  digo: ["I say"],
  diz: ["says"],
  amar: ["to love"],
  amo: ["love", "I love"],
  ama: ["loves"],
  gostar: ["to like"],
  gosto: ["I like", "taste"],
  gosta: ["likes"],
  comer: ["eat", "to eat", "eating"],
  como_: ["I eat"],
  come: ["eats"],
  beber: ["drink", "to drink", "drinking"],
  bebo: ["I drink"],
  bebe: ["drinks"],
  dormir: ["to sleep"],
  durmo: ["I sleep"],
  dorme: ["sleeps"],
  trabalhar: ["to work"],
  trabalho: ["work", "I work"],
  estudar: ["to study"],
  estudo: ["study", "I study"],
  precisar: ["to need"],
  preciso: ["I need"],
  precisa: ["needs"],
  ajudar: ["to help"],
  ajuda: ["help", "helps"],
  esperar: ["to wait", "to hope"],
  espero: ["I hope", "I wait"],

  // substantivos e adjetivos comuns
  casa: ["house", "home"],
  água: ["water"],
  agua: ["water"],
  comida: ["food", "meal"],
  café: ["coffee"],
  cafe: ["coffee"],
  pão: ["bread"],
  pao: ["bread"],
  escola: ["school"],
  livro: ["book"],
  carro: ["car"],
  rua: ["street", "road"],
  cidade: ["city", "town"],
  país: ["country"],
  pais: ["country", "parents"],
  amigo: ["friend"],
  amiga: ["friend"],
  família: ["family"],
  familia: ["family"],
  amor: ["love", "affection"],
  vida: ["life"],
  dia: ["day"],
  noite: ["night", "evening"],
  tarde: ["afternoon", "late"],
  manhã: ["morning"],
  manha: ["morning"],
  tempo: ["time", "weather"],
  hora: ["hour", "time"],
  ano: ["year"],
  mês: ["month"],
  mes: ["month"],
  semana: ["week"],
  trabalhador: ["worker"],
  dinheiro: ["money"],
  mundo: ["world"],
  coisa: ["thing"],
  pessoa: ["person"],
  homem: ["man"],
  mulher: ["woman", "wife"],
  criança: ["child"],
  crianca: ["child"],
  bom: ["good", "kind"],
  boa: ["good"],
  mau: ["bad"],
  ruim: ["bad"],
  grande: ["big", "large", "great"],
  pequeno: ["small", "little"],
  novo: ["new", "young"],
  velho: ["old"],
  feliz: ["happy", "glad"],
  triste: ["sad"],
  bonito: ["beautiful", "handsome"],
  bonita: ["beautiful", "pretty"],
  legal: ["cool", "nice"],
  fácil: ["easy"],
  facil: ["easy"],
  difícil: ["hard", "difficult"],
  dificil: ["hard", "difficult"],
  cansado: ["tired"],
  fome: ["hunger", "hungry"],
  sede: ["thirst", "thirsty"],

  // saudações
  olá: ["hello", "hi"],
  ola: ["hello", "hi"],
  oi: ["hi", "hello"],
  tchau: ["bye", "goodbye"],
  obrigado: ["thank you", "thanks"],
  obrigada: ["thank you", "thanks"],
  desculpa: ["sorry", "excuse me"],
  desculpe: ["sorry", "excuse me"],
  favor: ["favor"],
  saudade: ["longing", "I miss you"],
};

/** Expressões: tradução natural, não literal. */
export const PHRASES: Record<string, string[]> = {
  "te amo": ["I love you"],
  "eu te amo": ["I love you"],
  "amo você": ["I love you"],
  "eu amo você": ["I love you"],
  "eu amo": ["I love"],
  "te odeio": ["I hate you"],
  "com licença": ["excuse me"],
  "por favor": ["please"],
  "muito obrigado": ["thank you very much"],
  "muito obrigada": ["thank you very much"],
  "de nada": ["you're welcome"],
  "bom dia": ["good morning"],
  "boa tarde": ["good afternoon"],
  "boa noite": ["good evening", "good night"],
  "tudo bem": ["all good", "how are you", "okay"],
  "como vai": ["how are you"],
  "como você está": ["how are you"],
  "como esta você": ["how are you"],
  "qual é o seu nome": ["what is your name"],
  "meu nome é": ["my name is"],
  "estou com fome": ["I'm hungry"],
  "estou com sede": ["I'm thirsty"],
  "estou cansado": ["I'm tired"],
  "quero comer": ["I want to eat"],
  "quero beber": ["I want to drink"],
  "vou embora": ["I'm leaving"],
  "até logo": ["see you later"],
  "ate logo": ["see you later"],
  "até amanhã": ["see you tomorrow"],
  "ate amanha": ["see you tomorrow"],
  "sinto sua falta": ["I miss you"],
  "estou com saudade": ["I miss you"],
  "não entendi": ["I didn't understand"],
  "nao entendi": ["I didn't understand"],
  "não sei": ["I don't know"],
  "nao sei": ["I don't know"],
  "tudo bom": ["all good", "how are you"],
  "boa sorte": ["good luck"],
  "meu amor": ["my love"],
  "faz favor": ["please"],
};

export interface Suggestion {
  /** Texto em inglês exibido e inserido. */
  text: string;
  /** Quantas palavras finais do texto serão substituídas. */
  words: number;
}

const MAX_PHRASE_WORDS = 5;

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^\p{L}\p{N}'\s]/gu, "");
}

/**
 * Analisa o texto digitado e devolve sugestões individuais.
 * Expressões (tradução natural) vêm antes da tradução da palavra atual.
 */
export function getSuggestions(text: string): Suggestion[] {
  const endsWithSpace = /\s$/.test(text);
  const tokens = normalize(text).split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return [];

  const results: Suggestion[] = [];
  const seen = new Set<string>();

  const push = (value: string, words: number) => {
    const key = value.toLowerCase();
    if (seen.has(key)) return;
    seen.add(key);
    results.push({ text: value, words });
  };

  // Expressões: janelas terminando na última palavra, das maiores para as menores.
  const maxWindow = Math.min(MAX_PHRASE_WORDS, tokens.length);
  for (let size = maxWindow; size >= 2; size--) {
    const phrase = tokens.slice(tokens.length - size).join(" ");
    const matches = PHRASES[phrase];
    if (matches) matches.forEach((m) => push(m, size));
  }

  // Palavra atual (somente enquanto ela está sendo digitada).
  if (!endsWithSpace) {
    const current = tokens[tokens.length - 1];
    if (current) {
      const matches = WORDS[current];
      if (matches) matches.forEach((m) => push(m, 1));
    }
  }

  return results.slice(0, 8);
}

/** Aplica a sugestão, substituindo as últimas `words` palavras do texto. */
export function applySuggestion(text: string, suggestion: Suggestion): string {
  let remaining = suggestion.words;
  let index = text.length;

  // Ignora espaços finais.
  while (index > 0 && /\s/.test(text[index - 1] ?? "")) index--;

  while (remaining > 0 && index > 0) {
    while (index > 0 && !/\s/.test(text[index - 1] ?? "")) index--;
    remaining--;
    if (remaining > 0) {
      while (index > 0 && /\s/.test(text[index - 1] ?? "")) index--;
    }
  }

  return text.slice(0, index) + suggestion.text + " ";
}
