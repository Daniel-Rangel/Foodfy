const cards = document.querySelectorAll(".list__item-js")
const btns = document.querySelectorAll(".recipe__btn")
const cxEsconder = document.querySelectorAll(".recipe__preparation")
const includInput = document.querySelectorAll(".add-input-js")
const boxInputs = document.querySelectorAll(".box-js")

btns.forEach((x, index) => {
  btns[index].addEventListener('click', () => {
    if(cxEsconder[index].classList.toggle('ativo')){
      btns[index].innerHTML = 'mostrar'
    }else{
      btns[index].innerHTML = 'esconder'
    }
  })
})

cards.forEach( (x , index) => {
  cards[index].addEventListener('click', ()=>{
    const id = index
    window.location.href = `/receitas/${id}`
  })
})

boxInputs.forEach((x , i)=>{
  includInput[i].addEventListener('click', ()=>{
    let input = document.createElement('input')
    input.type = 'text'
    input.name = boxInputs[i].firstElementChild.getAttribute('name')
    input.classList.add('form__input')
    boxInputs[i].appendChild(input)
  })
})