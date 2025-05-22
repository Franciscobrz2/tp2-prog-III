const estatura = document.getElementById("estatura")
const peso = document.getElementById("peso")
const boton = document.getElementById("boton")

boton.addEventListener("click", ()=>{
    
    const estaturaLimpia= estatura.value.trim().replaceAll(" ", "").replace(",", ".")
    const estaturaNumber = Number(estaturaLimpia)
    const pesoNumber = Number(peso.value)

    const N130 =  estaturaLimpia.includes(",") || estaturaLimpia.includes(".") ?
    1.30 : 130
   
    
    if (isNaN(estaturaLimpia) ){
        window.alert("La estatura debe ser un numero")
    
    }else if(pesoNumber < 40 && estaturaNumber < N130){
        window.alert("El peso y la estatura no pueden ser menores a 130cm y 40kg")

    }else if( estaturaNumber < N130 ){
        window.alert("La estatura no puede ser menor a 130cm")

    }else if(pesoNumber < 40){
        window.alert("El peso no debe ser menor de 20kg")

    }else if(!estaturaLimpia.includes(".") && !estaturaLimpia.includes(",")){
        const imc = (pesoNumber/ Math.pow(estaturaNumber, 2))
        const parteDecimal = imc.toString().split('.')[1]
        const IMC = parteDecimal.slice(2, 4)
        window.alert(`Su IMC es: ${parseInt(IMC)}`)

    }else{
        const imc = (pesoNumber / Math.pow(estaturaNumber, 2))
        window.alert(`Su IMC es: ${parseInt(imc)}`)
    }

})