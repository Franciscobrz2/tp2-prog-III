const ladoA = document.getElementById("ladoA")
const ladoB = document.getElementById("ladoB")
const ladoC = document.getElementById("ladoC")
const boton = document.getElementById("boton")
const resultado = document.getElementById("resultado")
const forma = document.getElementById("forma")
const rectangulo = document.getElementById("rectangulo")
const cuadrado = document.getElementById("cuadrado")

boton.addEventListener("click",()=>{

    cuadrado.style.display = " none"
    rectangulo.style.display = " none"
    forma.style.display = " none"
    const A = parseFloat(ladoA.value)
    const B = parseFloat(ladoB.value)
    const C = parseFloat(ladoC.value)

    if( A<= 0 || B <= 0 || C <= 0){
        window.alert("Los valores no pueden ser negativos o cero")
        return
    }

    if (A == B && B == C){
        const areaCuadrado = A * 2
        resultado.innerText = `El área del terreno es ${areaCuadrado} mts `
        cuadrado.style.display = " flex"
    }else if (A == C){
        const areaRectangulo = parseFloat(A * B)
        resultado.innerText = `El área del terreno es ${areaRectangulo} mts`
        rectangulo.style.display = " flex"
    }else{
        const alturaTriangulo = parseFloat(ladoA.value - ladoC.value)
        const areaTriangulo = parseFloat((alturaTriangulo*ladoB.value) / 2)
        const area = parseFloat((ladoC.value * ladoB.value) + areaTriangulo)
        resultado.innerText = `El área del terreno es ${area} mts`
        forma.style.display = " flex"
    
    }
       
})

