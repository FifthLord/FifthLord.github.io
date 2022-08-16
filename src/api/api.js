
import * as axios from "axios";

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   /*headers: {
      "API-KEY": "1cec7c1e-94f4-4b69-a2ac-bb929116b70c"
   }*/
});

const userAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
         return response.data;
      });
   }
}

/*
const followAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`follow/${u.id}`).then(response => {
         return response.data;
      });
   }
}*/



export default userAPI;