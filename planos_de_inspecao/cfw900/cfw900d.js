//Carregar imagens
let img1 = 'planos_de_inspecao/cfw900/cfw900d/1.jpeg';
let img2 = 'planos_de_inspecao/cfw900/cfw900d/2.jpeg';
let img3 = 'planos_de_inspecao/cfw900/cfw900d/3.jpeg';
let img4 = 'planos_de_inspecao/cfw900/cfw900d/4.jpeg';
let img5 = 'planos_de_inspecao/cfw900/cfw900d/5.jpeg';
let img6 = 'planos_de_inspecao/cfw900/cfw900d/6.jpeg';
let img7 = 'planos_de_inspecao/cfw900/cfw900d/7.jpeg';
let img8 = 'planos_de_inspecao/cfw900/cfw900d/8.jpeg';
let img9 = 'planos_de_inspecao/cfw900/cfw900d/9.jpeg';
let img10 = 'planos_de_inspecao/cfw900/cfw900d/10.jpeg';
let img11 = 'planos_de_inspecao/cfw900/cfw900d/11.jpeg';
let img12 = 'planos_de_inspecao/cfw900/cfw900d/12.jpeg';
let img13 = 'planos_de_inspecao/cfw900/cfw900d/13.jpeg';

const botaoOK = document.getElementById('OK');
const botaoNOK = document.getElementById('NOK');

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function adicionarImagem(caminhoDaImagem) {
    // Crie um novo elemento <img> para a imagem
    var novaImagem = document.createElement('img');

    // Defina o atributo 'src' da nova imagem com o caminho da sua imagem
    novaImagem.src = caminhoDaImagem;

    // Defina um estilo para limitar o tamanho da imagem
    novaImagem.style.maxWidth = '100%'; // Defina a largura máxima como 100% da largura do contêiner

    // Adicione a nova imagem ao container desejado
    var imagemContainer = document.getElementById('imagemContainer');
    imagemContainer.innerHTML = ''; // Limpe o conteúdo atual do container
    imagemContainer.appendChild(novaImagem);
}

function tornarBotoesVisiveis() {
    var botaoOK = document.getElementById('OK');
    var botaoNOK = document.getElementById('NOK');

    // Tornando os botões visíveis
    botaoOK.style.display = 'block';
    botaoNOK.style.display = 'block';
}

function tornarBotoesInvisiveis() {
    var botaoOK = document.getElementById('OK');
    var botaoNOK = document.getElementById('NOK');

    // Tornando os botões invisíveis
    botaoOK.style.display = 'none';
    botaoNOK.style.display = 'none';
}

function tornarBotaoVoltarVisivel() {
    var botaoVoltar = document.getElementById('voltar');

    // Tornando o botão "voltar" visível
    botaoVoltar.style.display = 'block';
}

function inspecaoCFW900D1 () {
    exibirTextoNaTela('h3','Verificar cabos RST.');
    adicionarImagem(img1);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D2();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D2();
    });
}

function inspecaoCFW900D2() {
    exibirTextoNaTela('h3','Verificar integridade dos cabos do indutor.');
    adicionarImagem(img2);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D3();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D3();
    });
}

function inspecaoCFW900D3() {
    exibirTextoNaTela('h3','Verificar cabos do ventilador XC98A e XC98B (comparar etiqueta com serigrafia).');
    adicionarImagem(img3);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D4();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D4();
    });
}

function inspecaoCFW900D4() {
    exibirTextoNaTela('h3','Verificar conexão dos 19 cabos.');
    adicionarImagem(img4);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D5();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D5();
    });
}

function inspecaoCFW900D5() {
    exibirTextoNaTela('h3','Verificar aperto dos parafusos do módulo.');
    adicionarImagem(img5);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D6();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D6();
    });
}

function inspecaoCFW900D6() {
    exibirTextoNaTela('h3','Verificar aperto dos parafusos dos barramentos.');
    adicionarImagem(img6);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D7();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D7();
    });
}

function inspecaoCFW900D7() {
    exibirTextoNaTela('h3','Verificar cores dos cabos dos indutores com seus respectivos barramentos (azul, branco, preto e amarelo).');
    adicionarImagem(img7);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D8();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D8();
    });
}

function inspecaoCFW900D8() {
    exibirTextoNaTela('h3','Verificar espaçador ao lado do módulo IGBT.');
    adicionarImagem(img8);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D9();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D9();
    });
}

function inspecaoCFW900D9() {
    exibirTextoNaTela('h3','Verificar encaixe da cadeirinha (conexão do cartão SMM90 no P90).');
    adicionarImagem(img9);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D10();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D10();
    });
}

function inspecaoCFW900D10() {
    exibirTextoNaTela('h3','Verificar conexão do cabo XC1 (ao lado da cadeirinha).');
    adicionarImagem(img10);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D11();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D11();
    });
}

function inspecaoCFW900D11() {
    exibirTextoNaTela('h3','Verificar polaridade da bateria.');
    adicionarImagem(img11);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D12();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D12();
    });
}

function inspecaoCFW900D12() {
    exibirTextoNaTela('h3','Verificar proteção do Led.');
    adicionarImagem(img12);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D13();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D13();
    });
}

function inspecaoCFW900D13() {
    exibirTextoNaTela('h3','Verificar proteção DC-.');
    adicionarImagem(img13);

    botaoOK.addEventListener('click', function() {
        inspecaoCFW900D14();
    });

    botaoNOK.addEventListener('click', function() {
        inspecaoCFW900D14();
    });
}

function inspecaoCFW900D14() {
    exibirTextoNaTela('h3','Inspeção finalizada.');
    adicionarImagem('');
    exibirTextoNaTela('p', 'O produto está Aprovado/Reprovado.')
    tornarBotoesInvisiveis();
    tornarBotaoVoltarVisivel();
}