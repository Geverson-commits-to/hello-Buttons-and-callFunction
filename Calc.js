function soma(){
var Entrada = parseInt(document.getElementById("Entrada").value)
var Entrada_2 = parseInt(document.getElementById("Entrada_2").value);
var total = Entrada + Entrada_2;
Saida(total);
}
function Sub(){
var Entrada = parseInt(document.getElementById("Entrada").value)
var Entrada_2 = parseInt(document.getElementById("Entrada_2").value);
var total = Entrada - Entrada_2;
Saida(total);
}
function Div(){
var Entrada = parseInt(document.getElementById("Entrada").value)
var Entrada_2 = parseInt(document.getElementById("Entrada_2").value);
var total = Entrada / Entrada_2;
Saida(total);
}
function Mult(){
var Entrada = parseInt(document.getElementById("Entrada").value)
var Entrada_2 = parseInt(document.getElementById("Entrada_2").value);
var total = Entrada * Entrada_2;
Saida(total);
}
function Saida(exec){
   document.getElementById("resultado").value = exec;
}