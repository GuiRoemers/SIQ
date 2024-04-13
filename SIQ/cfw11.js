function numeroDeSerie() {
    // Remove os botões da tela
    var botaoCFW11E = document.getElementById('CFW11E');
    var botaoCFW11F = document.getElementById('CFW11F');
    var botaoCFW11G = document.getElementById('CFW11G');
    
    if (botaoCFW11E) {
        botaoCFW11E.parentNode.removeChild(botaoCFW11E);
    }
    if (botaoCFW11F) {
        botaoCFW11F.parentNode.removeChild(botaoCFW11F);
    }
    if (botaoCFW11G) {
        botaoCFW11G.parentNode.removeChild(botaoCFW11G);
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
    var botaoCFW11E = document.getElementById('CFW11E');
    var botaoCFW11F = document.getElementById('CFW11F');
    var botaoCFW11G = document.getElementById('CFW11G');

    if (botaoCFW11E) {
        botaoCFW11E.parentNode.removeChild(botaoCFW11E);
    }
    if (botaoCFW11F) {
        botaoCFW11F.parentNode.removeChild(botaoCFW11F);
    }
    if (botaoCFW11G) {
        botaoCFW11G.parentNode.removeChild(botaoCFW11G);
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

function clickCFW11E() {
    console.log('Botão CFW11 E clicado. Executando dentro do arquivo cfw11.js');

    // Carrega o script cfw11e.js
    var scriptElement = document.createElement('script');
    scriptElement.src = 'planos_de_inspecao/cfw11/cfw11e.js';
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
        tituloPrincipal.textContent = 'CFW11';

        // Modifica o texto do elemento h2 para 'Descrição'
        var subtitulo = document.querySelector('h2');
        subtitulo.textContent = 'Mecânica E';

        limparTela();

        console.log("Inspeção do CFW11E iniciada.");

        inspecaoCFW11E();
        
    });

    // Adiciona o botão ao contêiner de botões
    buttonContainer.appendChild(iniciarInspecaoButton);
}

function clickCFW11F() {
    console.log('Botão CFW11 F clicado. Executando dentro do arquivo cfw11.js');

    // Carrega o script cfw11f.js
    var scriptElement = document.createElement('script');
    scriptElement.src = 'planos_de_inspecao/cfw11/cfw11f.js';
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
        tituloPrincipal.textContent = 'CFW11';

        // Modifica o texto do elemento h2 para 'Descrição'
        var subtitulo = document.querySelector('h2');
        subtitulo.textContent = 'Mecânica F';
        
        limparTela();

        console.log("Inspeção do CFW11F iniciada.");

        inspecaoCFW11F();
        
    });

    // Adiciona o botão ao contêiner de botões
    buttonContainer.appendChild(iniciarInspecaoButton);
}

function clickCFW11G() {
    console.log('Botão CFW11 G clicado. Executando dentro do arquivo cfw11.js');

    // Carrega o script cfw11g.js
    var scriptElement = document.createElement('script');
    scriptElement.src = 'planos_de_inspecao/cfw11/cfw11g.js';
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
        tituloPrincipal.textContent = 'CFW11';

        // Modifica o texto do elemento h2 para 'Descrição'
        var subtitulo = document.querySelector('h2');
        subtitulo.textContent = 'Mecânica G';

        limparTela();

        console.log("Inspeção do CFW11G iniciada.");

        inspecaoCFW11G();
        
    });

    // Adiciona o botão ao contêiner de botões
    buttonContainer.appendChild(iniciarInspecaoButton);
}