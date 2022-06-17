var currentNumberWrapper = document.getElementById('currentNumber');
var btnAdicionar =  document.getElementById("btnAdicionar");
var btnSubtrair = document.getElementById("btnAdicionar");
var currentNumber = 0;
currentNumberWrapper.style.color = "blue";

document.getElementById("btnAdicionar").addEventListener("click", increment);
document.getElementById("btnSubtrair").addEventListener("click", decrement);

function atualizar()
{
    currentNumber >= 0 ? currentNumberWrapper.style.color = "blue" 
    : currentNumberWrapper.style.color = "red";

    // if (currentNumber >= 0)
    //     currentNumberWrapper.style.color = "blue";
    // else
    //     currentNumberWrapper.style.color = "red";

    currentNumberWrapper.innerHTML = currentNumber;
}

function increment()
{
    currentNumber++;

    if (currentNumber > 10)
        currentNumber = 10;

    atualizar();
}

function decrement()
{
    currentNumber--;
    if (currentNumber < -10)
        currentNumber = -10;
    atualizar();
}