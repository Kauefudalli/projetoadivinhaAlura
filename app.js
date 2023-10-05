let listaDeNumerosSorteados = [];
let limiteNumeros = 10;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;

function exibirTextoNatela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNatela('h1', 'Jogo do número secreto');
    exibirTextoNatela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNatela('h1','Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; 
            let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
            exibirTextoNatela('p', mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNatela('p', 'O número secreto é menor que o chute.');
        }else{
            exibirTextoNatela('p', 'O número secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function geraNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeros + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == limiteNumeros) {
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return  geraNumeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);

        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = geraNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}


