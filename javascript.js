//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTentar = document.querySelector("#btnTentar")
const btnTentarDenovo = document.querySelector("#btnTentarDenovo")
let numeroAleatorio = Math.round(Math.random() * 10)
let numTentativas = 1

// funções
function toogleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function resetarAoClicar() {
    toogleScreen()
    numTentativas = 1
    numeroAleatorio = Math.round(Math.random() * 10)
}

function botaoTentar(event) {
    event.preventDefault()
    
    const inputNumber = document.querySelector("#inputNumber")
    
    if(inputNumber.value < 0 || inputNumber.value > 10) {
        alert("O número digitado não está entre 0 e 10")
        numTentativas -= 1
    }
    else if(inputNumber.value == "" || inputNumber.value == null)  {
        numTentativas -= 1
    }
    else if(Number(inputNumber.value) == numeroAleatorio) {
        toogleScreen()
        document.querySelector(".screen2 h2").innerText = "Acertou em " + numTentativas + " tentativas"
    }

    inputNumber.value = ""
    numTentativas++
}

// eventos
btnTentar.addEventListener("click", botaoTentar)

btnTentarDenovo.addEventListener("click", resetarAoClicar)

document.addEventListener("keypress", function(e) {
    if(e.key == "Enter" && screen1.classList.contains("hide")) {
        resetarAoClicar()
    }
})