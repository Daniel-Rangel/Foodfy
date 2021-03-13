const cards = document.querySelectorAll(".list__item-js")
const btns = document.querySelectorAll(".recipe__btn")
const cxEsconder = document.querySelectorAll(".recipe__preparation")


btns.forEach((elemento, index) => {
  btns[index].addEventListener('click', () => {
    if(cxEsconder[index].classList.toggle('ativo')){
      btns[index].innerHTML = 'mostrar'
    }else{
      btns[index].innerHTML = 'esconder'
    }
  })
})

cards.forEach( (elemento , index) => {
  cards[index].addEventListener('click', ()=>{
    const id = index
    window.location.href = `/receitas/${id}`
  })
})
