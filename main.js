

 // crie um objeto qts contendo todas as quantidades
let qts = {
    qtdCabelo: 0,
    qtdBarba: 0,
    qtdSobrancelha: 0,
    qtdPintura: 0,
    qtdHidratacao: 0,
    qtdInfantil: 0
}



// tambem e possivel deixar o codigo mais limpo usando o switch e break ...
function atualizarValores(btnClick, opercaoMat){
    if(qts.hasOwnProperty(btnClick)){ // hasOwnProperty serve para ficar se o btnCLick = click do botao se existe dentro do objeto qts
        if(opercaoMat === 'somar') { // se att for somar na div
                qts[btnClick]++; // ++ soma e adiciona 1
        } else if (opercaoMat === 'subtrair' && qts[btnClick] > 0) { // se for igual a subtrair e for mais que zero nos iremos diminuit
                qts[btnClick]--;
        }
        document.getElementById(btnClick).innerHTML= qts[btnClick]; // atualizaa o html com o valor
    }
}

function redirGerarCartao()
{
    window.location.href="geracao_cartao.html"

}
function redirCompraServicos()
{
    window.location.href="compra_cliente.html"
}

function redirAcessoCliente()
{
    window.location.href="acesso_cliente.html"
}