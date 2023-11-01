

document.addEventListener('DOMContentLoaded', function (){
    function gerarCartao() {
        let cardNumber = ''; // inicia string vazia
        for (let i = 0; i < 16; i++) { // contador
            cardNumber += Math.floor(Math.random() * 10);
            if (i % 4 === 3 && i < 15) { // usando o modulo conseguimos toda hora no 4 numero gerado adicionar um espaço vazio
                cardNumber += ' ';
            }
        }

        document.getElementById('cartao-number').textContent = cardNumber; // pegamos o campo onde sera exibido o number .textCOntente para transfomar em conteudo de texto e falamos que i ugal cardNumber que sera o valor
    }
    gerarCartao();
})