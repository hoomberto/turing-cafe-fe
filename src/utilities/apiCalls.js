const url = 'http://localhost:3001/api/v1/reservations'

const getCards = () => {
  return fetch(url)
  .then(checkResponse)
}

const postNewRes = (newRes) => {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newRes)
  })
  .then(checkResponse)
}

const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  throw new Error ('Response was not ok')
}

export { getCards, postNewRes }
