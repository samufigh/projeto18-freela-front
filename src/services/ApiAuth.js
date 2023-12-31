import axios from "axios"

// const BASE_URL = "http://localhost:5000"
const BASE_URL = import.meta.env.VITE_API_URL

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
    return promise
}

function addPet(body, auth){
    const promise = axios.post(`${BASE_URL}/model`, body, auth)
    return promise
}

function getMyPets(auth){
    const promise = axios.get(`${BASE_URL}/models/me`, auth)
    return promise
}

function isAvailabled(body, auth, id){
    const promise = axios.put(`${BASE_URL}/models/${id}`, body, auth)
    return promise
}

function getInfoUser(auth){
    const promise = axios.get(`${BASE_URL}/user/info`, auth)
    return promise
}

function attInfoUser(body, auth){
    const promise = axios.put(`${BASE_URL}/user/info`,body,  auth)
    return promise
}


const apiAuth = { login, signUp, pets, pet, addPet, getMyPets, isAvailabled, getInfoUser, attInfoUser } 
export default apiAuth