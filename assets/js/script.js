var medalhasBrasil = {
    atletismo: "2021-08-03",
    badminton: "2016-08-11",
    boxe: "2021-08-08",
    canoagem: "2021-08-07",
    ciclismo: "1936-08-01",
    esgrima: "1936-08-01",
    futebol: "2021-08-07",
    ginastica: "2021-08-01",
    levantamentopeso: "1952-07-19",
    handebol: "1992-07-27",
    hipismo: "2004-08-11",
    judo: "2021-07-29",
    lutas: "2004-08-11",
    natacao: "2021-08-01",
    pentlatomod: "2012-09-09",
    remo: "1920-04-20",
    rugby: "2021-07-30",
    saltosorn: "1920-04-20",
    skate: "2021-08-05",
    surfe: "2021-07-27",
    taekwondo: "2016-08-29",
    tenis: "2021-07-31",
    tenismesa: "1988-09-17",
    tiro: "2016-08-06",
    tiroarco: "1980-07-19",
    triatlo: "2000-09-15",
    vela: "2021-08-03",
    volei: "2021-08-03",
    voleipraia: "2016-08-19",
    basquete: "2000-09-30"
  };

  var nomesAlternativos = {
    "natacao": "Natação",
    "voleipraia": "Vôlei de Praia",
    "volei": "Vôlei",
    "ginastica": "Ginástica",
    "pentlatomod": "Pentlato Moderno",
    "levantamentopeso": "Levantamento de Peso",
    "tenismesa": "Tênis de Mesa",
    "saltosorn": "Saltos Ornamentais",
    "tiroarco": "Tiro com Arcos",
    "tenis": "Tênis"
  };

  var olimpiadasModernasDeVerao = {
    "1896": "Atenas",
    "1900": "Paris",
    "1904": "St. Louis",
    "1908": "Londres",
    "1912": "Estocolmo",
    "1920": "Antuérpia",
    "1924": "Paris",
    "1928": "Amsterdã",
    "1932": "Los Angeles",
    "1936": "Berlim",
    "1948": "Londres",
    "1952": "Helsinque",
    "1956": "Melbourne",
    "1960": "Roma",
    "1964": "Tóquio",
    "1968": "Cidade do México",
    "1972": "Munique",
    "1976": "Montreal",
    "1980": "Moscou",
    "1984": "Los Angeles",
    "1988": "Seul",
    "1992": "Barcelona",
    "1996": "Atlanta",
    "2000": "Sydney",
    "2004": "Atenas",
    "2008": "Pequim",
    "2012": "Londres",
    "2016": "Rio de Janeiro",
    "2021": "Tóquio",
  }

  var contagemMedalhas = {
    atletismo: 19,
    badminton: 0,
    boxe: 8,
    canoagem: 4,
    ciclismo: 0,
    esgrima: 0,
    futebol: 9,
    ginastica: 6,
    levantamentopeso: 0,
    handebol: 0,
    hipismo: 3,
    judo: 24,
    lutas: 0,
    natacao: 17,
    pentlatomod: 1,
    remo: 0,
    rugby: 0,
    saltosorn: 0,
    skate: 3,
    surfe: 1,
    taekwondo: 2,
    tenis: 1,
    tenismesa: 0,
    tiro: 4,
    tiroarco: 0,
    triatlo: 0,
    vela: 19,
    volei: 11,
    voleipraia: 13,
    basquete: 5,
  };

function updateMedalhas() {
  for (var esporte in medalhasBrasil) {
    var dataMedalha = new Date(medalhasBrasil[esporte]);
    var currentTime = new Date();
    var timeDifference = currentTime - dataMedalha;
    var elementId = esporte.toLowerCase();
    var element = document.getElementById(elementId);

    if (element) {
      var elementoParagrafo = element.querySelector('p');
      elementoParagrafo.innerHTML = formatarTempoDecorrido(timeDifference);
    }
  }
}

function formatarTempoDecorrido(milissegundos) {
  var segundos = Math.floor(milissegundos / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var dias = Math.floor(horas / 24);

  return dias;
}

function atualizarExibicao() {
    var esportesComMedalhas = [];
    var esportesSemMedalhas = [];

    for (var esporte in medalhasBrasil) {
        var dataMedalha = new Date(medalhasBrasil[esporte]);
        var currentTime = new Date();
        var timeDifference = Math.floor((currentTime - dataMedalha) / (1000 * 60 * 60 * 24));
        var nomeCompleto = nomesAlternativos[esporte] || esporte;

        if (contagemMedalhas[esporte] === 0) {
            esportesSemMedalhas.push({ nome: esporte, dias: timeDifference, nomeCompleto: nomeCompleto });
        } else {
            esportesComMedalhas.push({ nome: esporte, dias: timeDifference, nomeCompleto: nomeCompleto });
        }
    }

    esportesComMedalhas.sort(function (a, b) {
        return a.dias - b.dias;
    });

    esportesSemMedalhas.sort(function (a, b) {
        return a.dias - b.dias;
    });

    var timersSection = document.querySelector('.timers');
    timersSection.innerHTML = '';

    var informacoesEsportes = {
      hipismo: {
        descricao: "Rodrigo Pessoa, cavaleiro brasileiro, <b>foi a primeira pessoa a receber uma medalha olímpica na cidade do Rio de Janeiro</b>. No dia 29 de agosto de 2005, muito antes do Rio de Janeiro oficializar sua candidatura às Olimpíadas de 2016, o cavaleiro teve o privilégio de receber a medalha de ouro olímpica, conquistada em Atenas 2004. A cerimônia, realizada no Forte de Copacabana, contou com a presença do então presidente do Comitê Olímpico Internacional (COI), o belga Jacques Rogge, e do presidente do Comitê Olímpico do Brasil (COB), Carlos Arthur Nuzman. <br><br>A iniciativa partiu do próprio COB, após a revisão do resultado do hipismo nas Olimpíadas de Atenas. Inicialmente, Rodrigo Pessoa <b>havia conquistado a medalha de prata</b> na competição de saltos, mas o brasileiro acabou herdando o ouro com a desclassificação do irlandês Cian O’Connor, que viu sua montaria, Waterford Crystal, ser pega em um exame antidoping por uso de tranquilizantes."
      },
      tiro: {
        descricao: "A delegação brasileira liderada por Roberto Trompowsky Júnior enfrentou grandes desafios ao se dirigir à Antuérpia em 1920. Sete atiradores tiveram que descer em Portugal devido a um atraso no navio a vapor Curvello, que os deixaria sem tempo para a prova de tiro. Eles então embarcaram em um trem de Lisboa para Paris, enfrentando condições adversas em parte da viagem, sendo boa parte da viagem em um vagão descoberto, com os atletas pegando chuva e sol. Em Bruxelas, tiveram armas e munições roubadas. <br><br>Com apenas 200 balas calibre 38 para os sete atiradores, uma reviravolta ocorreu quando atletas americanos, Alfred Lane e Raymond Bracken, generosamente forneceram 2 mil cartuchos e 50 alvos.<br><br> O Brasil competiu na prova de pistola livre com Fernando Soledade. Como sua arma era muito ruim, o chefe da equipe americana de tiro, Coronel Snyders, ficou sensibilizado e cedeu duas armas fabricadas pela Colt especialmente para a competição. <br><br>Os atiradores Sebastião Wolf, Dario Barbosa, Guilherme Paraense e Afrânio da Costa fizeram um 'rodízio' com as armas e conquistaram a medalha de bronze por equipes. Afrânio também ganhou a medalha de prata individual. <br><br>O ouro veio no dia seguinte na prova de revólver (hoje chamada de tiro rápido). Guilherme Paraense, um primeiro-tenente do Exército, alcançou 274 pontos em 300, superando o americano Bracken por dois pontos. Paraense, com 36 anos, se tornou o primeiro medalhista de ouro do Brasil."
      },
    };
    
    for (var i = 0; i < esportesComMedalhas.length; i++) {
      var esporte = esportesComMedalhas[i].nome;
      var dias = esportesComMedalhas[i].dias;
      var nomeCompleto = esportesComMedalhas[i].nomeCompleto;
      var dataMedalha = new Date(medalhasBrasil[esporte]);
  
      var divEsporte = document.createElement('div');
  
      var header = document.createElement('header');
      var h1 = document.createElement('h1');
      var p = document.createElement('p');
      var h3 = document.createElement('h3');
  
      var dataFormatada = `${dataMedalha.getDate().toString().padStart(2, '0')}.${(dataMedalha.getMonth() + 1).toString().padStart(2, '0')}.${dataMedalha.getFullYear()}`;
      var anoOlimpiada = dataMedalha.getFullYear();
  
      h1.textContent = 'Dias desde a última medalha em ' + nomeCompleto.charAt(0).toUpperCase() + nomeCompleto.slice(1);
  
      if (esporte in informacoesEsportes) {
        var imgButton = document.createElement('img');
        imgButton.src = 'https://raw.githubusercontent.com/TomazMPP/UltimaMedalha/main/assets/img/info.png';
        imgButton.style.cursor = 'pointer';
        imgButton.addEventListener('click', (function (esporte) {
          return function () {
              openInfoDisplay(esporte);
          };
        })(esporte));
        h1.appendChild(imgButton);
      }

        function openInfoDisplay(esporteClicado) {
          var popupDiv = document.getElementById('popup');
          var informacoes = obterInformacoesEsporte(esporteClicado);
          var infoo = document.getElementById('info');
          infoo.innerHTML = informacoes;
          popupDiv.style.display = "block";
      }      
        
        function obterInformacoesEsporte(esporteClicado) {
          if (informacoesEsportes.hasOwnProperty(esporteClicado)) {
            return informacoesEsportes[esporteClicado].descricao;
          } else {
            return "Informações não disponíveis para este esporte.";
          }
        }

        var popupCloseButton = document.getElementById('popup-close');
        popupCloseButton.addEventListener('click', function() {
         var popupDiv = document.getElementById('popup');
        popupDiv.style.display = "none";
});

        function obterInformacoesEsporte(esporteClicado) {
          if (informacoesEsportes.hasOwnProperty(esporteClicado)) {
            return informacoesEsportes[esporteClicado].descricao;
          } else {
            return "Informações não disponíveis para este esporte.";
          }
        }


        p.textContent = dias + ' dias';

        var spanData = document.createElement('span');
        spanData.textContent = dataFormatada;
        spanData.style.color = '#006400';

        var textoRestante = ` - Olimpíadas em ${olimpiadasModernasDeVerao[anoOlimpiada]} - ${contagemMedalhas[esporte]} Medalhas conquistadas ao todo em ${nomeCompleto}`;
        h3.appendChild(spanData);
        h3.innerHTML += textoRestante;

        header.appendChild(h1);
        divEsporte.appendChild(header);
        divEsporte.appendChild(p);
        divEsporte.appendChild(h3);
        timersSection.appendChild(divEsporte);
    }

    for (var i = 0; i < esportesSemMedalhas.length; i++) {
        var esporte = esportesSemMedalhas[i].nome;
        var dias = esportesSemMedalhas[i].dias;
        var nomeCompleto = esportesSemMedalhas[i].nomeCompleto;
        var dataMedalha = new Date(medalhasBrasil[esporte]);

        var divEsporte = document.createElement('div');

        var header = document.createElement('header');
        var h1 = document.createElement('h1');
        var p = document.createElement('p');
        var h3 = document.createElement('h3');

        var dataFormatada = `${dataMedalha.getDate().toString().padStart(2, '0')}.${(dataMedalha.getMonth() + 1).toString().padStart(2, '0')}.${dataMedalha.getFullYear()}`;

        h1.textContent = nomeCompleto.charAt(0).toUpperCase() + nomeCompleto.slice(1);
        h1.style.color = "red";
        p.textContent = dias + ' dias';
        
        if (contagemMedalhas[esporte] === 0) {
            h3.textContent = `${dataFormatada} - O BRASIL NUNCA CONQUISTOU UMA MEDALHA EM ${nomeCompleto.toUpperCase()}. ESSA É A DATA DA 1ª PARTICIPAÇÃO`;
            h3.style.color = "white";
            h3.style.backgroundColor = "red";
        }

        header.appendChild(h1);
        divEsporte.appendChild(header);
        divEsporte.appendChild(p);
        divEsporte.appendChild(h3);
        timersSection.appendChild(divEsporte);
    }
}

atualizarExibicao();