import api from "./axios"

export const registerUser=(data)=>{
    return api.post("api/auth/register", data)
}

export const loginUser=(data)=>{
  return  api.post("auth/api/login", data)
}

export const getProfile=(data)=>{
    return api.get("auth/profile")
}
