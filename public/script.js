const cards = document.querySelectorAll(".list__item-js")
const btns = document.querySelectorAll(".btn--recipe")
const cxEsconder = document.querySelectorAll(".recipe__preparation")
const btnIncludInput = document.querySelectorAll(".add-input-js")
//const deleteInput = document.querySelectorAll(".del-input-js")
const boxInputs = document.querySelectorAll(".box-js")
const form = document.querySelector(".form-js")

btns.forEach((x, index) => {
  btns[index].addEventListener('click', () => {
    if(cxEsconder[index].classList.toggle('ativo')){
      btns[index].innerHTML = 'mostrar'
    }else{
      btns[index].innerHTML = 'esconder'
    }
  })
})

cards.forEach( (x , i) => {
  cards[i].addEventListener('click', ()=>{
    const id = cards[i].getAttribute('id')
    console.log(i)
    window.location.href = `/recipes/${id}`
  })
})

//craiação
boxInputs.forEach((x , i)=>{

  btnIncludInput[i].addEventListener('click', ()=>{

    let nameText = boxInputs[i].firstElementChild.getAttribute('name')
    
    let inputText = createInput('text', nameText , 'form__input')
        
    boxInputs[i].appendChild(inputText)
  })
})

const createInput = (type, denomination, classes ) => {

  let cls = classes.split(' ')
  let input = document.createElement('input')

  input.type = type
  input.name = denomination

  for( clas of cls){
    input.classList.add(clas)
  }

  return input
}

let editOrDel = (action) =>{
  form.setAttribute('action', action)
}