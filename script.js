const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('button');

button.addEventListener('click', add) 
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
  const dayExists = nlwSetup.dayExists(today);
  
  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  alert("Adicionado com sucesso")
  nlwSetup.addDay(today)
}

function save() {
localStorage.setItem('Tiago@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('Tiago@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()
