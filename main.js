const dataSection = document.querySelector('#boba-fett')
const title = document.querySelector('.name')
// const topLogo = document.querySelector(".logo")
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

// const logo = document.createElement('img')
// logo.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcults3d.com%2Fen%2F3d-model%2Fart%2Fmythosaur-skull-mandalorian-logo-stencil-sheet&psig=AOvVaw03ejG3yI2AqXfJhjVYhVOx&ust=1581042586819000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiG8-Lwu-cCFQAAAAAdAAAAABAD"
// logo.classList.add('photo2')
// topLogo.appendChild(logo)

// const list = document.createElement("ul")
// dataSection.appendChild(list)
