function verificarRespostas() {
    let nota = 0;
            
    let p1 = document.querySelector('input[name="pergunta1"]:checked');
        if (p1 && p1.value === "mercurio") {
            nota = nota + 1;
        }

    let p2_jupiter = document.getElementById("p2b").checked;
    let p2_saturno = document.getElementById("p2c").checked;
    let p2_terra = document.getElementById("p2a").checked;

        if (p2_jupiter === true && p2_saturno === true && p2_terra === false) {
            nota = nota + 1;
        }

    let p3 = document.getElementById("pergunta3").value;
        p3 = p3.toLowerCase();
            if (p3 === "via lactea" || p3 === "via láctea") {
                nota = nota + 1;
            }

    let p4 = document.getElementById("pergunta4").value;
        if (p4 === "neil") {
            nota = nota + 1;
        }

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("area-resultado").style.display = "block";

    let mensagem = "";
        if (nota === 4) {
            mensagem = "Parabéns! Você acertou tudo! Nota: " + nota;
        } else {
            mensagem = "Você acertou " + nota + " de 4 perguntas.";
        }

    document.getElementById("mensagem-final").innerHTML = "<h3>" + mensagem + "</h3>";
}