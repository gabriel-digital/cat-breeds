import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.thecatapi.com/v1`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': process.env.CATBREEDS_API_KEY,
  },
})

export default {
  getBreeds(limit, page) {
    return apiClient.get(`/breeds?limit=${limit}&page=${page - 1}`)
  },
  getPicture(breed) {
    // TODO perhaps add a cache here with a default fallback to an api call
    return apiClient.get(`/images/search?breed_id=${breed}`)
  },
}
