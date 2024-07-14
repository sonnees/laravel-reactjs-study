import $ from 'jquery';
import { getProductsApi } from '../utils/api';
import Cookies from 'js-cookie';
import {  } from 'react-router-dom';

const LoadProducts = (navigate, setProducts, setLoading, setPage, loadPage) => {

    $(async function (event){
        setLoading(true);
        if (Cookies.get("token")==='') {
            navigate('/login')
            return
        }

        try{
            const response = await getProductsApi(loadPage, undefined, undefined);
            console.log(response);

            setPage(response.meta);
            setProducts(response.data);
            setLoading(false);
            return
        } catch(e){
            if (e == "AxiosError: Request failed with status code 401") {
                navigate('/login')
                return
            }
            setProducts([]);
            setLoading(false);
            alert("Load products failed" + e);
            return
        }
    })
};

export {
    LoadProducts
};
