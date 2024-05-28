var pedido = [];

function mostrarLista(id) {
    var listas = document.querySelectorAll('.menu-section');
    listas.forEach(function(lista) {
        lista.classList.remove('ativo');
    });

    var listaSelecionada = document.getElementById(id);
    listaSelecionada.classList.add('ativo');
}

function adicionarAoPedido(prato, preco) {
    var index = pedido.findIndex(item => item.prato === prato);

    if (index !== -1) {
        pedido[index].quantidade++;
    } else {
        pedido.push({ prato: prato, preco: preco, quantidade: 1 });
    }

    atualizarQuantidade(prato);
    alert(prato + " adicionado ao pedido!");
}

function removerDoPedido(prato) {
    var index = pedido.findIndex(item => item.prato === prato);

    if (index !== -1 && pedido[index].quantidade > 0) {
        pedido[index].quantidade--;
        atualizarQuantidade(prato);
    }
}

function atualizarQuantidade(prato) {
    var quantidadeSpan = document.getElementById('quantidade-' + prato.toLowerCase().replace(/\s/g, '-'));

    if (quantidadeSpan) {
        var index = pedido.findIndex(item => item.prato === prato);
        quantidadeSpan.textContent = pedido[index].quantidade;
    }
}

function verPedidos() {
    window.location.href = "pedidos.html?pedido=" + JSON.stringify(pedido);
}
