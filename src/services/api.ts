import axios from 'axios'
export const api = axios.create({
  baseURL: 'http://129.146.68.51/aluno3-pfsii',
  // baseURL: 'http://localhost:4003/',
})
