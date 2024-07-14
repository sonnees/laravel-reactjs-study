import $ from 'jquery';
import { createProductApi, deleteProductApi, getProductApi } from '../utils/api';
import Cookies from 'js-cookie';
import {  } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LoadProducts = (navigate, setProducts, setLoading, setPage, loadPage, setSaving) => {

    $(async function (event){
        setLoading(true);
        if (Cookies.get("token")==='') {
            navigate('/login')
            return
        }

        try{
            const response = await getProductApi(loadPage, undefined, undefined);
            console.log(response);

            setPage(response.meta);
            setProducts(response.data);
            setLoading(false);
            return
        } catch(e){
            if (e == "AxiosError: Request failed with status code 401" || e == "AxiosError: Request failed with status code 403") {
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

const CreateProduct = (products, setProducts, setSaving, show, setShow) => {
    $("#form_create").on("submit", async function (event) {
        event.preventDefault();
        if(show) {
            setSaving(true);
            const formData = {};
            let error = false;
            $(this).find('input').each(function () {
                const inputName = $(this).attr('name');
                const inputValue = $(this).val().trim();
                if (inputValue === '') {
                    error = true;
                    setSaving(false);
                    return;
                }
                formData[inputName] = inputValue;
            });
        
            formData['date'] = formData['date'].replace("T", " ") + ":00";

            $(this).find('textarea').each(function () {
                const inputName = $(this).attr('name');
                const inputValue = $(this).val().trim();

                if (inputValue === '') {
                    error = true;
                    setSaving(false);
                    return;
                }

                formData[inputName] = inputValue;
            });

            if(error){
                alert("err")
                setSaving(false);
                return;
            } 

            try{
                const response = await createProductApi(formData);
                products.unshift(response);
                setProducts(products);
                setShow(false);
                setSaving(false);
                return;

            } catch (e){
                alert(e);
                setSaving(false);
                return;
            }
        } else{
            setSaving(false);
        }
        
    });
};

const DeleteProduct = (setLoadDelete, load, setLoad) => {
    $(document).off('click', '.btn-delete').on('click', '.btn-delete', async function (event) {
        event.preventDefault();
        
        const id = this.value;
        setLoadDelete(id);
        
        const conf = confirm(`Bạn có muốn xóa sản phẩm có mã ${id} không?`);
        if (!conf){
            return;
        } 

        try{
            const response = await deleteProductApi(id);
            console.log(response);
            setLoadDelete(0);
            setLoad(load => !load);
        } catch(e){
            setLoadDelete(0);
            alert(e)
            console.log(e);
            return
        }
    });
};

export {
    LoadProducts,
    CreateProduct,
    DeleteProduct
};
