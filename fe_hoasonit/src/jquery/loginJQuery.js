import $ from 'jquery';
import { loginApi } from '../utils/api';

const loginJQ = (login, logout, navigate, setLoading) => {
    $(async function (){
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
                setLoading(false)
                return false;
            }

            formData[inputName] = inputValue;
        });

        if (error) return;

        try {
            $("#error").text('');
            const response = await loginApi(formData);
            await login(response.user, response.access_token) // use context
            setLoading(false)
            navigate('/home')
        } catch (e) {
            $("#error").text(`Gmail or password ... not exacty`);
            setLoading(false)
            return
        }
    });
};

export {
    loginJQ
};
