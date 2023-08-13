import axios from "axios"

const BASE_URL = "http://localhost:5000"

function login(body) {
    const promise = axios.post(`${BASE_URL}/signin`, body)
    return promise
}

function signUp(body) {
    const promise = axios.post(`${BASE_URL}/signup`, body)
    return promise
}

function pets(){
    const promise = axios.get(`${BASE_URL}/models`)
    return promise
}

function pet(id){
    const promise = axios.get(`${BASE_URL}/models/${id}`)
    console.log(id)
    return promise
}

const apiAuth = { login, signUp, pets, pet } 
export default apiAuth