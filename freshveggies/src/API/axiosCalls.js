import axios from "axios";
 import {base_url,endPoints} from "./constants";
const axiosApiInstance = axios.create();

export const postData = (data) => {
  const url = base_url+endPoints.userRegister
  return axiosApiInstance
  .post(url,{data})
    .then(response => {
      console.log("response",response);
    })
    .catch(err => {
      console.log("err",err);
    });
};



