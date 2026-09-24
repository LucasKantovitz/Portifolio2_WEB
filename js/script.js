
const btnMenu = document.getElementById("btn-menu");
const nav = document.querySelector("nav");

if (btnMenu && nav) {
    btnMenu.addEventListener("click", function () {
        nav.classList.toggle("ativo");
    });
}


function obterCarrinho() {
    const dados = localStorage.getItem("carrinho");
    return dados ? JSON.parse(dados) : [];
}

function salvarCarrinho(carrinho) {
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function atualizarContador() {
    const contador = document.getElementById("contador-carrinho");
    if (contador) {
        const carrinho = obterCarrinho();
        contador.textContent = carrinho.length;
    }
}
document.addEventListener("DOMContentLoaded", atualizarContador);