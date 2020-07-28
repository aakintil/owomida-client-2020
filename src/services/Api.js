import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `http://owomida-server.herokuapp.com/`
  })
}
