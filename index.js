let igual = document.querySelector("#igual")
let visor = document.getElementById("visor")
let soma = document.getElementById("soma")
let sub = document.getElementById("subtracao")
let mult = document.getElementById("multiplicacao")
let div = document.getElementById("divisao")
let resetVisor = document.querySelector("#resetVisor")
// let fator = document.querySelector("#fatorial")
let simbolo;
let loop = 9
let arr = []
let valor1;
let valor2;

capturaid()
function capturaid(){
     // loop que captura o id já que todos são num e um número, ou seja num e [i] 
    // apartir da captura imprime na tela o valor do [i] quando é clicado 
   for(let i = 0; i <=loop; i++){
    let valor = document.querySelector("#num" + [i])

    valor.addEventListener('click', ()=>{
       valor1 = visor.innerHTML += [i]
      //  arr.push(valor1)
    }) 
  }
}

resetVisor.addEventListener('click', ()=>{
   visor.innerHTML=""; 
   valor1 = 0; 
   valor2 = 0; 
})

//FUNÇÃO DE SOMA 
soma.addEventListener('click', simboloConta)
function simboloConta(){
   //Passa o primeiro valor que foi digitado para uma nova variavel "valor2"
   valor2 = valor1

   visor.innerHTML = ""

   simbolo = "soma"
}

//FUNÇÃO DE SUBTRAÇÃO
sub.addEventListener('click', simboloContaMenos)
function simboloContaMenos(){
   valor2 = valor1

   visor.innerHTML = ""

   simbolo = "subtracao"
}

//FUNÇÃO DE MULTIPLICAÇÃO
mult.addEventListener('click', simboloContaVezes)
function simboloContaVezes(){
   valor2 = valor1

   visor.innerHTML = ""

   simbolo = "multiplicacao"
}

//FUNÇÃO DE DIVISÃO
div.addEventListener('click', simboloContaDivisao)
function simboloContaDivisao(){
   valor2 = valor1

   visor.innerHTML = ""

   simbolo = "divisao"
}

igual.addEventListener('click', ()=>{
 
   let total = ""; 
   switch (simbolo) {
      case "soma":
       total += visor.innerHTML = (parseInt(valor1) + parseInt(valor2))
       valor1 = total      
      break;

      case "subtracao": 
       total += visor.innerHTML = (parseInt(valor2) - parseInt(valor1))
       valor1 = total
      break;

      case "multiplicacao": 
       total += visor.innerHTML = (parseInt(valor1) * parseInt(valor2))
       valor1 = total      
      break;

      case "divisao":
       total += visor.innerHTML = (parseInt(valor2) / parseInt(valor1))
       valor1 = total  
      break

      default:
         alert("Insira valores válidos")   
      break;
   }
})
