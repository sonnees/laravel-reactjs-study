import $ from 'jquery';
import { loginApi } from '../utils/api';
import Cookies from 'js-cookie';

const loginJQ = (login, logout, navigate, setLoading) => {
    $(async function(){
        await logout();
    })
    $("#logo").on("click", async function (event) {
        navigate('/home', { replace: false });
    });

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
            await login(response.user) // use context
            Cookies.set(
                'token',
                response.access_token,
                { expires: response.expires_in / 3600 / 24 }
            );
            setLoading(false)
            $("#logo").trigger("click");
            // navigate('/home', { forceRefresh: true })
        } catch (e) {
            alert("Login failed" + e);
            return
        }
    });
};

export {
    loginJQ
};
