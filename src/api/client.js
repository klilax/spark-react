import axios from 'axios';


// const appHeader = {
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   }
// }

const axiosClient = axios.create({
  baseURL: `http://localhost:8000`,
  // headers: {
  //   'Accept': 'application/json',
  //   'Content-Type': 'application/json'
  // }
});

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    let res = error.response;
    if (res.status == 401) {
      console.log("error 401")
    }
  }
)

export default axiosClient;