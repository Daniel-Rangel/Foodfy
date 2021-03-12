const modalOver = document.querySelector(".modal-over")
const modal = document.querySelector(".modal")
const cards = document.querySelectorAll(".list__item-js")
const btns = document.querySelectorAll(".btnEsconder")
const cxEsconder = document.querySelectorAll(".esconder")

for(let card in cards ){
  cards[card].addEventListener("click", function(){
    const id = card
    window.location.href = `/receitas/${id}`

    console.log(id)
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

