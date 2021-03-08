import * as yup from "yup";
import {LoginAuthProps} from "src/model/LoginAuthProps";
import {LoginAuthFormProps} from "src/model/LoginAuthFormProps";


class LoginAuthController {

    private readonly LOGIN_FIELDS: LoginAuthProps = {
        username: 'username',
        password: 'password',
    };

    get fields() {
        return this.LOGIN_FIELDS;
    }

    get MySchema() {
        return yup.object().shape({
            username: yup.string().min(4).required(),
            password: yup.string().min(6).required(),
        });
    }

    onSubmit = (data: Partial<LoginAuthFormProps>) => {
        if (data)
            alert(JSON.stringify(data));
    }

    onErrors = (data: any) => {
        // if (data)
        //     alert(JSON.stringify(data));
    }

}


export default new LoginAuthController();
