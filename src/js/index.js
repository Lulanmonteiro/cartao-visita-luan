/*
OBJETIVO - quando clicarmos na aba que temos que mostrar
o conteúdo da aba que foi clicada pelo usuário e 
esconder o conteúdo da aba anterior
- passo 1 - dar um jeito de pegar os elementos que
representam as abas no HTML
- passo 2 - dar um jeito de identificar o clique no
elemento da aba
- passo 3 - quando o usuário clicar, desmarcar a aba
selecionada
- passo 4 - marcar a aba clicada como selecionado
- passo 5 - esconder o conteúdo anterior
- passo 6 - mostrar conteúdo da aba selecionada
*/

// passo 1 - dar um jeito de pegar os elementos que representam as abas no HTML
const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
  // passo 2
  aba.addEventListener("click", function() {

    if(aba.classList.contains("selecionado")){
      return;
    }
    selecionarAba(aba)
    mostrarInformacoesDaAba(aba)
  });
});

function selecionarAba(aba){
  //passo 3 abas
  const abaSelecionada = document.querySelector(".aba.selecionado");
  abaSelecionada.classList.remove("selecionado");

  // passo 4
  aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){
  // passo 5 informacao
  const informacaoSelecionada = document.querySelector(".informacao.selecionado")
  informacaoSelecionada.classList.remove("selecionado");

  // passo 6
  const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`

  const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba)
  informacaoASerMostrada.classList.add("selecionado")

  const audio = informacaoASerMostrada.querySelector("audio");
  if (audio) {
    audio.volume = 0.25;
  }
}

//novo código adicionado para a seção de contato
const eMailLink = document.querySelector(".e-mail");
const celularLink = document.querySelector(".celular");
eMailLink.addEventListener("click", function() {
  alert("O seu programa de e-mail padrão será aberto com o endereço de e-mail pré-preenchido.")
});

celularLink.addEventListener("click", function() {
  alert("O seu aplicativo de mensagens padrão será aberto com o número de telefone pré-preenchido.")
});

const botaoDownload = document.getElementById("botao-download");
botaoDownload.addEventListener("click", function() {
  const urlDoArquivo = "https://etecspgov-my.sharepoint.com/:b:/g/personal/luan_monteiro01_etec_sp_gov_br/EQFXQViQpYFMoo3Sc2XW7toB9dYFB2jBFMta3gxhwoK09g?e=F6C21X";
  const link = document.createElement("a");
  link.href = urlDoArquivo;
  link.setAttribute("download", "");
  link.click();
});
