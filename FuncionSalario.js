function salario() {
    sala = parseInt(prompt("Digita tu salario basico"))

    hnormal = (sala / 240)
    alert("El salario basico es de " + sala)


}

function diurna() {
    diur = parseInt(prompt("Digite las horas extras diurnas"))
    diur = diur * (hnormal * 1.25)
}

function nocturna() {
    noctu = parseInt(prompt("Digita las horas nocturnas"))
    noctu = noctu * (hnormal * 1.35)
}

function festivas() {
    festi = parseInt(prompt("Digite las horas festivas"))
    festi = festi * (hnormal * 1.75)

}

function domuinicas() {
    domi = parseInt(prompt("Digite las horas dominicales"))
    domi = domi * (hnormal * 2.0)

}

function diasfalto() {
    falto_dias = parseInt(prompt("Digite los dias que falto "))
    falto_dias = sala - (sala / 30)
}


function arreglos() {
    liqui = falto_dias + diur + noctu + festi + domi
    ingresos = diur + noctu + festi + domi
    salud = liqui * 0.08

    descuentos = salud + falto_dias
    sala = liqui - salud
    alert("los ingresos extras son" + ingresos)
    alert("Los descuentos son" + descuentos)

    alert("Total a pagar es de " + sala)
}




salario();
diurna();
nocturna();
festivas();
domuinicas();
diasfalto();
arreglos();