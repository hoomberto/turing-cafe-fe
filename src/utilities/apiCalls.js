const getCards = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(checkResponse)
}

const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  throw new Error ('Response was not ok')
}

export { getCards }
