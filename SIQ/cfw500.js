function numeroDeSerie() {
    // Remove os botões adicionais
    var botaoCFW500G = document.getElementById('CFW500G');
    
    if (botaoCFW500G) {
        botaoCFW500G.parentNode.removeChild(botaoCFW500G);
    }

    // Cria um novo elemento para mostrar o texto "Insira o Número de Série do Produto"
    var textElement = document.createElement('div');
    textElement.id = 'texto_inspecao'; // Adiciona a id
    textElement.textContent = "Insira o Número de Série do Produto";
    document.querySelector('.container').appendChild(textElement);

    // Cria um novo elemento para o campo de entrada do usuário
    var inputElement = document.createElement('input');
    inputElement.type = 'number';
    inputElement.min = '999999999';
    inputElement.max = '2000000000';
    inputElement.placeholder = 'Digite o número de série';
    
    // Cria um novo contêiner para o campo de entrada
    var inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');
    document.querySelector('.container').appendChild(inputContainer);

    // Adiciona o campo de entrada dentro do contêiner
    inputContainer.appendChild(inputElement);    
}

function limparTela() {
    // Remove os botões da tela, se existirem
    var botaoCFW500G = document.getElementById('CFW500G');
    if (botaoCFW500G) {
        botaoCFW500G.parentNode.removeChild(botaoCFW500G);
    }

    // Remove o texto de inspeção, se existir
    var textoInspecao = document.getElementById('texto_inspecao');
    if (textoInspecao) {
        textoInspecao.parentNode.removeChild(textoInspecao);
    }

    // Remove o campo de entrada, se existir
    var inputContainer = document.querySelector('.input-container');
    if (inputContainer) {
        inputContainer.parentNode.removeChild(inputContainer);
    }

    // Remove o contêiner de botões de iniciar inspeção, se existir
    var buttonContainer = document.querySelector('.button-container-iniciar-inspecao');
    if (buttonContainer) {
        buttonContainer.parentNode.removeChild(buttonContainer);
    }

    // Localiza o elemento pelo ID "voltar"
    var botaoVoltar = document.getElementById('voltar');

    // Verifica se o elemento foi encontrado
    if (botaoVoltar) {
        // Remove o elemento
        botaoVoltar.parentNode.removeChild(botaoVoltar);
    }
}

function clickCFW500G() {
    console.log('Botão CFW500 G clicado. Executando dentro do arquivo cfw500.js');

    // Carrega o script cfw500g.js
    var scriptElement = document.createElement('script');
    scriptElement.src = 'planos_de_inspecao/cfw500/cfw500g.js';
    document.body.appendChild(scriptElement);    

    numeroDeSerie();

    // Cria um novo contêiner para os botões
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container-iniciar-inspecao');

    // Seleciona o elemento onde você deseja adicionar o contêiner de botões
    var containerParaBotoes = document.querySelector('.container');

    // Adiciona o contêiner de botões ao elemento selecionado
    containerParaBotoes.appendChild(buttonContainer);

    // Cria um novo botão para iniciar a inspeção
    var iniciarInspecaoButton = document.createElement('button');
    iniciarInspecaoButton.classList.add('blue-button-iniciar-inspecao');
    iniciarInspecaoButton.textContent = "Iniciar Inspeção";

    // Adiciona evento de clique ao botão
    iniciarInspecaoButton.addEventListener('click', function() {

        // Modifica o texto do elemento h1 para 'Produto'
        var tituloPrincipal = document.querySelector('h1');
        tituloPrincipal.textContent = 'CFW500';

        // Modifica o texto do elemento h2 para 'Descrição'
        var subtitulo = document.querySelector('h2');
        subtitulo.textContent = 'Mecânica G';


        limparTela();

        console.log("Inspeção do CFW500G iniciada.");

        inspecaoCFW500G();

    });

    // Adiciona o botão ao contêiner de botões
    buttonContainer.appendChild(iniciarInspecaoButton);
}