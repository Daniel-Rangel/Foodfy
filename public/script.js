const cards = document.querySelectorAll(".list__item-js")
const btns = document.querySelectorAll(".btn--recipe")
const cxEsconder = document.querySelectorAll(".recipe__preparation")
const includInput = document.querySelectorAll(".add-input-js")
const deleteInput = document.querySelectorAll(".del-input-js")
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
    window.location.href = `/recipes/${id}`
  })
})

boxInputs.forEach((x , i)=>{
  let deleteBtnInput = document.querySelectorAll(".delete-js")

  includInput[i].addEventListener('click', ()=>{

    let nameText = boxInputs[i].firstElementChild.getAttribute('name')
    
    let inputButton = createInput('button', 'x', '' , 'btn btn--delete delete-js')
    let inputText = createInput('text', '', nameText , 'form__input del-input-js')

    boxInputs[i].style.display = 'grid'
    boxInputs[i].style.gridTemplateColumns = '1fr 45px'

    if(deleteBtnInput[i].classList.contains('btn--esconder')){
      deleteBtnInput[i].classList.remove('btn--esconder')
    }
    
    boxInputs[i].appendChild(inputText)
    boxInputs[i].appendChild(inputButton)

    deleteBtnInput = document.querySelectorAll(".delete-js")
  })

  deleteBtnInput[i].addEventListener('click', () => {
    console.log(deleteBtnInput.length)
    console.log(x)
  })
  
})

const createInput = (type, val, denomination, classes ) => {

  let cls = classes.split(' ')
  let input = document.createElement('input')

  input.type = type
  input.value = val
  input.name = denomination

  for( clas of cls){
    input.classList.add(clas)
  }

  return input
}
