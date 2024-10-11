//Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, 
//na linguagem que desejar, que calcule e retorne:
//• O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

//IMPORTANTE:
//a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
//b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;


export default 
async function fetchData() {
    const resp = await fetch('./dados.json');
    const data = await resp.json();
    handleData(data);
  }
  
  const handleData = (data) => {
    const total = document.getElementById('total');
    const maiorValor = document.getElementById('maiorValor');
    const menorValor = document.getElementById('menorValor');
    const mediaM = document.getElementById('mediaM');
  
    let numeros = data.map((e) => e.valor);
    let maior = Math.max(...numeros);
    let numeroValido = numeros.filter((num) => num > 0);
    let menor = Math.min(...numeroValido);
    let somar = numeros.reduce((total, num) => total + num, 0);
    let media = somar / 30;
    let maiorMedia = numeros.filter((num) => num > media);
    let corrigirNum = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    maior = corrigirNum.format(maior);
    menor = corrigirNum.format(menor);
    sum = corrigirNum.format(somar);
    media = corrigirNum.format(media);
    maiorMedia = greaterAverage.map((num) =>
      corrigirNum.format(num),
    );
    total.lastChild.textContent = somar;
    maiorValor.lastChild.textContent = maior;
    menorValor.lastChild.textContent = menor;
    mediaM.children[0].textContent = maiorMedia.length;
  };
