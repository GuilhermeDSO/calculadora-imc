var btnCalcular = document.querySelector("#btnCacular")
var peso = document.querySelector("#peso").value
var altura = document.querySelector("#altura").value

function calcular (event) {
    event.preventDefaut()
    var pesoValue = peso.value
    var alturaValue = altura.value

    var IMC = pesoValue / Math.pow(alturaValue, 2)

    console.log(IMC)

btnCalcular.addEventListener("click",cacular )