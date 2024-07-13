import $ from 'jquery';
import { loginApi } from '../utils/api';
import Cookies from 'js-cookie';
import {  } from 'react-router-dom';

const homeJQuery = (login, navigate, setLoading) => {

    $("#form_login").on("submit", async function (event) {
        event.preventDefault();
        setLoading(true);
        
        const formData = {};
        let error = false;
        $(this).find('input').each(function () {
            const inputName = $(this).attr('name');
            const inputValue = $(this).val().trim();

            if (inputValue === '') {
                $("#error").text(`Field '${inputName}' is required.`);
                error = true;
                return false;
            }

            formData[inputName] = inputValue;
        });

        if (error) return;

        try {
            const response = await loginApi(formData);
            Cookies.set(
                'token',
                response.access_token,
                { expires: response.expires_in / 3600 / 24 }
            );
            login(response.user) // use context
            setLoading(false)
            navigate('/home');
            
        } catch (e) {
            alert("Login failed" + e);
            return
        }
    });
};

export {
    homeJQuery
};
