var inpValor1 = document.getElementById("inpValor1");
var inpValor2 = document.getElementById("inpValor2");
var btnExecutar = document.getElementById("btnExecutar");
var lblResultado = document.getElementById("lblResultado");

btnExecutar.addEventListener("click", executar)

function executar()
{
    let valor1 = parseInt(inpValor1.value);
    let valor2 = parseInt(inpValor2.value);
    let soma = valor1 + valor2;
    let resposta = "";
    valor1 !== valor2 ? 
        resposta = "Os números " + valor1 + " e " + valor2 + " são diferentes <br>" :
        resposta = "Os números " + valor1 + " e " + valor2 + " são iguais <br>" ;
    resposta += "Sua soma é " + soma + "<br>";
    soma > 10 ? resposta += "É maior que 10 <br>" : resposta += "Não é maior que 10 <br>";
    soma > 20 ? resposta += "É maior que 20" : resposta += "Não é maior que 20";
    lblResultado.innerHTML = resposta;
}