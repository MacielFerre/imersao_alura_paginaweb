let dados = [
    {
        titulo: "Banco Imobiliário",
        descricao: "O Banco Imobiliário é um clássico jogo de tabuleiro que simula o mercado imobiliário. O objetivo é se tornar o jogador mais rico, comprando, vendendo e alugando propriedades. Ao jogar o dado e mover sua peça pelo tabuleiro, os jogadores podem comprar terrenos, construir casas e hotéis, além de lidar com imprevistos e sorte através de cartas. A estratégia, a negociação e um pouco de sorte são essenciais para vencer neste jogo que diverte e ensina noções básicas de economia.",
        link: "https://pt.wikipedia.org/wiki/Banco_Imobili%C3%A1rio",
        tags: "imobiliário negócios dinheiro educacional divertido estratégico"
    },
    {
        titulo: "War",
        descricao: "War é um clássico jogo de estratégia militar que exige planejamento e um pouco de sorte. O objetivo principal é conquistar o maior número de territórios possíveis, eliminando os exércitos adversários. Os jogadores iniciam com territórios aleatórios e, através de batalhas, tentam expandir seus domínios. As batalhas são resolvidas por meio de cartas, onde o jogador com a carta de maior valor conquista o território. O jogo continua até que um único jogador domine todos os territórios, tornando-se o vencedor.",
        link: "https://pt.wikipedia.org/wiki/War",
        tags: "guerra estratégico militar tático dados competitivo"
    },
    {
        titulo: "Xadrez",
        descricao: "O xadrez é um jogo de estratégia milenar para dois jogadores. Disputado em um tabuleiro quadriculado de 64 casas, cada jogador controla 16 peças distintas: rei, rainha, torres, bispos, cavalos e peões. O objetivo é dar xeque-mate ao rei adversário, ou seja, colocar o rei em uma posição em que não possa se mover sem ser capturado. A partida envolve uma combinação de planejamento, tática e cálculo, exigindo dos jogadores grande concentração e raciocínio lógico. O xadrez é considerado um esporte da mente e oferece desafios para jogadores de todas as idades e níveis de habilidade.",
        link: "https://pt.wikipedia.org/wiki/Xadrez",
        tags: "intelectual estratégico clássico tático competitivo"
    
    },
    {
        titulo: "Ludo",
        descricao: "O Ludo é um clássico jogo de tabuleiro que combina sorte e estratégia. O objetivo é ser o primeiro jogador a mover todos os seus quatro peões ao redor do tabuleiro e levá-los para a casa final. Cada jogador inicia com seus peões na base e os move de acordo com os números sorteados em um dado. A sorte entra em jogo ao tirar um número específico para colocar um peão em jogo ou avançar mais casas. No entanto, a estratégia também é fundamental, pois os jogadores podem capturar os peões adversários ao ocupar a mesma casa. O Ludo é um jogo simples e divertido, perfeito para todas as idades.",
        link: "https://pt.wikipedia.org/wiki/Ludo#:~:text=Ludo%20(%22eu%20jogo%22%20em,para%20dois%20a%20quatro%20jogadores.",
        tags: "simples divertido sorte estratégico dados competitivo clássico "
    
    },
    {
        titulo: "Damas",
        descricao: "O jogo de damas é um clássico da estratégia que exige concentração e planejamento. Dois jogadores se enfrentam em um tabuleiro quadriculado, movendo suas peças nas diagonais. O objetivo é capturar todas as peças do adversário ou bloqueá-las de modo que não possam se mover. As peças podem ser promovidas a damas quando alcançam a última linha do tabuleiro, ganhando a habilidade de mover-se várias casas nas diagonais. A captura é obrigatória quando possível, e o jogo termina quando um dos jogadores não tem mais peças em jogo ou não pode realizar nenhum movimento.",
        link: "https://pt.wikipedia.org/wiki/Ludo#:~:text=Ludo%20(%22eu%20jogo%22%20em,para%20dois%20a%20quatro%20jogadores.",
        tags: "tático estratégico simples clássico "
    
    },
    {
        titulo: "Dominó",
        descricao: "O dominó é um jogo de tabuleiro que utiliza peças retangulares divididas em duas partes, cada uma com um número de pontos de 0 a 6 (ou mais, dependendo da versão). O objetivo do jogo varia, mas geralmente consiste em ser o primeiro jogador a se livrar de todas as suas peças ou em obter a maior pontuação ao final da partida. As peças são encaixadas formando uma linha contínua, combinando os números iguais. A estratégia envolve a análise das peças na mão e a tentativa de bloquear os adversários, impedindo-os de jogar. O dominó é um jogo simples e divertido, que pode ser jogado por pessoas de todas as idades.",
        link: "https://pt.wikipedia.org/wiki/Domin%C3%B3#:~:text=Domin%C3%B3%20%C3%A9%20um%20jogo%20de,pe%C3%A7as%20que%20comp%C3%B5em%20este%20jogo.",
        tags: "simples divertido classico estratégico flexível"
    
    },
    {
        titulo: "Baralho",
        descricao: "O baralho é um conjunto de cartas utilizadas em uma infinidade de jogos, cada um com suas regras e objetivos específicos. Um baralho padrão possui 52 cartas, divididas em quatro naipes (paus, ouros, copas e espadas) e treze valores (ás, números de 2 a 10 e figuras: valete, dama e rei). A versatilidade do baralho permite jogos de estratégia, azar, habilidade e até mesmo jogos de cartas colecionáveis. A combinação das cartas nas mãos dos jogadores e as regras específicas de cada jogo criam uma infinidade de possibilidades e garantem diversão para todas as idades.",
        link: "https://pt.wikipedia.org/wiki/Baralho#:~:text=Trata%2Dse%20de%20jogos%20complexos,interac%C3%A7%C3%A3o%20com%20as%20outras%20cartas.",
        tags: "versátil divertido classico estratégico sorte azar carta"
    
    },
    {
        titulo: "RPG",
        descricao: "RPG (Role-Playing Game, ou Jogo de Interpretação de Papéis) é uma experiência colaborativa onde os jogadores assumem o papel de personagens em um mundo imaginário. Um mestre de jogo (MG) cria a história e o cenário, enquanto os jogadores interpretam seus personagens, tomando decisões que moldam a narrativa. Através de dados e regras, os jogadores realizam ações como combates, resolução de problemas e interações sociais. O RPG estimula a criatividade, a imaginação e o trabalho em equipe, permitindo que os jogadores vivam aventuras épicas e únicas.",
        link: "https://pt.wikipedia.org/wiki/Role-playing_game",
        tags: "versátil divertido colaborativo imaginativo narrativo desenvolvedor D&D dungeons dragons pathfinder "
    
    },
    {
        titulo: "Detetive",
        descricao: "Detetive é um clássico jogo de tabuleiro que coloca os jogadores no papel de detetives investigando um crime misterioso. O objetivo é descobrir quem cometeu o crime, com qual arma e em qual local. Cada jogador assume um papel com habilidades únicas e coleta pistas para desvendar o mistério. Ao longo do jogo, os jogadores fazem acusações, verificam informações e eliminam possibilidades até que alguém acerte a combinação correta e resolva o caso. O jogo combina dedução, estratégia e um pouco de sorte, proporcionando horas de diversão para quem gosta de desvendar mistérios.",
        link: "https://pt.wikipedia.org/wiki/Cluedo",
        tags: "investigação polícial dedução estratégico mistério divertido"
    
    },
    {
        titulo: "Jogo da Vida",
        descricao: "O Jogo da Vida é um clássico jogo de tabuleiro que simula as diferentes fases da vida de uma pessoa, desde a escolha da carreira até a aposentadoria. Os jogadores rodam uma roleta e avançam pelo tabuleiro, enfrentando diversas situações como casamentos, filhos, promoções e imprevistos. O objetivo do jogo é acumular a maior quantidade de dinheiro e bens ao longo da vida. A sorte e as decisões dos jogadores influenciam diretamente o resultado final, tornando cada partida única e divertida. O jogo é uma ótima opção para passar momentos em família e amigos, discutindo sobre escolhas de vida e aprendendo sobre finanças de forma lúdica.",
        link: "https://pt.wikipedia.org/wiki/Jogo_da_Vida_(jogo)#:~:text=desde%201992%20e%20o%20jogo,tabuleiro%20permaneceram%20praticamente%20as%20mesmas.",
        tags: "simulação vida sorte estratégico sorte divertido educacional"
    
    }
]



