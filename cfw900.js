function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function numeroDeSerie() {
    // Remove os botões adicionais
    var botaoCFW900D = document.getElementById('CFW900D');
    var botaoCFW900E = document.getElementById('CFW900E');
    var botaoCFW900F = document.getElementById('CFW900F');
    
    if (botaoCFW900D) {
        botaoCFW900D.parentNode.removeChild(botaoCFW900D);
    }
    if (botaoCFW900E) {
        botaoCFW900E.parentNode.removeChild(botaoCFW900E);
    }
    if (botaoCFW900F) {
        botaoCFW900F.parentNode.removeChild(botaoCFW900F);
    }

    // Cria um novo elemento para mostrar o texto "Insira o Número de Série do Produto"
    var textElement = document.createElement('div');
    textElement.id = 'texto_inspecao'; // Adiciona a id
    textElement.textContent = "Insira o Número de Série do Produto";
    document.querySelector('.container').appendChild(textElement);

    // Cria um novo elemento para o campo de entrada do usuário
    var inputElement = document.createElement('input');
    inputElement.id = 'numeroDeSerieInput'; // Adiciona um id ao campo de entrada
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
    var botaoCFW900D = document.getElementById('CFW900D');
    var botaoCFW900E = document.getElementById('CFW900E');
    var botaoCFW900F = document.getElementById('CFW900F');

    if (botaoCFW900D) {
        botaoCFW900D.parentNode.removeChild(botaoCFW900D);
    }
    if (botaoCFW900E) {
        botaoCFW900E.parentNode.removeChild(botaoCFW900E);
    }
    if (botaoCFW900F) {
        botaoCFW900F.parentNode.removeChild(botaoCFW900F);
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
        var botaoVoltar = document.getElementById('voltar');
        botaoVoltar.style.display = 'none';
    }

    exibirTextoNaTela('h1','');

    exibirTextoNaTela('h2','');

}

var serial;

function clickCFW900D() {
    console.log('Botão CFW900 D clicado. Executando dentro do arquivo cfw900.js');

    // Carrega o script cfw900d.js
    var scriptElement = document.createElement('script');
    scriptElement.src = 'planos_de_inspecao/cfw900/cfw900d.js';
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
        // Obter o campo de entrada existente pelo ID
        serial = document.getElementById('numeroDeSerieInput');
        
        // Obter o valor digitado no campo de entrada
        serial = numeroDeSerieInput.value;

        // Exibir o número de série no console para depuração
        console.log('Número de série:', serial);

        // Modifica o texto do elemento h1 para 'Produto'
        var tituloPrincipal = document.querySelector('h1');
        tituloPrincipal.textContent = 'CFW900';

        // Modifica o texto do elemento h2 para 'Descrição'
        var subtitulo = document.querySelector('h2');
        subtitulo.textContent = 'Mecânica D';

        limparTela();

        console.log("Inspeção do CFW900D iniciada.");
        
        inspecaoCFW900D1();
    });

    // Adiciona o botão ao contêiner de botões
    buttonContainer.appendChild(iniciarInspecaoButton);
}

function clickCFW900E() {
    console.log('Botão CFW11 E clicado. Executando dentro do arquivo cfw900.js');

    // Carrega o script cfw900e.js
    var scriptElement = document.createElement('script');
    scriptElement.src = 'planos_de_inspecao/cfw900/cfw900e.js';
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
        tituloPrincipal.textContent = 'CFW900';

        // Modifica o texto do elemento h2 para 'Descrição'
        var subtitulo = document.querySelector('h2');
        subtitulo.textContent = 'Mecânica E';

        limparTela();

        console.log("Inspeção do CFW900E iniciada.");

        inspecaoCFW900E();

    });

    // Adiciona o botão ao contêiner de botões
    buttonContainer.appendChild(iniciarInspecaoButton);

}

function clickCFW900F() {
    console.log('Botão CFW11 E clicado. Executando dentro do arquivo cfw900.js');

    // Carrega o script cfw900f.js
    var scriptElement = document.createElement('script');
    scriptElement.src = 'planos_de_inspecao/cfw900/cfw900f.js';
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
        tituloPrincipal.textContent = 'CFW900';

        // Modifica o texto do elemento h2 para 'Descrição'
        var subtitulo = document.querySelector('h2');
        subtitulo.textContent = 'Mecânica F';

        limparTela();

        console.log("Inspeção do CFW900F iniciada.");

        inspecaoCFW900F();

    });

    // Adiciona o botão ao contêiner de botões
    buttonContainer.appendChild(iniciarInspecaoButton);

}