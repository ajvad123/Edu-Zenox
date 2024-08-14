import { commonApi } from "./commonApi";
import base_url from "./base_Url";


export const userContact=async(data)=>{

    return commonApi("POST",`${base_url}/contactUs`,data,"")
}

export const userDetails=async(data)=>{

    return commonApi("POST",`${base_url}/students`,data,"")
}