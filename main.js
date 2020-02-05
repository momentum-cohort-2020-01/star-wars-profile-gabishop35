const dataSection = document.querySelector('#bobba-fett')
let starWarsCharacter

fetch('https://swapi.co/api/people/22/')
  .then(function (response) {
    return response.json()
  })
// .then(response => response.json())
  .then(function (data) {
    starWarsCharacter = data
    const img = document.createElement('img')
    img.src = 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/BobaFett.jpg'
    img.classList.add('photo1')
    dataSection.appendChild(img)
    renderH2()
    console.log(renderH2)
    return data.url
  })
//   .then(url => fetch(url))
//   .then(response => response.json())

// })

function renderH2 () {
  const h2El = document.createElement('h2')
  h2El.innerText = starWarsCharacter.data
  dataSection.appendChild(h2El)
}
