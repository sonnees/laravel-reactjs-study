import axios from "../utils/axios.customize"

const loginApi = (data) =>{
    const URL_API = "/api/v1/login"

    return axios.post(URL_API, { ...data })
}

const getProductsApi = () => {
    const URL_API = "/api/v1/product"

    return axios.get(URL_API)
}

export {
    loginApi
}
