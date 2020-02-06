const dataSection = document.querySelector('#boba-fett')
const title = document.querySelector('.name')
const list = document.querySelector("#list")
let starWarsCharacter
let starship
let homeworld

fetch('https://swapi.co/api/people/22/')
//   .then(function (response) {
//     return response.json()
  .then(response => response.json())
  .then(function (data) {
    starWarsCharacter = data
    renderH1()

    return data.starships[0]
  })
  .then(url => fetch(url))
  .then(response => response.json())
  .then(function (data) {
    starship = data

    return starWarsCharacter.homeworld
  })
  .then(url => fetch(url))
  .then(response => response.json())
  .then(function (data) {
    homeworld = data

    renderHomeworld()
    renderHeight()
    renderAge()
    renderStarship()
  })

function renderH1 () {
  const h1El = document.createElement('h1')
  h1El.innerText = starWarsCharacter.name
  title.appendChild(h1El)
}

function renderStarship () {
  const starshipEl = document.createElement('li')
  starshipEl.classList.add('ship')
  starshipEl.innerText = `Starship: ${starship.name}`
  list.appendChild(starshipEl)
}

function renderHomeworld () {
  const homeworldEl = document.createElement('li')
  homeworldEl.classList.add('home')
  homeworldEl.innerText = `Homeworld: ${homeworld.name}`
  list.appendChild(homeworldEl)
}

const img = document.createElement('img')
img.src = 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/BobaFett.jpg'
img.classList.add('photo1')
dataSection.appendChild(img)

function renderHeight () {
  const heightEl = document.createElement('li')
  heightEl.classList.add('height')
  heightEl.innerHTML = `Height (cm): ${starWarsCharacter.height}`
  list.appendChild(heightEl)
}

function renderAge () {
  const ageEl = document.createElement('li')
  ageEl.classList.add('age')
  ageEl.innerHTML = `Birth Year: ${starWarsCharacter.birth_year}`
  list.appendChild(ageEl)
}

const logo = document.createElement('img')
logo.src = "https://www.google.com/search?q=mandalorian%20logo&tbm=isch&tbs=isz%3Am&rlz=1C5CHFA_enUS878US879&hl=en&ved=0CAIQpwVqFwoTCKD98Kydu-cCFQAAAAAdAAAAABAE&biw=1324&bih=656#imgrc=HbzJ5G-BVbDvaM"
logo.classList.add('photo2')
title.appendChild(logo)

// const list = document.createElement("ul")
// dataSection.appendChild(list)
