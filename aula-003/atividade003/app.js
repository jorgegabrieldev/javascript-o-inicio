function fnJogo() {
    let chute = 0, numeroMagico = Math.floor(Math.random() * 10) + 1;
    chute = document.getElementById("valor").value

    if (chute == numeroMagico) {
        document.getElementById("resultado").innerText = "acertou :)"
    } else {
        document.getElementById("resultado").innerText = "Errou:)"
    }
}

// como fazer um sorteio do número de 1 a 10 invés de deixar fixo o 3