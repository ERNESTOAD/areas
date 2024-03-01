function triangulo(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let res= (num1*num2)/2;
    document.getElementById('res').value=res;
}
function cuadrado(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let res= num1*num2;
    document.getElementById('res').value=res;
}
function rectangulo(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let res= num1*num1;
    document.getElementById('res').value=res;
}
function circulo(){
    let num1= Number(document.getElementById('n1').value);
    let num2=Number(document.getElementById('n2').value);
    let b=num1*num1;
    let res= b*3.1416;
    document.getElementById('res').value=res;
}