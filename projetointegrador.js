document.addEventListener("DOMContentLoaded", function() {

    const botao = document.getElementById("botao-acao");
    const resposta = document.getElementById("resposta");

    botao.addEventListener("click", function() {
        resposta.classList.toggle("escondido");

        if (resposta.classList.contains("escondido")) {
            botao.textContent = "Mostrar curiosidade";
        } else {
            botao.textContent = "Ocultar curiosidade";
        }
    });

    const botaoSim = document.getElementById("sim");
    const botaoNao = document.getElementById("nao");
    const resultadoQuiz = document.getElementById("resultadoQuiz");

    botaoSim.addEventListener("click", function() {
        resultadoQuiz.innerHTML =
        "✅ Correto! O aço pode ser reciclado diversas vezes sem perder sua qualidade.";
    });

    botaoNao.addEventListener("click", function() {
        resultadoQuiz.innerHTML =
        "❌ Resposta incorreta. O aço pode ser reciclado sem perder sua qualidade.";
    });

    const formulario = document.getElementById("formContato");
    const mensagem = document.getElementById("mensagemContato");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        mensagem.innerHTML =
        "✅ Mensagem enviada com sucesso!";

        formulario.reset();
    });

});