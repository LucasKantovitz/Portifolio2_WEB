function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderizarCarrinho() {
    const container = document.getElementById("carrinho-container");
    const carrinho = obterCarrinho(); 
    container.innerHTML = "";

    if (carrinho.length === 0) {
        container.innerHTML = '<p class="carrinho-vazio">Seu carrinho está vazio.</p>';
        return;
    }

    let total = 0;

    carrinho.forEach(function (item, index) {
        total += item.preco;

        const linha = document.createElement("div");
        linha.className = "carrinho-item";

        const nome = document.createElement("span");
        nome.className = "nome";
        nome.textContent = item.nome;

        const preco = document.createElement("span");
        preco.className = "preco";
        preco.textContent = formatarPreco(item.preco);

        const btnRemover = document.createElement("button");
        btnRemover.className = "btn-remover";
        btnRemover.textContent = "Remover";
        btnRemover.addEventListener("click", function () {
            removerItem(index);
        });

        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(btnRemover);
        container.appendChild(linha);
    });

    const totalDiv = document.createElement("div");
    totalDiv.className = "carrinho-total";
    totalDiv.textContent = "Total: " + formatarPreco(total);
    container.appendChild(totalDiv);
}

function removerItem(index) {
    const carrinho = obterCarrinho();
    carrinho.splice(index, 1);
    salvarCarrinho(carrinho);
    renderizarCarrinho();
    atualizarContador();
}

document.addEventListener("DOMContentLoaded", renderizarCarrinho);