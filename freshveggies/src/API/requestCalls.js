import { postData } from "./axiosCalls";

export const postCall = (data) => {
  const res = postData(data);
  res.then((val) => {
    if (val.data != undefined) {
      console.log("success");
    } else {
      console.log("error");
    }
  });
};
