export default class Validator {


    static validateInputY(field){
        let Y_value = document.getElementById('Y_error');
        if (!(field.trim() === "")) {
            if (/^(0$|-?[0-9]\d*(\.\d*[0-9]$)?|-?0\.\d*[0-9])$/.test(field)) {
                if ((parseInt(field) > -3) && (parseInt(field) < 3)) {
                    return true;
                } else {
                    Y_value.innerHTML =  "Координата Y задается в промежутке от -3 до 3!\n";
                    return false;
                }
            } else {
                Y_value.innerHTML =  "Координата Y задается числом!\n";
                return false;
            }
        } else {
            Y_value.innerHTML =  "Не введена координата Y!\n" ;
            return false;
        }
        return true;
        }

        static yCleanText(){
            let Y_value = document.getElementById('Y_error');
            Y_value.innerHTML = '';
        }


        static validateUserName(login){
            let login_error = document.getElementById('username_error');

            if(login.trim()==''){
                login_error.innerHTML = 'Введите логин!';
                return false;
            }

            if(/^[a-zA-Z1-9]+$/.test(login) === false)
            {
                login_error.innerHTML = 'В логине должны быть только латинские буквы';
                return false;
            }
            if(login.length < 8 || login.length > 20)
            {
                login_error.innerHTML = 'В логине должен быть от 8 до 20 символов';
                return false;
            }
            if(parseInt(login.substr(0, 1)))
            {
                login_error.innerHTML = 'Логин должен начинаться с буквы';
                return false;
            }


            return true;
        }

        static cleanUserNameError(){
            let login_error = document.getElementById('username_error');
            login_error.innerHTML='';
            return;
    }

        static validatePassword(password){
        let password_error = document.getElementById('password_error');
        if (password.trim()===''){
            password_error.innerHTML = 'Введите пароль!'
            return false;
        }
        if (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password)){
            password_error.innerHTML = 'Введите корректный пароль!'
            return false;
        }
        return true;
        }

        static cleanPasswordError(){
            let login_error = document.getElementById('password_error');
            login_error.innerHTML='';
            return;
        }

    }

