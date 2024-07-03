import listaDeFrutas from './data/dados.js';
import {OcultarPalavras, atualizarPalavraOculta, exibirPalavraObterLetra } from './functions/funcoes.js';
import { validarLetra, exibirResultado } from './functions/funcoesDeValidacao.js';

function iniciarApp() {
  console.log("------------JOGO DA FORCA------------\n");

  const palavraSelecionada = listaDeFrutas[Math.floor(Math.random(0, 1) * listaDeFrutas.length)];
  let palavraOculta = OcultarPalavras(palavraSelecionada);
  let letraDigitada = "";
  let palavraAtualizada = "";
  let statusJogo = 'andamento';
  let chances = 4;

  console.log(`Nome da fruta com ${palavraSelecionada.length} letras: ${"\n"}`);
  letraDigitada = exibirPalavraObterLetra(palavraOculta, palavraAtualizada);
  /* palavraAtualizada = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraSelecionada);
  chances = validarLetra(palavraOculta, palavraAtualizada, chances); */
  
  while(statusJogo === 'andamento') {
    
    palavraAtualizada = atualizarPalavraOculta(palavraOculta, letraDigitada, palavraSelecionada);
    chances = validarLetra(palavraOculta, palavraAtualizada, chances);
    let resultado = exibirResultado(chances, palavraSelecionada, palavraAtualizada, statusJogo);
    if(resultado === false) {
      letraDigitada = exibirPalavraObterLetra(palavraOculta, palavraAtualizada);    
      palavraOculta = palavraAtualizada;
    } else {
      statusJogo = 'encerrado';
    }
  }  
};

iniciarApp();


