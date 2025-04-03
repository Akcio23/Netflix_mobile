
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

const auth = axios.create({
  baseURL: `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&`,
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

export default auth
