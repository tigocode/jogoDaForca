function validarLetra(palavraOculta, palavraAtualizada, chances) {  
    
  if(palavraOculta === palavraAtualizada) {
    chances = --chances;
    console.log(`\nOPÇÃO ERRADA! Você ainda tem ${chances} chance(s)!`);
    return chances;
  }
  return chances;
};

function exibirResultado(chances, palavraSelecionada, palavraAtualizada, resultado) {
  resultado = false;
  if(chances === 0) {
    console.log("\n--------------QUE PENA VOCÊ PERDEU!!-------------");
    resultado = true;
  } else if(palavraSelecionada === palavraAtualizada) {
    console.log(`${"\n"}Fruta: ${palavraAtualizada}`);
    console.log("\n--------------PARABÉNS VOCÊ VENCEU!!-------------");
    resultado = true;    
  }
  return resultado;
};

function validarLetraDigitada(letraDigitada) {
  if(letraDigitada.length === 1 && letraDigitada.match(/[a-z]/)) {
    return true;
  } else {
    return false;
  }
};

export { validarLetraDigitada, exibirResultado, validarLetra };
