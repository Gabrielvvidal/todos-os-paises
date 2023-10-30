function createCountryCard(country) {
  const card = document.createElement('div')
  card.classList.add('cartao-pais')

  const countryName = country.name.common
  const name = document.createElement('h2')
  name.classList.add('nome-pais')
  name.textContent = countryName

  const flag = document.createElement('img')
  flag.classList.add('tamanho-bandeira')
  flag.src = country.flags.png
  flag.alt = `flag of ${countryName}`

  card.append(name, flag)
  document.querySelector('#paises').append(card)
}

async function getCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all')
  const countries = await response.json()

  countries.forEach(createCountryCard)
}

getCountries()