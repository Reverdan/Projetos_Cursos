var inpValor1 = document.getElementById("ïnpValor1");
var inpValor2 = document.getElementById("inpValor2");
var btnExecutar = document.getElementById("btnExecutar");
var lblResultado = document.getElementById("lblResultado");

btnExecutar.addEventListener("click", executar)

function executar()
{
    var resposta = "";
    var valor1 = inpValor1.value;
    var valor2 = inpValor2.value;
    valor1 !== valor2 ? resposta = 
        "Os números " + valor1 + " e " + valor2 + " são diferentes" :
        "Os números ${inpValor1) e ${inpValor2} são iguais"
    lblResultado.innerHTML = "teste";
}