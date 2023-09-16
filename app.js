///////////////*************SELECTOR*///////////////////////////////// */
const selectionArticle = document.querySelector(".selection")



/****secilen elemanların taşıyıcıları */
const yourChoiceDiv = document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")


const messagePar = document.querySelector(".message")
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")

const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainBtn = document.getElementById("play-again")



///////////////////////////VARİABLES**************//////////////////////

let userSelectImage = document.createElement("img")
let pcSelectImage = document.createElement("img")
let pcRandom

const YELLOW = "#ffc538";
const RED = "#fb778b";
const GREEN = "#5ab7ac";


selectionArticle.addEventListener("click", (e) => {
  console.log(e.target.id);
  if(e.target.id){
  userSelectImage.src=`./assets/${e.target.id}.png`
  userSelectImage.alt=e.target.id
  yourChoiceDiv.appendChild(userSelectImage) 
  createPcSelection()

}
})
playAgainBtn.addEventListener("click", () => {
  modalCardSection.style.display ="none"
  window.location.reload()
})

///////////////////////////FUNCİTON*/**/*////////////////////////// */
  const createPcSelection = () => {
    const pcArr = ["rock", "paper", "scissor"]
   pcRandom =pcArr [Math.floor(Math.random() * 3)]
       pcSelectImage.src = `./assets/${pcRandom}.png`
    pcSelectImage.alt = pcRandom 
    pcChoiceDiv.appendChild(pcSelectImage)
    calculateResult()
  }

  const calculateResult = ()=> {
    // console.log(userSelectImage.alt); 
    // console.log(pcSelectImage.alt); 
    if(userSelectImage.alt === pcRandom) {
      draw()
      } else {
        if (userSelectImage.alt === "rock") {
          pcRandom === "paper" ? youLost () : youWin() 
        }else if (userSelectImage.alt === "scissor") {
          pcRandom === "rock" ? youLost() : youWin()
        }else if(userSelectImage.alt === "paper") {
          pcRandom === "scissor" ? youLost(): youWin()
             }
            }
           if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
            openModal()
           }
  }
const draw = () => {
messagePar.textContent = "Berabere"
scoreCardSection.style.color = YELLOW
messagePar.style.backgroundColor = YELLOW
}
const youLost = () => {
  messagePar.textContent = "Kaybettin"
  scoreCardSection.style.color = RED
  messagePar.style.backgroundColor = RED
  pcScoreSpan.textContent++

}
const youWin = () => {

  messagePar.textContent = "Kazandın"
  scoreCardSection.style.color = GREEN
  messagePar.style.backgroundColor = GREEN
  yourScoreSpan.textContent++
}
 

  const openModal = () => {
    modalCardSection.classList.add("show")

    if (yourScoreSpan.textContent === "10") {
    finalMessagePar.textContent = "👏Kazandin👏"
    document.querySelector(".modal").style.backgroundColor = GREEN
    playAgainBtn.style.color = GREEN
 } else {
  finalMessagePar.textContent = "😢Kaybettin😢"
  document.querySelector(".modal").style.backgroundColor = RED
  playAgainBtn.style.color = RED
 }
 }

