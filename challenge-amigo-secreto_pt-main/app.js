document.addEventListener("DOMContentLoaded", function () {
    const inputAmigo = document.getElementById("amigo");
    const botaoAdicionar = document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    const botaoSortear = document.querySelector(".button-draw");
    const resultado = document.getElementById("resultado");
    let amigos = [];

    botaoAdicionar.addEventListener("click", function () {
        const nome = inputAmigo.value.trim();
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return;
        }
        amigos.push(nome);
        atualizarLista();
        inputAmigo.value = "";
    });

    botaoSortear.addEventListener("click", function () {
        if (amigos.length === 0) {
            alert("Adicione pelo menos um nome antes de sortear.");
            return;
        }
        const indiceSorteado = Math.floor(Math.random() * amigos.length);
        resultado.textContent = `O amigo secreto sorteado é: ${amigos[indiceSorteado]}`;
    });

    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }
});
