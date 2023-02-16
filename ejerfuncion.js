//return valor de la funcion

function suma() {
    num1=parseInt(prompt("Digite un numero"))
    num2=parseInt(prompt("Digite otro numero"))
    //alert("El resultado es" +(num1+num2))

    
    return num1+num2

}
//funcion que pida valores
function suma2(n1,n2) {
    //como poner la function a ejecutar
    //suma()

    return suma()+ n1+n2
}

num1=parseInt(prompt("Digite un valor "))
num2=parseInt(prompt("Digite otro  valor "))


//otra forma:
//r=suma2(num1+num2)


//otra forma de imprimir funciones
alert(suma2(num1,num2))


//llamamos a la suma
//alert(suma()+100)