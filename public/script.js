const modalOver = document.querySelector(".modal-over")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".list__item")
const btns = document.querySelectorAll(".btnEsconder")
const cxEsconder = document.querySelectorAll(".esconder")

for(let card = 0; card < cards.length ; card++ ){
  cards[card].addEventListener("click", function(){
    const id = card
    window.location.href = `/receita/${id}`

  })
}

for(let esc in btns){

  btns[esc].addEventListener("click", function(){
    
    if(cxEsconder[esc].classList.toggle('ativo')){
      btns[esc].innerHTML = 'mostrar'
    }else{
      btns[esc].innerHTML = 'esconder'
    }

  })

}

