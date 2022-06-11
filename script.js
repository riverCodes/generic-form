const games = document.querySelectorAll(`ul input`)
const terms = document.querySelector(`.container`)
const hr = terms.lastElementChild
const form = document.querySelector(`form`)
const agree = document.querySelector(`#terms`)
let isGameChoiceValid = false

function changeHandler(e) {
  let numberCheck = 0
  games.forEach((game) => {
    if (game.checked === true) {
      numberCheck++
    }
  })
  if (numberCheck > 0) {
    games.forEach((game) => {
      game.required = false
    })
    isGameChoiceValid = true
  } else {
    games.forEach((game) => {
      game.required = true
    })
    isGameChoiceValid = false
  }
}

games.forEach((game) => {
  game.addEventListener(`change`, changeHandler)
})

function obCallback(payload) {
  if (payload[0].isIntersecting === true) {
    agree.disabled = false
    observer.unobserve(hr)
  }
}
const observer = new IntersectionObserver(obCallback, {
  root: terms,
  threshold: 1
})
observer.observe(hr)

function validateForm(e) {
  if (agree.disabled === true) {
    e.preventDefault()
    window.alert(`Please accept the terms and conditions`)
  }
}

form.addEventListener(`submit`, validateForm)