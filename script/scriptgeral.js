window.onload = function()
{
    let btExecutar1 = document.getElementById("executar1");
    btExecutar1.addEventListener("click", fatoraNumero);
    let btExecutar2 = document.getElementById("executar2");
    btExecutar2.addEventListener("click", potenciaNumero);
    let btExecutar3 = document.getElementById("executar3");
    btExecutar3.addEventListener("click", somaMil);
    let btExecutar4 = document.getElementById("executar4");
    btExecutar4.addEventListener("click", fabonnaci);
    let btExecutar5 = document.getElementById("executar5");
    btExecutar5.addEventListener("click", primos);

function fatoraNumero(){
    let entrada1 = parseInt(document.getElementById("numFatorial").value);
    let respostas1 = document.getElementById("resposta1");
    var resultveto = 1;
    for (var i = 1;(i <= entrada1);i++)
    {   
        resultveto = resultveto * i;
    }
    respostas1.innerHTML = resultveto;
}
function potenciaNumero(){
    let entrada2 = parseInt(document.getElementById("potencia").value);
    var resultado2 = 1;
    for (var i = 1;(i <= 30);i++)
    {   
       resultado2=Math.pow(entrada2,i);
       document.write(entrada2 + " elevado a " + i + "=" + resultado2 + "<br/>" );  
    } //INVIAVEL usar innerHTML.
}
function somaMil(){
    let respostas3 = document.getElementById("resposta3");
    var somador = 0;
    for (var i = 1;(i <= 1000);i++)
    {   
        if(i%2 == 0)
            somador=i+somador;
    }
    respostas3.innerHTML = somador;
}
function fabonnaci(){
    var flimite = 354224848179261915075; //equivalente ao limite de 100
    var f1 = 0;
    var f2 = 1;
    var f3 = 0;

    while(true){

        if(f3 >= flimite){
            break;
        }else{
            document.write(f3 + "<br>")
            f3 = f2 + f1;
            f1 = f2;
            f2 = f3;
        }
    }
} //inviavel com innerHTML
function primos()
{
    function testePrimo(i) 
    {
        for (var divisor = 2; divisor < i; divisor++) 
        {
        if (i % divisor == 0) 
            return false;
        return true
        };
    }
    for (var i = 2; i < 1000; i++)
    { 
    if (testePrimo(i)) 
        document.write(i + "<br>");
    }
}
}