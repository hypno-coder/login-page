import axios from 'axios'
import { toast } from 'react-toastify';


const authRequest = (name, pass) => {
  const url = '/api/authenticate'
  const authData = {
    "username": name,
    "password": pass,
  }
  axios.post(url, { ...authData }
  ).then(resp => {
    localStorage.setItem('resp', JSON.stringify(resp.data))
    toast.success("УСПЕХ")
  }).catch(error => {
    toast.warn(error.message)
  })
}

export default authRequest
