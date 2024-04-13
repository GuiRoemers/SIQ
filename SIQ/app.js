//Carrega totalmente o DOM
document.addEventListener('DOMContentLoaded', function() {
    var voltar = document.getElementById('voltar');

    // Verifica se estamos na página inicial
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        // Desativa o botão Voltar e aplica o estilo de botão desativado
        voltar.disabled = true;
        voltar.classList.add('disabled-button');
    }

    // Adiciona evento de clique aos botões "inspecionar" e "resultados"
    document.getElementById('inspecionar').addEventListener('click', cliqueNosBotoes);
    document.getElementById('resultados').addEventListener('click', cliqueNosBotoes);
});

// Função para lidar com o clique nos botões em relação ao botão voltar
function cliqueNosBotoes() {
    var voltar = document.getElementById('voltar');

    // Remove a classe de botão desativado e habilita o botão Voltar
    voltar.disabled = false;
    voltar.classList.remove('disabled-button');
}

// Evento de clique para o botão "Voltar", redireciona para página inicial
document.getElementById('voltar').addEventListener('click', function() {
    window.location.href = "index.html";
});

//Evento Inspecionar
document.getElementById('inspecionar').addEventListener('click', function() {
    var buttonContainer = document.querySelector('.button-container');
    buttonContainer.innerHTML = `
        <button class="blue-button" id="cfw11">CFW11</button>
        <button class="blue-button" id="cfw500">CFW500</button>
        <button class="blue-button" id="cfw900">CFW900</button>
    `;

    //Evento CFW11
    document.getElementById('cfw11').addEventListener('click', function() {
        var buttonContainer = document.querySelector('.button-container');
        buttonContainer.innerHTML = `
            <button class="blue-button" id="CFW11E">Mecânica E</button>
            <button class="blue-button" id="CFW11F">Mecânica F</button>
            <button class="blue-button" id="CFW11G">Mecânica G</button>
        `;

        // Carrega o script cfw11.js
        var scriptElement = document.createElement('script');
        scriptElement.src = 'cfw11.js';
        document.body.appendChild(scriptElement);

        document.getElementById('CFW11E').addEventListener('click', function() {
            // Comportamento CFW11E
            console.log("Botão CFW11 Mecânica E clicado!");
            
            // Chama a função clickCFW11E
            clickCFW11E();
        });

        document.getElementById('CFW11F').addEventListener('click', function() {
            // Comportamento CFW11F
            console.log("Botão CFW11 Mecânica F clicado!");

            // Chama a função clickCFW11E
            clickCFW11F();
        });

        document.getElementById('CFW11G').addEventListener('click', function() {
            // Comportamento CFW11G
            console.log("Botão CFW11 Mecânica G clicado!");

            // Chama a função clickCFW11G
            clickCFW11G();

        });
    });

    //Evento CFW500
    document.getElementById('cfw500').addEventListener('click', function() {
        var buttonContainer = document.querySelector('.button-container');
        buttonContainer.innerHTML = `
            <button class="blue-button" id="CFW500G">Mecânica G</button>
        `;

        // Carrega o script cfw500.js
        var scriptElement = document.createElement('script');
        scriptElement.src = 'cfw500.js';
        document.body.appendChild(scriptElement);

        document.getElementById('CFW500G').addEventListener('click', function() {
            // Comportamento CFW500G
            console.log("Botão CFW500 Mecânica G clicado!");

            // Chama a função clickCFW500G
            clickCFW500G();

        });
    });

    //Evento CFW900
    document.getElementById('cfw900').addEventListener('click', function() {
        var buttonContainer = document.querySelector('.button-container');
        buttonContainer.innerHTML = `
            <button class="blue-button" id="CFW900D">Mecânica D</button>
            <button class="blue-button" id="CFW900E">Mecânica E</button>
            <button class="blue-button" id="CFW900F">Mecânica F</button>
        `;

        // Carrega o script cfw900.js
        var scriptElement = document.createElement('script');
        scriptElement.src = 'cfw900.js';
        document.body.appendChild(scriptElement);

        document.getElementById('CFW900D').addEventListener('click', function() {
            // Comportamento CFW900D
            console.log("Botão CFW900 Mecânica D clicado!");

            // Chama a função clickCFW900D
            clickCFW900D();

        });

        document.getElementById('CFW900E').addEventListener('click', function() {
            // Comportamento CFW900E
            console.log("Botão CFW900 Mecânica E clicado!");

            // Chama a função clickCFW900E
            clickCFW900E();

        });

        document.getElementById('CFW900F').addEventListener('click', function() {
            // Aqui você pode adicionar o código para o comportamento do botão Mecânica F
            console.log("Botão CFW900 Mecânica F clicado!");

            // Chama a função clickCFW900F
            clickCFW900F();

        });
    });
});

//Evento Resultados
document.getElementById('resultados').addEventListener('click', function() {

    //limpa a tela
    var tirarBotaoInspecionar = document.getElementById('inspecionar');
    var tirarBotaoResultados = document.getElementById('resultados');
    
    if (tirarBotaoInspecionar) {
        tirarBotaoInspecionar.parentNode.removeChild(tirarBotaoInspecionar);
    }
    if (tirarBotaoResultados) {
        tirarBotaoResultados.parentNode.removeChild(tirarBotaoResultados);
    }

    // Cria um elemento de texto para exibir a mensagem
    var mensagem = document.createElement('div');
    mensagem.textContent = "Aqui serão exibidos os resultados";
    mensagem.classList.add('texto-resultados'); // Adiciona a classe 'texto-resultados' ao elemento
    mensagem.style.position = 'absolute';
    document.body.appendChild(mensagem); // Adiciona a mensagem à tela
});
