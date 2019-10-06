/*Incrementa(aumenta o numero de pedidos) as quantidades pedidas*/
var botoesIncrementa = document.querySelectorAll(".btn-incrementa");
console.log(botoesIncrementa);

for (let botao of botoesIncrementa) {

    botao.addEventListener('click', incrementa);

    function incrementa() {

        var item = botao.closest('.item');
        var input = item.querySelector('.quantidade');
        input.value++;
        var preco = pegarPrecoItem(item);
        adcionaAoTotal(preco);
    }
}

/*Decrementa(diminui o numero dos pedidos) as quantidades pedidas */
var botoesDecrementa = document.querySelectorAll(".btn-decrementa");

for (let botao of botoesDecrementa) {
    botao.addEventListener('click', decrementa);

    function decrementa() {
        var item = botao.closest('.item');
        var input = item.querySelector('.quantidade');

        if (input.value > 0) {
            input.value--;
            var preco = pegarPrecoItem(item);
            adcionaAoTotal(-preco);
        }
        else {
            console.log('Escolha Inválida!');
        }
    }
}

//Função para o pedido
var formPedido = document.forms.pedido;
formPedido.addEventListener('submit', function (event) {
    var contador = 0;
    var inputs = formPedido.querySelectorAll('input.quantidade');

    for (input of inputs) {
        if (input.value > 0) contador++;
    }

    if (contador == 0) {
        alert("Deve ter pelo menos uma pizza no pedido!");
        event.preventDefault();
    }
});

/* Função para pegar o preco do item */
function pegarPrecoItem(item) {
    var precoItem = item.querySelector('.preco-item');
    return Number(precoItem.textContent);
}

/* Função para Adicionar ao total */
function adcionaAoTotal(total) {
    var elementoTotal = document.querySelector('#total');
    elementoTotal.textContent = total + Number(elementoTotal.textContent);
}