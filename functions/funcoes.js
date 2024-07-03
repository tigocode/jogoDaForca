import obterDados from 'readline-sync';
import { validarLetraDigitada, validarLetra } from './funcoesDeValidacao.js';

function OcultarPalavras(palavraSelecionada) {
  
  let primeriaLetra = palavraSelecionada[0];
  let underline = '_'.repeat(palavraSelecionada.length -1);
  
  return primeriaLetra + underline;
};

function atualizarPalavraOculta(palavraOculta, letraDigitada, palavraSelecionada) {
  
  let palavraOcultaArray = palavraOculta.split('');
  

  for(let i = 0; i < palavraSelecionada.length; i++) {
    if(letraDigitada === palavraSelecionada[i]) {
      palavraOcultaArray[i] = letraDigitada
    }
  }
  return palavraOcultaArray.join('');
};

function exibirPalavraObterLetra(palavraOculta, palavraAtualizada) {
  if(palavraAtualizada === "") {
    console.log(`${"\n"}Fruta: ${palavraOculta}`);
    let letra = obterDados.question("Digite uma letra: ").toLowerCase();
    if(!validarLetraDigitada(letra)) {      
      console.log("\nPor favor, digite uma letra válida.");
      return obterDados.question("Digite uma letra: ").toLowerCase();
    } else {
      return letra;
    }    
  } else {
    console.log(`${"\n"}Fruta: ${palavraAtualizada}`);
    let letra = obterDados.question("Digite uma letra: ").toLowerCase();
    if(!validarLetraDigitada(letra)) {      
      console.log("\nPor favor, digite uma letra válida.");
      return obterDados.question("Digite uma letra: ").toLowerCase();
    } else {
      return letra;
    }    
  }  
};

export {OcultarPalavras, atualizarPalavraOculta, validarLetraDigitada, exibirPalavraObterLetra, validarLetra };
