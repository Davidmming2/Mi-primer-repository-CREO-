// funciones; reutilizar codigo y usar lo justo y 


//sintaxis:
//funciones tradicionales
function suma() {
    num1 = parseInt(prompt("Digite un numero x fa"))
    num2 = parseInt(prompt("Digite un segundo numero"))

    r = num1 + num2
    //alert("El resultado de la suma es de:"+((num1 + num2));
    alert("El resultado de la suma es de " + r)
}


// funcion con parametros
function suma2(n1, n2,t) {// sumar parametros de la funcions
    alert("El resultado de la suma es de " +t+"------"+ (n1 + n2))

}
numero1 = parseInt(prompt("Digite un numero x fa"))
numero2 = parseInt(prompt("Digite un segundo numero"))
txt="suma"
//siempre las funciones deben ser llamadas
suma2(numero1,numero2,txt);

//siempre las funciones deben ser llamadas
suma();