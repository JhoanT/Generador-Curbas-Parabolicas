var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton")
boton.addEventListener("click", dibujoporclick);


var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = 300;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal); 
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoporclick()
{
var xxx = parseInt(texto.value);
var lineas = xxx;
var l = 0;
var yi, xf;
var yf, xi;
var espacio = ancho / lineas;
var colore = "pink"


for(l = 0; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colore, 0, yi, xf, 300);
} 
dibujarLinea(colore, 300, 1, 1, 1 )
dibujarLinea(colore, 300, 300, 300, 1)

for(l = 0; l < lineas; l++)
{
    yf = espacio * l;
    xi = espacio * (l + 1);
    dibujarLinea(colore, xi, 0, 300, yf);
} 
dibujarLinea(colore, 300, 1, 1, 1 )
dibujarLinea(colore, 300, 300, 300, 1)

}