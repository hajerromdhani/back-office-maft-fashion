import axios from 'axios';

const login = (data) => {
  return dispatch => {
      return axios.post('/api/auth', data)
  }
   
}

export default login
