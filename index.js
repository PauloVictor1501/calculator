//Adicionar número no display
function appendNumber(n){
  document.querySelector('#display').value += n
}
//Fim adicionar número



//Apagar/limpar display
const button = document.querySelector('#clear')
var hold = false
var contador

function clearDisplay() {
  document.querySelector('#display').value = ''
}

function holdClick() {
  hold = true
  contador = setTimeout(function() {
    if (hold) {
      clearDisplay()
    }
  },500)
}

button.addEventListener('mouseup', function() {
  clearTimeout(contador)
  hold = false
});

button.addEventListener('click', function() {
  if (!hold) {
    deleteLastTerm()
  }
});

function deleteLastTerm() {
    const display = document.getElementById('display');
    const valor = display.value;
    const newvalue = valor.substring(0,valor.length - 1);
    display.value = newvalue;
    }
//Fim apagar/limpar display



//Adicionar operador
function appendOperator(o){
  document.querySelector('#display').value += o
}
//Fim adicionar operador



//Adicionar o parênteses
function addParentheses() {
    const exp = document.getElementById('display')
    const numTest = exp.value
    
    // Adiciona parênteses apenas se o conteúdo atual não estiver vazio
    if (numTest !== '') {
        // Verifica se o último caractere é um número ou parêntese de fechamento
        const lastChar = numTest[numTest.length - 1]
        if (!isNaN(lastChar) || lastChar === ')') {
            exp.value += ')'
        } else {
            exp.value += '('
        }
    }else{
      exp.value += '('
    }
}
//Fim adicionar parênteses



//Cálculo do resultado

function calculateResult(){
  const display = document.querySelector('#display').value
  const result = eval(display)
  document.querySelector('#display').value = result
  function adicionarHistorico(){
    var hist = document.querySelector('.historico')
    hist.innerHTML += `<p id="expr">${display}</p> <p id="result"> =${result}</p>`
  }
  adicionarHistorico()
}
//Fim cálculo do resultado

//Limpar histórico
function clearHist(){
    const hist = document.querySelector('.historico')
    hist.innerHTML = ""
}


//Fim limpar histórico


//Adicionar %
function perCent() {
  var display = document.querySelector('#display').value
  const number = parseFloat(display)
  const result = number / 100
  document.querySelector('#display').value = result
}
//Fim %



//Trocar sinal
function changesimb(){
  var display = document.querySelector('#display').value
  const number = parseFloat(display)
  const result = number*(-1)
  document.querySelector('#display').value = result 
}
//Fim trocar sinal

//Mostrar histórico
const historico = document.querySelector('.historico')
historico.style.visibility == "hidden"
var a = document.getElementById('a')
function mostrarHistorico(){
    if(historico.style.visibility == "visible"){
        historico.style.visibility = "hidden"
        a.innerHTML = '<img id="clock" src="src/clock.webp"git fetch"?" alt="h">'
    }else{
        historico.style.visibility = "visible"
        a.innerHTML = '<img id="calc" src="src/calc.webp"git fetch"?" alt="x">'
    }   
}
//Fim mostrar histórico

