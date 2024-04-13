function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function tornarBotoesVisiveis() {
    var botaoOK = document.getElementById('OK');
    var botaoNOK = document.getElementById('NOK');

    // Tornando os botões visíveis
    botaoOK.style.display = 'block';
    botaoNOK.style.display = 'block';
}

function adicionarImagemNaFrente(imagem) {
    // Criação do elemento de imagem
    var imagemNaFrente = document.createElement('img');

    // Definição do caminho da imagem
    imagemNaFrente.src = imagem;

    // Estilização da imagem para posicioná-la no centro da tela
    imagemNaFrente.style.position = 'fixed';
    imagemNaFrente.style.bottom = '0px';
    imagemNaFrente.style.left = '50%';
    imagemNaFrente.style.transform = 'translate(-50%, -50%)';
    imagemNaFrente.style.width = '80%'; // Redimensiona a largura da imagem para 50% da largura da tela
    imagemNaFrente.style.height = 'auto'; // Mantém a proporção original da imagem
    imagemNaFrente.style.zIndex = '9999'; // Coloca a imagem na frente de todos os outros elementos

    // Adicionando a imagem ao corpo do documento
    document.body.appendChild(imagemNaFrente);
}

function inspecaoCFW900D () {
    console.log('Executando plano de inspeção CFW900D.')

    exibirTextoNaTela('h3','Verificar cabos RST.');

    adicionarImagemNaFrente('planos_de_inspecao/cfw900/cfw900d/1.jpeg');
    
}