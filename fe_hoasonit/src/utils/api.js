import axios from "../utils/axios.customize"

const loginApi = (data) =>{
    const URL_API = "/api/v1/login"

    return axios.post(URL_API, { ...data })
}

const getProductsApi = (
    page = import.meta.env.VITE_PAGINATION_PAGE,
    per_page = import.meta.env.VITE_PAGINATION_PER,
    sort_direction = import.meta.env.VITE_PAGINATION_SORT
) => {
    const URL_API = `/api/v1/products?page=${page}&per_page=${per_page}&sort_direction=${sort_direction}`
    return axios.get(URL_API)
}

const getProductApi = (
    page = import.meta.env.VITE_PAGINATION_PAGE,
    per_page = import.meta.env.VITE_PAGINATION_PER,
    sort_direction = import.meta.env.VITE_PAGINATION_SORT
) => {
    const URL_API = `/api/v1/product?page=${page}&per_page=${per_page}&sort_direction=${sort_direction}`
    return axios.get(URL_API)
}

const createProductApi = (data) => {
    const URL_API = "/api/v1/product"

    return axios.post(URL_API, { ...data })
}

const deleteProductApi = (data) => {
    console.log(data);
    const URL_API = `/api/v1/product/${data}`

    return axios.delete(URL_API)
}

export {
    loginApi,
    getProductsApi,
    getProductApi,
    createProductApi,
    deleteProductApi,
}
