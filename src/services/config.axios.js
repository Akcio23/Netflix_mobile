
import axios from 'axios'

const auth = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=92034ab2&`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export default auth
