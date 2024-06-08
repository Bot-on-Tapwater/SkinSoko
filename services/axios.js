// import axios from 'axios'


// const axiosInstance = axios.create({
//     baseURL: "http://127.0.0.1:8000/eridosolutions",
//     withCredentials: true,
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json"
//     },
// })

// axiosInstance.interceptors.response.use(
//     (response) => {
//       // Modify the response data or handle the response
//       return response.data;
//     },
//     (error) => {
//       // Handle response errors
//       appStore.errorMessageToShowOnToast = error.response.data.error
//       appStore.showToast()
//       return
//     }
//   );
// // axiosInstance.interceptors.response.use(response => response, error => {
// //     alert(`error => ${error}`);
// //     console.log("axios error ", error);
// // })

// export default axiosInstance