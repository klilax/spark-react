import axios from 'axios';
// const storedToken = localStorage.getItem('access_token');
// const token =  (storedToken !== null) ? storedToken : '';
// const token = localStorage.getItem('access_key')

// const appHeader = {
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Authorization': `Basic ${token}`
//   }
// }

const axiosClient = axios.create({
  baseURL: `http://localhost:8000`
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status === 401) {
      console.log("error 401 from the interceptor")
    }
  }
)

export default axiosClient;