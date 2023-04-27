//Dar un numero valor al INPUT "resultado" en la pag HTML
function darValor(valor){
    document.getElementById("resultado").value = valor
}

//Obtener el vcalor actual del INPUT "resultado" en la pag HTML
function obtenerValor(){
    var nro = document.getElementById("resultado").value
    return nro
}

//Adjunta un nuevo valor a la derecha
function adjuntarValor(numero){
    var actualNumero =  obtenerValor()
    darValor(actualNumero + numero)
}


function BorrarTodo(){
    var vacio = ""
    darValor(vacio)
                    
}





function Factorial(){
    var numero = obtenerValor()
    var i =1
    var resultado =1
    while (i <= numero){
        resultado = resultado * 1
        i = i +1 
    }
    darValor(resultado)
}