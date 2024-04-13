function inspecaoCFW11G () {
    console.log('Executando plano de inspeção CFW11G.')

    // Cria um elemento de texto para exibir a mensagem
    var mensagem = document.createElement('div');
    mensagem.textContent = "Inspeção iniciada";
    mensagem.classList.add('texto-resultados'); // Adiciona a classe 'texto-resultados' ao elemento
    mensagem.style.position = 'absolute';
    document.body.appendChild(mensagem); // Adiciona a mensagem à tela
    
}