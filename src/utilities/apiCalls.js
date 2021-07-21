const url = 'http://localhost:3000/'

const getCards = () => {
  fetch(url)
  .then(checkResponse)
}

const checkResponse = response => {
  if (response.ok) {
    return response.json()
  }
  throw new Error ('Response was not ok')
}


export { getCards }
