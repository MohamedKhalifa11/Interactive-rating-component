let rateNum = document.querySelectorAll('.rateNum')
let submitBtn = document.querySelector('.submit')
let outputText = document.querySelector('.yourRate p')
let ratingState = document.querySelector('.rating-state')
let thankState = document.querySelector('.thankState')

let clickedText = ''

rateNum.forEach(div => {
  div.addEventListener('click', function () {
    clickedText = this.textContent
    rateNum.forEach(div => {
      div.style.backgroundColor = ''
      div.style.color = ''
    })
    this.style.backgroundColor = 'hsl(25, 97%, 53%)'
    this.style.color = 'hsl(0, 0%, 100%)'
  })
})

submitBtn.addEventListener('click', function () {

  if (clickedText === '') {
    alert("Please rate first before submitting.");
  } else {
    outputText.textContent = `You selected ${clickedText} out of 5`
    ratingState.style.display = 'none'
    thankState.style.display = 'flex'
  }
})