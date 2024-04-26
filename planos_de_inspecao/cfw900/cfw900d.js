let resposta1;
let resposta2;
let resposta3;
let resposta4;
let resposta5;
let resposta6;
let resposta7;
let resposta8;
let resposta9;
let resposta10;
let resposta11;
let resposta12;
let resposta13;

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

function tornarBotaoVoltarVisivel() {
    var botaoVoltar = document.getElementById('voltar');

    // Tornando o botão "voltar" visível
    botaoVoltar.style.display = 'block';
}

function telaResultados() {
    exibirTextoNaTela('h3','Inspeção finalizada.');
    adicionarImagem('');
    let situacao;

    console.log(`Resposta 1: ${resposta1}`);
    console.log(`Resposta 2: ${resposta2}`);
    console.log(`Resposta 3: ${resposta3}`);
    console.log(`Resposta 4: ${resposta4}`);
    console.log(`Resposta 5: ${resposta5}`);
    console.log(`Resposta 6: ${resposta6}`);
    console.log(`Resposta 7: ${resposta7}`);
    console.log(`Resposta 8: ${resposta8}`);
    console.log(`Resposta 9: ${resposta9}`);
    console.log(`Resposta 10: ${resposta10}`);
    console.log(`Resposta 11: ${resposta11}`);
    console.log(`Resposta 12: ${resposta12}`);
    console.log(`Resposta 13: ${resposta13}`);

    if (
        resposta1 == "NOK" || 
        resposta2 == "NOK" || 
        resposta3 == "NOK" || 
        resposta4 == "NOK" || 
        resposta5 == "NOK" || 
        resposta6 == "NOK" || 
        resposta7 == "NOK" || 
        resposta8 == "NOK" ||
        resposta9 == "NOK" || 
        resposta10 == "NOK" || 
        resposta11 == "NOK" || 
        resposta12 == "NOK" || 
        resposta13 == "NOK"
    ) {
        situacao = "Reprovado.";
        console.log(situacao);
        
    } else {
        situacao = "Aprovado.";
        console.log(situacao);
    };

    console.log(serial);

    exibirTextoNaTela('p2', `Serial: ${serial}`);

    exibirTextoNaTela('p', `O produto está ${situacao}`);

    // Remover os botões 'OK' e 'Não OK'
    var buttonContainer = document.querySelector('.button-container-ok-nok');
    buttonContainer.innerHTML = '';

    tornarBotaoVoltarVisivel();
}

function inspecaoCFW900D1 () {

    console.log (serial);

    exibirTextoNaTela('h3','Verificar cabos RST.');
    let img1 = 'planos_de_inspecao/cfw900/cfw900d/1.jpeg';
    adicionarImagem(img1);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK1">OK</button>
        <button class="red-button" id="NOK1">Não OK</button>
    `;
    var botaoOK1 = document.getElementById('OK1');
    var botaoNOK1 = document.getElementById('NOK1');

    botaoOK1.addEventListener('click', function() {
        resposta1 = 'OK';
        console.log(`Verificar cabos RST: ${resposta1}`);
        inspecaoCFW900D2();
    });

    botaoNOK1.addEventListener('click', function() {
        resposta1 = 'NOK';
        console.log(`Verificar cabos RST: ${resposta1}`);
        inspecaoCFW900D2();
    });
}

function inspecaoCFW900D2() {

    exibirTextoNaTela('h3','Verificar integridade dos cabos do indutor.');
    let img2 = 'planos_de_inspecao/cfw900/cfw900d/2.jpeg';
    adicionarImagem(img2);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK2">OK</button>
        <button class="red-button" id="NOK2">Não OK</button>
    `;
    var botaoOK2 = document.getElementById('OK2');
    var botaoNOK2 = document.getElementById('NOK2');

    botaoOK2.addEventListener('click', function() {
        resposta2 = 'OK';
        console.log(`Verificar integridade dos cabos do indutor: ${resposta2}`);
        inspecaoCFW900D3();
    });

    botaoNOK2.addEventListener('click', function() {
        resposta2 = 'NOK';
        console.log(`Verificar integridade dos cabos do indutor: ${resposta2}`);
        inspecaoCFW900D3();
    });
}

function inspecaoCFW900D3() {
    exibirTextoNaTela('h3','Verificar cabos do ventilador XC98A e XC98B.');
    let img3 = 'planos_de_inspecao/cfw900/cfw900d/3.jpeg';
    adicionarImagem(img3);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK3">OK</button>
        <button class="red-button" id="NOK3">Não OK</button>
    `;
    var botaoOK3 = document.getElementById('OK3');
    var botaoNOK3 = document.getElementById('NOK3');

    botaoOK3.addEventListener('click', function() {
        resposta3 = 'OK';
        console.log(`Verificar cabos do ventilador XC98A e XC98B: ${resposta3}`);
        inspecaoCFW900D4();
    });

    botaoNOK3.addEventListener('click', function() {
        resposta3 = 'NOK';
        console.log(`Verificar cabos do ventilador XC98A e XC98B: ${resposta3}`);
        inspecaoCFW900D4();
    });
}

function inspecaoCFW900D4() {
    exibirTextoNaTela('h3','Verificar conexão dos 19 cabos.');
    let img4 = 'planos_de_inspecao/cfw900/cfw900d/4.jpeg';
    adicionarImagem(img4);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK4">OK</button>
        <button class="red-button" id="NOK4">Não OK</button>
    `;
    var botaoOK4 = document.getElementById('OK4');
    var botaoNOK4 = document.getElementById('NOK4');

    botaoOK4.addEventListener('click', function() {
        resposta4 = 'OK';
        console.log(`Verificar conexão dos 19 cabos: ${resposta4}`);
        inspecaoCFW900D5();
    });

    botaoNOK4.addEventListener('click', function() {
        resposta4 = 'NOK';
        console.log(`Verificar conexão dos 19 cabos: ${resposta4}`);
        inspecaoCFW900D5();
    });
}

function inspecaoCFW900D5() {
    exibirTextoNaTela('h3','Verificar aperto dos parafusos do módulo.');
    let img5 = 'planos_de_inspecao/cfw900/cfw900d/5.jpeg';
    adicionarImagem(img5);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK5">OK</button>
        <button class="red-button" id="NOK5">Não OK</button>
    `;
    var botaoOK5 = document.getElementById('OK5');
    var botaoNOK5 = document.getElementById('NOK5');

    botaoOK5.addEventListener('click', function() {
        resposta5 = 'OK';
        console.log(`Verificar aperto dos parafusos do módulo: ${resposta5}`);
        inspecaoCFW900D6();
    });

    botaoNOK5.addEventListener('click', function() {
        resposta5 = 'NOK';
        console.log(`Verificar aperto dos parafusos do módulo: ${resposta5}`);
        inspecaoCFW900D6();
    });
}

function inspecaoCFW900D6() {
    exibirTextoNaTela('h3','Verificar aperto dos parafusos dos barramentos.');
    let img6 = 'planos_de_inspecao/cfw900/cfw900d/6.jpeg';
    adicionarImagem(img6);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK6">OK</button>
        <button class="red-button" id="NOK6">Não OK</button>
    `;
    var botaoOK6 = document.getElementById('OK6');
    var botaoNOK6 = document.getElementById('NOK6');

    botaoOK6.addEventListener('click', function() {
        resposta6 = 'OK';
        console.log(`Verificar aperto dos parafusos dos barramentos: ${resposta6}`);
        inspecaoCFW900D7();
    });

    botaoNOK6.addEventListener('click', function() {
        resposta6 = 'NOK';
        console.log(`Verificar aperto dos parafusos dos barramentos: ${resposta6}`);
        inspecaoCFW900D7();
    });
}

function inspecaoCFW900D7() {
    exibirTextoNaTela('h3','Verificar cabos dos indutores com os barramentos (azul, branco, preto e amarelo).');
    let img7 = 'planos_de_inspecao/cfw900/cfw900d/7.jpeg';
    adicionarImagem(img7);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK7">OK</button>
        <button class="red-button" id="NOK7">Não OK</button>
    `;
    var botaoOK7 = document.getElementById('OK7');
    var botaoNOK7 = document.getElementById('NOK7');

    botaoOK7.addEventListener('click', function() {
        resposta7 = 'OK';
        console.log(`Verificar cabos dos indutores com os barramentos (azul, branco, preto e amarelo): ${resposta7}`);
        inspecaoCFW900D8();
    });

    botaoNOK7.addEventListener('click', function() {
        resposta7 = 'NOK';
        console.log(`Verificar cabos dos indutores com os barramentos (azul, branco, preto e amarelo): ${resposta7}`);
        inspecaoCFW900D8();
    });
}

function inspecaoCFW900D8() {
    exibirTextoNaTela('h3','Verificar espaçador ao lado do módulo IGBT.');
    let img8 = 'planos_de_inspecao/cfw900/cfw900d/8.jpeg';
    adicionarImagem(img8);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK8">OK</button>
        <button class="red-button" id="NOK8">Não OK</button>
    `;
    var botaoOK8 = document.getElementById('OK8');
    var botaoNOK8 = document.getElementById('NOK8');

    botaoOK8.addEventListener('click', function() {
        resposta8 = 'OK';
        console.log(`Verificar espaçador ao lado do módulo IGBT: ${resposta8}`);
        inspecaoCFW900D9();
    });

    botaoNOK8.addEventListener('click', function() {
        resposta8 = 'NOK';
        console.log(`Verificar espaçador ao lado do módulo IGBT: ${resposta8}`);
        inspecaoCFW900D9();
    });
}

function inspecaoCFW900D9() {
    exibirTextoNaTela('h3','Verificar encaixe da cadeirinha.');
    let img9 = 'planos_de_inspecao/cfw900/cfw900d/9.jpeg';
    adicionarImagem(img9);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK9">OK</button>
        <button class="red-button" id="NOK9">Não OK</button>
    `;
    var botaoOK9 = document.getElementById('OK9');
    var botaoNOK9 = document.getElementById('NOK9');

    botaoOK9.addEventListener('click', function() {
        resposta9 = 'OK';
        console.log(`Verificar encaixe da cadeirinha: ${resposta9}`);
        inspecaoCFW900D10();
    });

    botaoNOK9.addEventListener('click', function() {
        resposta9 = 'NOK';
        console.log(`Verificar encaixe da cadeirinha: ${resposta9}`);
        inspecaoCFW900D10();
    });
}

function inspecaoCFW900D10() {
    exibirTextoNaTela('h3','Verificar conexão do cabo XC1 (ao lado da cadeirinha).');
    let img10 = 'planos_de_inspecao/cfw900/cfw900d/10.jpeg';
    adicionarImagem(img10);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK10">OK</button>
        <button class="red-button" id="NOK10">Não OK</button>
    `;
    var botaoOK10 = document.getElementById('OK10');
    var botaoNOK10 = document.getElementById('NOK10');

    botaoOK10.addEventListener('click', function() {
        resposta10 = 'OK';
        console.log(`Verificar conexão do cabo XC1 (ao lado da cadeirinha): ${resposta10}`);
        inspecaoCFW900D11();
    });

    botaoNOK10.addEventListener('click', function() {
        resposta10 = 'NOK';
        console.log(`Verificar conexão do cabo XC1 (ao lado da cadeirinha): ${resposta10}`);
        inspecaoCFW900D11();
    });
}

function inspecaoCFW900D11() {
    exibirTextoNaTela('h3','Verificar polaridade da bateria.');
    let img11 = 'planos_de_inspecao/cfw900/cfw900d/11.jpeg';
    adicionarImagem(img11);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK11">OK</button>
        <button class="red-button" id="NOK11">Não OK</button>
    `;
    var botaoOK11 = document.getElementById('OK11');
    var botaoNOK11 = document.getElementById('NOK11');

    botaoOK11.addEventListener('click', function() {
        resposta11 = 'OK';
        console.log(`Verificar polaridade da bateria: ${resposta11}`);
        inspecaoCFW900D12();
    });

    botaoNOK11.addEventListener('click', function() {
        resposta11 = 'NOK';
        console.log(`Verificar polaridade da bateria: ${resposta11}`);
        inspecaoCFW900D12();
    });
}

function inspecaoCFW900D12() {
    exibirTextoNaTela('h3','Verificar proteção do Led.');
    let img12 = 'planos_de_inspecao/cfw900/cfw900d/12.jpeg';
    adicionarImagem(img12);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK12">OK</button>
        <button class="red-button" id="NOK12">Não OK</button>
    `;
    var botaoOK12 = document.getElementById('OK12');
    var botaoNOK12 = document.getElementById('NOK12');

    botaoOK12.addEventListener('click', function() {
        resposta12 = 'OK';
        console.log(`Verificar proteção do Led: ${resposta12}`);
        inspecaoCFW900D13();
    });

    botaoNOK12.addEventListener('click', function() {
        resposta12 = 'NOK';
        console.log(`Verificar proteção do Led: ${resposta12}`);
        inspecaoCFW900D13();
    });
}

function inspecaoCFW900D13() {
    exibirTextoNaTela('h3','Verificar proteção DC.');
    let img13 = 'planos_de_inspecao/cfw900/cfw900d/13.jpeg';
    adicionarImagem(img13);

    var buttonContainer = document.querySelector('.button-container-ok-nok ');
    buttonContainer.innerHTML = `
        <button class="green-button" id="OK13">OK</button>
        <button class="red-button" id="NOK13">Não OK</button>
    `;
    var botaoOK13 = document.getElementById('OK13');
    var botaoNOK13 = document.getElementById('NOK13');

    botaoOK13.addEventListener('click', function() {
        resposta13 = 'OK';
        console.log(`Verificar proteção DC: ${resposta13}`);
        telaResultados();
    });

    botaoNOK13.addEventListener('click', function() {
        resposta13 = 'NOK';
        console.log(`Verificar proteção DC: ${resposta13}`);
        telaResultados();
    });
}