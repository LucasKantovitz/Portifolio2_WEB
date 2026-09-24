const formContato = document.getElementById("form-contato");

if (formContato) {
    formContato.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        const erroEl = document.getElementById("erro-formulario");
        const sucessoEl = document.getElementById("sucesso-formulario");

        erroEl.style.display = "none";
        sucessoEl.style.display = "none";

        if (nome === "" || email === "" || mensagem === "") {
            erroEl.textContent = "Preencha todos os campos antes de enviar.";
            erroEl.style.display = "block";
            return;
        }

        if (!email.includes("@")) {
            erroEl.textContent = "Digite um e-mail válido (deve conter @).";
            erroEl.style.display = "block";
            return;
        }

        sucessoEl.style.display = "block";
        formContato.reset();
    });
}