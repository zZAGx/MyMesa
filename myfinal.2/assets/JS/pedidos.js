var params = new URLSearchParams(window.location.search);
var pedido = JSON.parse(params.get('pedido'));

var listaPedido = document.getElementById('pedido-lista');
pedido.forEach(function(item) {
    var li = document.createElement('li');
    li.textContent = item.prato + " - R$ " + item.preco + " x " + item.quantidade;

    var btnRemover = document.createElement('button');
    btnRemover.textContent = "-";
    btnRemover.classList.add('btn-quantidade');
    btnRemover.onclick = function() {
        removerQuantidade(item);
    };

    var btnAdicionar = document.createElement('button');
    btnAdicionar.textContent = "+";
    btnAdicionar.classList.add('btn-quantidade');
    btnAdicionar.onclick = function() {
        adicionarQuantidade(item);
    };

    li.appendChild(btnRemover);
    li.appendChild(btnAdicionar);

    listaPedido.appendChild(li);
});

function adicionarQuantidade(item) {
    item.quantidade++;
    atualizarListaPedido();
}

function removerQuantidade(item) {
    if (item.quantidade > 1) {
        item.quantidade--;
        atualizarListaPedido();
    } else {
        var index = pedido.indexOf(item);
        if (index !== -1) {
            pedido.splice(index, 1);
            atualizarListaPedido();
        }
    }
}

function atualizarListaPedido() {
    listaPedido.innerHTML = "";

    pedido.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.prato + " - R$ " + item.preco + " x " + item.quantidade;

        var btnRemover = document.createElement('button');
        btnRemover.textContent = "-";
        btnRemover.classList.add('btn-quantidade');
        btnRemover.onclick = function() {
            removerQuantidade(item);
        };

        var btnAdicionar = document.createElement('button');
        btnAdicionar.textContent = "+";
        btnAdicionar.classList.add('btn-quantidade');
        btnAdicionar.onclick = function() {
            adicionarQuantidade(item);
        };

        li.appendChild(btnRemover);
        li.appendChild(btnAdicionar);

        listaPedido.appendChild(li);
    });
}

function realizarPedido() {
    alert('Pedido realizado com sucesso!');
}
