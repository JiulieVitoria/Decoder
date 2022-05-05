// Mostrar a parte de incremento da Cifra //
var escolhas = document.querySelector("select");

escolhas.addEventListener("change", function (evento) {
    evento.preventDefault();

    var incremento = document.getElementById("valorIncremento");

    if (evento.target.value == "cCesar") {
        incremento.style = "display: flex";
    } else {
        incremento.style = "display: none";
    }
});

// CRIPTOGRAFIAS //
var formulario = document.forms.formulario;

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var texto = formulario.texto.value;
    var escolha = formulario.escolhaLinguaguem.value;
    var botoes = formulario.codificar.value;
    var numeroIncremento = formulario.numeroIncrementos.value;
    var mensagemFinal = "";

    if (escolha == "cCesar") {
        mensagemFinal = cesar(botoes, texto, numeroIncremento);
    } else {
        mensagemFinal = base64(botoes, texto);
    }

    var resultadoTexto = document.getElementById("saidaTexto");
    resultadoTexto.innerHTML = `${mensagemFinal}`;
});

// Cifra //
function cesar(codific, texto, numeroIncremento) {
    numeroIncremento = Number(numeroIncremento);

    var mensagemFinal = "";

    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var codigo = letra.charCodeAt();

        if (codific == "codificar") {
            codigo += numeroIncremento;
        } else {
            codigo -= numeroIncremento;
        }
        mensagemFinal += String.fromCharCode(codigo);
    }
    return mensagemFinal;
}

// Base //
function base64(codific, texto) {
    if (codific == "codificar") {
        return btoa(texto);
    } else {
        return atob(texto);
    }
}