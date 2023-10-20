import axios from "axios";



const api = axios.create({
    baseURL:"api-conta-certa-production.up.railway.app"
})


export default api