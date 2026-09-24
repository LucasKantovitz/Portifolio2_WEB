const produtos = [
    {
        id: 1,
        nome: "Kit Turbo T3/T4",
        descricao: "Kit para projetos de rua ou pista.",
        preco: 2499.90,
        imagem: "IMAGENS/kit_turbo.jpg"
    },
    {
        id: 2,
        nome: "Suspensão a Rosca",
        descricao: "Kit para ajuste de altura.",
        preco: 1189.90,
        imagem: "IMAGENS/suspensao_rosca.jpg"
    },
    {
        id: 3,
        nome: "Filtro Esportivo",
        descricao: "Maior fluxo de ar.",
        preco: 149.90,
        imagem: "IMAGENS/filtro_ar.jpg"
    },
    {
        id: 4,
        nome: "Kit de Freios",
        descricao: "Mais segurança e desempenho.",
        preco: 5890.00,
        imagem: "IMAGENS/freios.jpg"
    },
    {
        id: 5,
        nome: "Intercooler",
        descricao: "Melhor controle da temperatura.",
        preco: 1349.90,
        imagem: "IMAGENS/intercooler.jpg"
    }
];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


function renderizarProdutos() {
    const container = document.getElementById("lista-produtos");
    container.innerHTML = "";


    container.style.display = "flex";
    container.style.flexWrap = "wrap";
    container.style.justifyContent = "center";
    container.style.gap = "25px";
    container.style.padding = "40px 20px";

    produtos.forEach(function (produto) {
        const item = document.createElement("article");
        item.className = "produto-item";

        item.style.width = "280px";
        item.style.backgroundColor = "#2b2b2b";
        item.style.borderRadius = "8px";
        item.style.overflow = "hidden";
        item.style.textAlign = "center";
        item.style.border = "1px solid #333";
        item.style.paddingBottom = "20px";

        const img = document.createElement("img");
        img.src = produto.imagem;
        img.alt = produto.nome;

        img.style.width = "100%";
        img.style.height = "200px";
        img.style.objectFit = "cover";
        img.style.display = "block";
        item.appendChild(img);

        const titulo = document.createElement("h3");
        titulo.textContent = produto.nome;
        titulo.style.color = "#fff";
        titulo.style.margin = "15px 15px 10px";
        item.appendChild(titulo);

        const descricao = document.createElement("p");
        descricao.textContent = produto.descricao;
        descricao.style.color = "#aaa";
        descricao.style.fontSize = "14px";
        descricao.style.padding = "0 15px";
        item.appendChild(descricao);

        const preco = document.createElement("p");
        preco.textContent = formatarPreco(produto.preco);
        preco.style.color = "#d32f2f";
        preco.style.fontSize = "22px";
        preco.style.fontWeight = "bold";
        preco.style.margin = "15px 0";
        item.appendChild(preco);

        const btn = document.createElement("button");
        btn.className = "btn-comprar";
        btn.textContent = "Adicionar ao Carrinho";
        btn.style.backgroundColor = "#d32f2f";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.padding = "12px 25px";
        btn.style.borderRadius = "5px";
        btn.style.fontWeight = "bold";
        btn.style.textTransform = "uppercase";
        btn.style.cursor = "pointer";
        btn.addEventListener("click", function () {
            adicionarAoCarrinho(produto);
        });
        item.appendChild(btn);

        container.appendChild(item);
    });
}

function adicionarAoCarrinho(produto) {
    const carrinho = obterCarrinho(); // função vem de js/script.js

    carrinho.push({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco
    });

    salvarCarrinho(carrinho);
    atualizarContador();

    alert(produto.nome + " foi adicionado ao carrinho!");
}

document.addEventListener("DOMContentLoaded", renderizarProdutos);