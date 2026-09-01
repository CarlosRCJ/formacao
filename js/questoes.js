const quizData = [
  {
    "id": 1,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "Qual expressão em inglês descreve a ação de 'levantar-se' da cama pela manhã?",
    "opcoes": [
      "Wake up",
      "Brush my teeth",
      "Get up",
      "Go to bed"
    ],
    "correta": 2
  },
  {
    "id": 2,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "Complete a frase de rotina diária: 'I __________ after breakfast, lunch, and dinner.'",
    "opcoes": [
      "go to school",
      "brush my teeth",
      "wake up",
      "have dinner"
    ],
    "correta": 1
  },
  {
    "id": 3,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "O que significa o verbo de rotina 'take a shower' em português?",
    "opcoes": [
      "Tomar café da manhã",
      "Tomar um banho",
      "Fazer a lição de casa",
      "Escovar o cabelo"
    ],
    "correta": 1
  },
  {
    "id": 4,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "Complete a lacuna com a ação correta: 'I _________ at 6:30 in the morning because I study.'",
    "opcoes": [
      "go to bed",
      "watch TV",
      "have dinner",
      "wake up"
    ],
    "correta": 3
  },
  {
    "id": 5,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "Qual das seguintes alternativas representa a refeição que fazemos logo pela manhã?",
    "opcoes": [
      "Have breakfast",
      "Have lunch",
      "Have dinner",
      "Have a snack"
    ],
    "correta": 0
  },
  {
    "id": 6,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "Complete a frase: 'At 12:30 p.m., I usually __________ with my school friends.'",
    "opcoes": [
      "get dressed",
      "have lunch",
      "wake up",
      "go to bed"
    ],
    "correta": 1
  },
  {
    "id": 7,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "Qual das opções representa a ação de se vestir em inglês?",
    "opcoes": [
      "Brush my hair",
      "Go home",
      "Get dressed",
      "Do my homework"
    ],
    "correta": 2
  },
  {
    "id": 8,
    "topico": "Aula 1 - Vocabulário de Rotina",
    "pergunta": "Assinale a opção que apresenta a tradução correta para a frase: 'I go to bed at 10 p.m.'",
    "opcoes": [
      "Eu vou para a escola às 10h.",
      "Eu vou dormir às 10h da noite.",
      "Eu tomo banho às 10h da noite.",
      "Eu janto às 10h."
    ],
    "correta": 1
  },
  {
    "id": 9,
    "topico": "Aula 2 - Expressões de Horas",
    "pergunta": "Qual preposição usamos em inglês antes de horários exatos na rotina (ex: 7:00)?",
    "opcoes": [
      "in the",
      "at",
      "on",
      "under"
    ],
    "correta": 1
  },
  {
    "id": 10,
    "topico": "Aula 2 - Períodos do Dia",
    "pergunta": "Complete a lacuna com a preposição correta: 'I watch TV __________ the evening.'",
    "opcoes": [
      "at",
      "on",
      "in the",
      "of"
    ],
    "correta": 2
  },
  {
    "id": 11,
    "topico": "Aula 2 - Expressões de Horas",
    "pergunta": "A expressão 'o'clock' é utilizada em qual das seguintes situações?",
    "opcoes": [
      "Para falar sobre horas exatas (sem os minutos).",
      "Para falar sobre o período da tarde.",
      "Para indicar o meio-dia.",
      "Para descrever minutos quebrados."
    ],
    "correta": 0
  },
  {
    "id": 12,
    "topico": "Aula 2 - Expressões de Horas",
    "pergunta": "Complete a frase: 'I go to school at 8 __________.'",
    "opcoes": [
      "midnight",
      "o'clock",
      "noon",
      "in"
    ],
    "correta": 1
  },
  {
    "id": 13,
    "topico": "Aula 2 - Expressões de Horas",
    "pergunta": "O termo 'a.m.' é usado para indicar qual intervalo de tempo?",
    "opcoes": [
      "Do meio-dia até a meia-noite.",
      "Da meia-noite até às 11:59 da manhã.",
      "Somente à noite, a partir das 18h.",
      "Exclusivamente aos finais de semana."
    ],
    "correta": 1
  },
  {
    "id": 14,
    "topico": "Aula 2 - Períodos do Dia",
    "pergunta": "A que período ou horário equivale a palavra 'noon' em inglês?",
    "opcoes": [
      "Meia-noite",
      "De manhã cedo",
      "Meio-dia (12:00)",
      "Final da tarde"
    ],
    "correta": 2
  },
  {
    "id": 15,
    "topico": "Aula 2 - Expressões de Horas",
    "pergunta": "Complete a frase indicando o horário correto: 'I sleep at 10 __________ (da noite).'",
    "opcoes": [
      "a.m.",
      "o'clock morning",
      "p.m.",
      "noon"
    ],
    "correta": 2
  },
  {
    "id": 16,
    "topico": "Aula 2 - Coesão de Rotina",
    "pergunta": "Qual das seguintes alternativas está escrita corretamente em inglês?",
    "opcoes": [
      "I have lunch in the afternoon.",
      "I have breakfast at night.",
      "I go to school at midnight.",
      "I go to bed in the morning."
    ],
    "correta": 0
  },
  {
    "id": 17,
    "topico": "Aula 3 - Advérbios de Frequência",
    "pergunta": "Qual o significado do advérbio de frequência 'always' em português?",
    "opcoes": [
      "Nunca",
      "Às vezes",
      "Sempre",
      "Geralmente"
    ],
    "correta": 2
  },
  {
    "id": 18,
    "topico": "Aula 3 - Advérbios de Frequência",
    "pergunta": "Se você realiza uma ação 0% das vezes, qual advérbio de frequência deve usar?",
    "opcoes": [
      "usually",
      "always",
      "sometimes",
      "never"
    ],
    "correta": 3
  },
  {
    "id": 19,
    "topico": "Aula 3 - Advérbios de Frequência",
    "pergunta": "O que significa a expressão de frequência 'hardly ever'?",
    "opcoes": [
      "Quase nunca",
      "Quase sempre",
      "Muitas vezes",
      "Diariamente"
    ],
    "correta": 0
  },
  {
    "id": 20,
    "topico": "Aula 3 - Posição do Advérbio",
    "pergunta": "Onde os advérbios de frequência geralmente devem ser posicionados na frase?",
    "opcoes": [
      "No final da frase, após o ponto final.",
      "Entre o sujeito e o verbo principal.",
      "Sempre no início de todas as frases.",
      "Após a marcação de horário."
    ],
    "correta": 1
  },
  {
    "id": 21,
    "topico": "Aula 3 - Advérbios de Frequência",
    "pergunta": "Complete a frase de forma correta: 'I take a shower every day. I __________ take a shower.'",
    "opcoes": [
      "never",
      "sometimes",
      "hardly ever",
      "always"
    ],
    "correta": 3
  },
  {
    "id": 22,
    "topico": "Aula 3 - Posição do Advérbio",
    "pergunta": "Qual das frases abaixo apresenta a posição correta do advérbio 'usually'?",
    "opcoes": [
      "I wake up usually early.",
      "I usually wake up early.",
      "Usually I wake up early.",
      "I wake up early usually."
    ],
    "correta": 1
  },
  {
    "id": 23,
    "topico": "Aula 3 - Advérbios de Frequência",
    "pergunta": "Complete com o advérbio correto: 'I don't like coffee. I __________ drink coffee.'",
    "opcoes": [
      "always",
      "usually",
      "never",
      "sometimes"
    ],
    "correta": 2
  },
  {
    "id": 24,
    "topico": "Aula 3 - Advérbios de Frequência",
    "pergunta": "Qual o advérbio correspondente a 'às vezes' ou 'ocasionais' em inglês?",
    "opcoes": [
      "always",
      "usually",
      "sometimes",
      "never"
    ],
    "correta": 2
  },
  {
    "id": 25,
    "topico": "Aula 3 - Advérbios de Frequência",
    "pergunta": "Se Mike realiza a tarefa de casa na maioria dos dias (80%), qual advérbio descreve isso?",
    "opcoes": [
      "never",
      "usually",
      "hardly ever",
      "always"
    ],
    "correta": 1
  },
  {
    "id": 26,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "Como se diz 'uma vez por semana' em inglês?",
    "opcoes": [
      "One times a week",
      "Once a week",
      "Twice a week",
      "Once a day"
    ],
    "correta": 1
  },
  {
    "id": 27,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "Como se escreve 'duas vezes' em inglês usando a palavra específica ensinada em sala?",
    "opcoes": [
      "Two times",
      "Twice",
      "Once",
      "Double"
    ],
    "correta": 1
  },
  {
    "id": 28,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "A partir de três vezes, qual estrutura usamos para descrever a frequência?",
    "opcoes": [
      "Three once",
      "Three twice",
      "Three times",
      "Triple times"
    ],
    "correta": 2
  },
  {
    "id": 29,
    "topico": "Aula 4 - Estrutura de Perguntas",
    "pergunta": "Qual pergunta fazemos em inglês para descobrir a frequência com que alguém faz algo?",
    "opcoes": [
      "What time do you...?",
      "Where do you...?",
      "How often do you...?",
      "Who do you...?"
    ],
    "correta": 2
  },
  {
    "id": 30,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "Complete a frase: 'We go to school on Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays. We go to school __________ a week.'",
    "opcoes": [
      "twice",
      "three times",
      "five times",
      "once"
    ],
    "correta": 2
  },
  {
    "id": 31,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "O que significa a expressão de frequência 'once a day'?",
    "opcoes": [
      "Uma vez por semana",
      "Uma vez por dia",
      "Duas vezes por ano",
      "Uma vez por mês"
    ],
    "correta": 1
  },
  {
    "id": 32,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "Qual o significado da frase 'I study English twice a week'?",
    "opcoes": [
      "Eu estudo inglês uma vez por semana.",
      "Eu estudo inglês duas vezes por semana.",
      "Eu estudo inglês todos os dias.",
      "Eu não estudo inglês."
    ],
    "correta": 1
  },
  {
    "id": 33,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "Complete de acordo com a lógica temporal: 'Renata has guitar lessons only on Fridays. She has guitar lessons ___________ a week.'",
    "opcoes": [
      "twice",
      "three times",
      "once",
      "never"
    ],
    "correta": 2
  },
  {
    "id": 34,
    "topico": "Aula 4 - Frequência Definida",
    "pergunta": "Como podemos dizer 'quatro vezes por ano' em inglês?",
    "opcoes": [
      "Four times a year",
      "Four once year",
      "Twice a year",
      "Once a year"
    ],
    "correta": 0
  },
  {
    "id": 35,
    "topico": "Aula 5 - Forma Negativa",
    "pergunta": "Qual palavra auxiliar usamos para fazer frases negativas sobre nossa própria rotina (com o pronome 'I')?",
    "opcoes": [
      "doesn't",
      "don't",
      "not",
      "no"
    ],
    "correta": 1
  },
  {
    "id": 36,
    "topico": "Aula 5 - Forma Negativa",
    "pergunta": "Onde a palavra 'don't' deve ser posicionada em uma frase negativa no Simple Present?",
    "opcoes": [
      "No final da frase, após o complemento.",
      "Antes do verbo principal.",
      "Antes do pronome 'I'.",
      "Entre as horas e o período do dia."
    ],
    "correta": 1
  },
  {
    "id": 37,
    "topico": "Aula 5 - Forma Negativa",
    "pergunta": "Transforme a frase afirmativa 'I study on Sundays' em negativa:",
    "opcoes": [
      "I don't study on Sundays.",
      "I doesn't study on Sundays.",
      "I study not on Sundays.",
      "I no study on Sundays."
    ],
    "correta": 0
  },
  {
    "id": 38,
    "topico": "Aula 5 - Organização de Sentenças",
    "pergunta": "Qual é a ordem correta para organizar as palavras: 'to school / go / don't / I / on Sundays'?",
    "opcoes": [
      "I go to school don't on Sundays.",
      "I don't go to school on Sundays.",
      "On Sundays I go don't to school.",
      "Don't I go to school on Sundays."
    ],
    "correta": 1
  },
  {
    "id": 39,
    "topico": "Aula 5 - Forma Negativa",
    "pergunta": "Complete a frase negativa de forma gramaticalmente correta: 'I ___________ use my cellphone in class.'",
    "opcoes": [
      "not",
      "doesn't",
      "don't",
      "never don't"
    ],
    "correta": 2
  },
  {
    "id": 40,
    "topico": "Aula 5 - Organização de Sentenças",
    "pergunta": "Organize a frase: 'pizza / morning / the / I / don't / in / eat'",
    "opcoes": [
      "I in the morning don't eat pizza.",
      "I don't eat pizza in the morning.",
      "Pizza don't I eat in the morning.",
      "Don't I eat pizza in the morning."
    ],
    "correta": 1
  },
  {
    "id": 41,
    "topico": "Aula 5 - Tradução de Negativas",
    "pergunta": "Qual o significado em português de 'I don't go to bed late'?",
    "opcoes": [
      "Eu vou dormir cedo.",
      "Eu não vou dormir tarde.",
      "Eu não tomo banho tarde.",
      "Eu não acordo tarde."
    ],
    "correta": 1
  },
  {
    "id": 42,
    "topico": "Aula 5 - Forma Negativa",
    "pergunta": "Qual das seguintes frases é uma frase negativa gramaticalmente correta?",
    "opcoes": [
      "I not have breakfast at school.",
      "I don't have breakfast at school.",
      "I doesn't have breakfast at school.",
      "I no have breakfast at school."
    ],
    "correta": 1
  },
  {
    "id": 43,
    "topico": "Aula 5 - Coesão de Rotina",
    "pergunta": "Se Sofia vai para a escola de ônibus, ela pode dizer: 'I __________ go to school by car.'",
    "opcoes": [
      "doesn't",
      "don't",
      "always",
      "sometimes"
    ],
    "correta": 1
  },
  {
    "id": 44,
    "topico": "Aula 6 - Conectores de Sequência",
    "pergunta": "Qual palavra de sequência usamos para introduzir a primeiríssima ação de nossa rotina matinal?",
    "opcoes": [
      "Then",
      "First",
      "Finally",
      "After that"
    ],
    "correta": 1
  },
  {
    "id": 45,
    "topico": "Aula 6 - Conectores de Sequência",
    "pergunta": "O que significa o conector de sequência 'then' em português?",
    "opcoes": [
      "Primeiro",
      "Finalmente",
      "Então / Depois",
      "Nunca"
    ],
    "correta": 2
  },
  {
    "id": 46,
    "topico": "Aula 6 - Conectores de Sequência",
    "pergunta": "Qual conector de sequência traduz melhor a ideia de 'depois disso'?",
    "opcoes": [
      "First",
      "Finally",
      "After that",
      "Next"
    ],
    "correta": 2
  },
  {
    "id": 47,
    "topico": "Aula 6 - Conectores de Sequência",
    "pergunta": "Qual palavra de sequência deve ser obrigatoriamente usada antes da última ação que encerra um parágrafo de rotina?",
    "opcoes": [
      "First",
      "Next",
      "Finally",
      "Then"
    ],
    "correta": 2
  },
  {
    "id": 48,
    "topico": "Aula 6 - Conectores de Sequência",
    "pergunta": "Complete o parágrafo lógico: '___________ I wake up. Then I wash my face.'",
    "opcoes": [
      "Finally",
      "First",
      "Next",
      "After that"
    ],
    "correta": 1
  },
  {
    "id": 49,
    "topico": "Aula 6 - Conectores de Sequência",
    "pergunta": "Complete a sequência de rotina: 'I have breakfast, and ____________ I brush my teeth and go to school.' (Última ação da manhã)",
    "opcoes": [
      "first",
      "finally",
      "then",
      "after that"
    ],
    "correta": 1
  },
  {
    "id": 50,
    "topico": "Aula 6 - Conectores de Sequência",
    "pergunta": "O conector 'next' é sinônimo de qual outro conector de sequência?",
    "opcoes": [
      "First",
      "Finally",
      "Then",
      "Never"
    ],
    "correta": 2
  },
  {
    "id": 51,
    "topico": "Aula 6 - Vocabulário de Rotina",
    "pergunta": "Na frase: 'I wash my face and brush my teeth. Next, I ___________ my cat.' (Sophia's routine)",
    "opcoes": [
      "wake up",
      "feed",
      "have dinner",
      "sleep"
    ],
    "correta": 1
  },
  {
    "id": 52,
    "topico": "Aula 6 - Compreensão de Texto",
    "pergunta": "No texto de Lucas, o que ele faz logo depois de sair de casa ('leave home')?",
    "opcoes": [
      "He sleeps.",
      "He goes to school by bus.",
      "He takes a shower.",
      "He has breakfast."
    ],
    "correta": 1
  },
  {
    "id": 53,
    "topico": "Aula 7 - Terceira Pessoa",
    "pergunta": "Quando falamos sobre a rotina de outra pessoa no singular (he, she, it), o que geralmente acontece com o verbo principal na afirmativa?",
    "opcoes": [
      "Ele permanece igual à forma original.",
      "Ele recebe o acréscimo de '-s', '-es' ou '-ies'.",
      "Ele é precedido de 'don't'.",
      "Ele ganha a terminação '-ing'."
    ],
    "correta": 1
  },
  {
    "id": 54,
    "topico": "Aula 7 - Terceira Pessoa",
    "pergunta": "Quais pronomes em inglês pertencem à terceira pessoa do singular?",
    "opcoes": [
      "I, You, We",
      "He, She, It",
      "They, We, You",
      "I, He, They"
    ],
    "correta": 1
  },
  {
    "id": 55,
    "topico": "Aula 7 - Conjugação Verbal",
    "pergunta": "Complete a frase corretamente: 'He usually ___________ (play) video games in the evening.'",
    "opcoes": [
      "play",
      "plays",
      "playes",
      "playing"
    ],
    "correta": 1
  },
  {
    "id": 56,
    "topico": "Aula 7 - Conjugação Verbal",
    "pergunta": "Se dissermos 'I wake up early', qual a forma correta ao reescrever usando o sujeito 'He'?",
    "opcoes": [
      "He wake up early.",
      "He wakes up early.",
      "He waking up early.",
      "He wakees up early."
    ],
    "correta": 1
  },
  {
    "id": 57,
    "topico": "Aula 7 - Conjugação Verbal",
    "pergunta": "Complete com a forma verbal adequada: 'Lucas ___________ (arrive) at school by 7:30 a.m.'",
    "opcoes": [
      "arrive",
      "arrives",
      "arriveses",
      "arriving"
    ],
    "correta": 1
  },
  {
    "id": 58,
    "topico": "Aula 7 - Conjugação Verbal",
    "pergunta": "Qual das seguintes frases está gramaticalmente correta em inglês?",
    "opcoes": [
      "Lucas eat lunch at 12:30.",
      "Lucas eats lunch at 12:30.",
      "Lucas eating lunch at 12:30.",
      "Lucas eates lunch at 12:30."
    ],
    "correta": 1
  },
  {
    "id": 59,
    "topico": "Aula 7 - Conjugação Verbal",
    "pergunta": "Complete a frase sobre o animal de estimação: 'My dog __________ up early on weekends.'",
    "opcoes": [
      "wake",
      "wakes",
      "waking",
      "wakees"
    ],
    "correta": 1
  },
  {
    "id": 60,
    "topico": "Aula 7 - Conjugação Verbal",
    "pergunta": "Complete com a conjugação correta: 'She ___________ (listen) to music in her free time.'",
    "opcoes": [
      "listen",
      "listens",
      "listenes",
      "listening"
    ],
    "correta": 1
  },
  {
    "id": 61,
    "topico": "Aula 7 - Conjugação Verbal",
    "pergunta": "Ao reescrever 'They play soccer' usando o nome 'Ricardo' como sujeito, a frase correta é:",
    "opcoes": [
      "Ricardo play soccer.",
      "Ricardo plays soccer.",
      "Ricardo playes soccer.",
      "Ricardo playing soccer."
    ],
    "correta": 1
  },
  {
    "id": 62,
    "topico": "Aula 8 - Verbos Irregulares",
    "pergunta": "Como fica a conjugação do verbo irregular 'have' para a terceira pessoa do singular (he, she, it)?",
    "opcoes": [
      "haves",
      "haveses",
      "has",
      "hases"
    ],
    "correta": 2
  },
  {
    "id": 63,
    "topico": "Aula 8 - Regras de Escrita",
    "pergunta": "Quando um verbo termina com as letras '-s, -sh, -ch, -x, -z, -o', qual terminação ele recebe na terceira pessoa do singular?",
    "opcoes": [
      "-s",
      "-es",
      "-ies",
      "-ves"
    ],
    "correta": 1
  },
  {
    "id": 64,
    "topico": "Aula 8 - Regras de Escrita",
    "pergunta": "Quando um verbo termina em 'consoante + y' (ex: study), como fica sua conjugação na terceira pessoa do singular?",
    "opcoes": [
      "Retira-se o '-y' e acrescenta-se '-ies' (studies).",
      "Apenas acrescenta-se '-s' (studys).",
      "Retira-se o '-y' e acrescenta-se '-es' (studies).",
      "O verbo não muda."
    ],
    "correta": 0
  },
  {
    "id": 65,
    "topico": "Aula 8 - Conjugação Verbal",
    "pergunta": "Complete a frase de forma correta: 'He always ___________ (wash) the dishes after breakfast.'",
    "opcoes": [
      "wash",
      "washs",
      "washes",
      "washies"
    ],
    "correta": 2
  },
  {
    "id": 66,
    "topico": "Aula 8 - Conjugação Verbal",
    "pergunta": "Complete a lacuna: 'Maria ___________ (study) English at school on Tuesdays.'",
    "opcoes": [
      "study",
      "studys",
      "studies",
      "studyes"
    ],
    "correta": 2
  },
  {
    "id": 67,
    "topico": "Aula 8 - Vocabulário Doméstico",
    "pergunta": "Qual o significado da expressão de rotina doméstica 'make the bed'?",
    "opcoes": [
      "Lavar a louça",
      "Arrumar a cama",
      "Limpar o chão",
      "Fazer o jantar"
    ],
    "correta": 1
  },
  {
    "id": 68,
    "topico": "Aula 8 - Conjugação Verbal",
    "pergunta": "Complete com o verbo na forma correta: 'My father ___________ (go) to work by car.'",
    "opcoes": [
      "go",
      "goes",
      "gos",
      "going"
    ],
    "correta": 1
  },
  {
    "id": 69,
    "topico": "Aula 8 - Vocabulário de Rotina",
    "pergunta": "Qual das opções representa a ação de 'tirar um cochilo' em inglês?",
    "opcoes": [
      "Take a nap",
      "Wash the dishes",
      "Make the bed",
      "Put on makeup"
    ],
    "correta": 0
  },
  {
    "id": 70,
    "topico": "Aula 8 - Conjugação Verbal",
    "pergunta": "Complete a frase sobre a rotina da Emma: 'Every afternoon, she ___________ (have) a snack when she gets home.'",
    "opcoes": [
      "have",
      "haves",
      "has",
      "having"
    ],
    "correta": 2
  },
  {
    "id": 71,
    "topico": "Aula 9 - Vocabulário Doméstico",
    "pergunta": "O que significa a tarefa doméstica de rotina 'do the laundry' em português?",
    "opcoes": [
      "Fazer compras no supermercado",
      "Lavar a roupa",
      "Arrumar a casa",
      "Cozinhar o jantar"
    ],
    "correta": 1
  },
  {
    "id": 72,
    "topico": "Aula 9 - Vocabulário de Rotina",
    "pergunta": "Qual das seguintes expressões traduz a ação de 'fazer compras de supermercado'?",
    "opcoes": [
      "Tidy up the house",
      "Check notifications",
      "Go grocery shopping",
      "Do the laundry"
    ],
    "correta": 2
  },
  {
    "id": 73,
    "topico": "Aula 9 - Conjugação Verbal",
    "pergunta": "Complete a frase usando a terceira pessoa do singular: 'My mom ___________ (drive) to work every morning.'",
    "opcoes": [
      "drive",
      "drives",
      "drivees",
      "driving"
    ],
    "correta": 1
  },
  {
    "id": 74,
    "topico": "Aula 9 - Conjugação Verbal",
    "pergunta": "Complete a lacuna: 'George ___________ (tidy) up his bedroom on Saturdays.'",
    "opcoes": [
      "tidy",
      "tidys",
      "tidies",
      "tidyes"
    ],
    "correta": 2
  },
  {
    "id": 75,
    "topico": "Aula 9 - Conjugação Verbal",
    "pergunta": "Complete a frase de rotina moderna: 'First, my dad wakes up and ___________ (check) his notifications on his phone.'",
    "opcoes": [
      "check",
      "checks",
      "checkes",
      "checking"
    ],
    "correta": 1
  },
  {
    "id": 76,
    "topico": "Aula 9 - Tradução de Rotina",
    "pergunta": "Qual é a tradução da frase: 'George does the laundry on Wednesdays'?",
    "opcoes": [
      "George arruma a cama nas quartas-feiras.",
      "George lava a roupa nas quartas-feiras.",
      "George janta fora nas quartas-feiras.",
      "George vai à escola nas quartas-feiras."
    ],
    "correta": 1
  },
  {
    "id": 77,
    "topico": "Aula 9 - Conjugação Verbal",
    "pergunta": "Complete o espaço de forma correta: 'Julia ___________ (come) home for lunch at noon.'",
    "opcoes": [
      "come",
      "comes",
      "comee",
      "coming"
    ],
    "correta": 1
  },
  {
    "id": 78,
    "topico": "Aula 9 - Conjugação Verbal",
    "pergunta": "Complete com o verbo correspondente: 'My brother __________ (help) my parents with dinner.'",
    "opcoes": [
      "help",
      "helps",
      "helpes",
      "helping"
    ],
    "correta": 1
  },
  {
    "id": 79,
    "topico": "Aula 10 - Forma Negativa 3ª Pessoa",
    "pergunta": "Qual verbo auxiliar negativo usamos para descrever o que uma terceira pessoa do singular (he, she, it) NÃO faz na rotina?",
    "opcoes": [
      "don't",
      "no",
      "doesn't",
      "not"
    ],
    "correta": 2
  },
  {
    "id": 80,
    "topico": "Aula 10 - Regras Gramaticais",
    "pergunta": "O que acontece com o verbo principal quando usamos o auxiliar negativo 'doesn't'?",
    "opcoes": [
      "Ele permanece com a terminação '-s', '-es' ou '-ies'.",
      "Ele volta para a sua forma original (sem '-s', '-es' ou '-ies').",
      "Ele é substituído por 'not'.",
      "Ele ganha a terminação '-ing'."
    ],
    "correta": 1
  },
  {
    "id": 81,
    "topico": "Aula 10 - Forma Negativa 3ª Pessoa",
    "pergunta": "Qual das seguintes frases negativas está gramaticalmente correta em inglês?",
    "opcoes": [
      "She doesn't studies in the morning.",
      "She doesn't study in the morning.",
      "She don't study in the morning.",
      "She doesn't has classes."
    ],
    "correta": 1
  },
  {
    "id": 82,
    "topico": "Aula 10 - Forma Negativa 3ª Pessoa",
    "pergunta": "Complete a frase negativa: 'Renata ___________ (not ‒ have) breakfast at school.'",
    "opcoes": [
      "don't have",
      "doesn't has",
      "doesn't have",
      "no have"
    ],
    "correta": 2
  },
  {
    "id": 83,
    "topico": "Aula 10 - Forma Negativa 3ª Pessoa",
    "pergunta": "Complete com a forma negativa correta: 'My brother ___________ (not ‒ work) in the morning.'",
    "opcoes": [
      "don't work",
      "doesn't works",
      "doesn't work",
      "no work"
    ],
    "correta": 2
  },
  {
    "id": 84,
    "topico": "Aula 10 - Forma Negativa 3ª Pessoa",
    "pergunta": "Selecione a alternativa correta na forma negativa: 'Vinicius ___________ (not ‒ practice) sports at school.'",
    "opcoes": [
      "doesn't practice",
      "don't practice",
      "doesn't practices",
      "not practice"
    ],
    "correta": 0
  },
  {
    "id": 85,
    "topico": "Aula 10 - Forma Negativa 3ª Pessoa",
    "pergunta": "Complete de forma adequada: 'She ___________ to school on Sundays.' (Ela não vai...)",
    "opcoes": [
      "don't go",
      "doesn't goes",
      "doesn't go",
      "doesn't has"
    ],
    "correta": 2
  },
  {
    "id": 86,
    "topico": "Aula 10 - Regras Gramaticais",
    "pergunta": "Qual é o erro gramatical presente na frase 'He doesn't likes sports'?",
    "opcoes": [
      "O uso do pronome 'He'.",
      "O verbo 'likes' deveria estar na forma base 'like' porque 'doesn't' já está na frase.",
      "A palavra 'sports' deveria estar no singular.",
      "O auxiliar 'doesn't' deveria ser 'don't'."
    ],
    "correta": 1
  },
  {
    "id": 87,
    "topico": "Aula 11 - Forma Interrogativa",
    "pergunta": "Qual verbo auxiliar usamos para fazer perguntas no Simple Present para os pronomes 'I, you, we, they'?",
    "opcoes": [
      "Does",
      "Do",
      "Is",
      "Are"
    ],
    "correta": 1
  },
  {
    "id": 88,
    "topico": "Aula 11 - Forma Interrogativa",
    "pergunta": "Qual verbo auxiliar usamos para fazer perguntas na terceira pessoa do singular (he, she, it)?",
    "opcoes": [
      "Do",
      "Does",
      "Is",
      "Has"
    ],
    "correta": 1
  },
  {
    "id": 89,
    "topico": "Aula 11 - Forma Interrogativa",
    "pergunta": "Como fica a frase 'You wake up at 7 o'clock' na forma interrogativa?",
    "opcoes": [
      "Does you wake up at 7 o'clock?",
      "Do you wake up at 7 o'clock?",
      "Do you wakes up at 7 o'clock?",
      "Wake up you at 7 o'clock?"
    ],
    "correta": 1
  },
  {
    "id": 90,
    "topico": "Aula 11 - Forma Interrogativa",
    "pergunta": "Como fica a frase 'Joaquim goes to your school' na forma interrogativa?",
    "opcoes": [
      "Do Joaquim go to your school?",
      "Does Joaquim goes to your school?",
      "Does Joaquim go to your school?",
      "Goes Joaquim to your school?"
    ],
    "correta": 2
  },
  {
    "id": 91,
    "topico": "Aula 11 - Forma Interrogativa",
    "pergunta": "Complete a pergunta sobre hábitos: '__________ Felipe make his bed before going to school?'",
    "opcoes": [
      "Do",
      "Does",
      "Is",
      "Has"
    ],
    "correta": 1
  },
  {
    "id": 92,
    "topico": "Aula 11 - Forma Interrogativa",
    "pergunta": "Complete a lacuna: '__________ your parents practice any sports on weekends?'",
    "opcoes": [
      "Do",
      "Does",
      "Are",
      "Have"
    ],
    "correta": 0
  },
  {
    "id": 93,
    "topico": "Aula 11 - Regras Gramaticais",
    "pergunta": "O que acontece com o verbo principal em perguntas que usam o auxiliar 'Does'?",
    "opcoes": [
      "Ele permanece com a letra '-s' final.",
      "Ele volta para a forma original (base form) sem o '-s'.",
      "Ele ganha uma terminação '-ed'.",
      "Ele muda para o passado."
    ],
    "correta": 1
  },
  {
    "id": 94,
    "topico": "Aula 12 - Question Words",
    "pergunta": "Qual é a question word em inglês usada para perguntar sobre 'onde' (lugares)?",
    "opcoes": [
      "What",
      "Where",
      "When",
      "Who"
    ],
    "correta": 1
  },
  {
    "id": 95,
    "topico": "Aula 12 - Question Words",
    "pergunta": "Qual question word usamos especificamente para perguntar por horários exatos (que horas)?",
    "opcoes": [
      "When",
      "What time",
      "How",
      "Who"
    ],
    "correta": 1
  },
  {
    "id": 96,
    "topico": "Aula 12 - Question Words",
    "pergunta": "A palavra interrogativa 'Who' em inglês serve para obter informações sobre:",
    "opcoes": [
      "Coisas e objetos",
      "Lugares e destinos",
      "Pessoas",
      "Frequência temporal"
    ],
    "correta": 2
  },
  {
    "id": 97,
    "topico": "Aula 12 - Question Words",
    "pergunta": "Complete a pergunta com base na resposta de lugar: 'A: ___________ do you have breakfast? B: At home.'",
    "opcoes": [
      "What",
      "When",
      "Where",
      "Who"
    ],
    "correta": 2
  },
  {
    "id": 98,
    "topico": "Aula 12 - Question Words",
    "pergunta": "Complete a pergunta com base na resposta de companhia: 'A: ___________ do you go to school with? B: With my sister.'",
    "opcoes": [
      "When",
      "Who",
      "What time",
      "How"
    ],
    "correta": 1
  },
  {
    "id": 99,
    "topico": "Aula 12 - Question Words",
    "pergunta": "Complete de forma correta: 'A: Where __________ she practice handball? B: She practices at the gym.'",
    "opcoes": [
      "do",
      "does",
      "is",
      "has"
    ],
    "correta": 1
  },
  {
    "id": 100,
    "topico": "Aula 12 - Organização de Sentenças",
    "pergunta": "Como fica a ordem correta das palavras para formar a pergunta: 'you / go / to school / Where / do / ?'",
    "opcoes": [
      "Where do you go to school?",
      "Where you do go to school?",
      "Do you go to school Where?",
      "Where go do you to school?"
    ],
    "correta": 0
  }
];