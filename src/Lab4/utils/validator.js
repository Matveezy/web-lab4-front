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

        static cleanText(){
            let Y_value = document.getElementById('Y_error');
            Y_value.innerHTML = '';
        }




    }

