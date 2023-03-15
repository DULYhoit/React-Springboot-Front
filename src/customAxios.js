import axios from 'axios'; // 액시오스

export default function customAxios(url,) {
  axios.get(`http://localhost:8080${url}`,{
    params:{
      
    }
  })
    
}