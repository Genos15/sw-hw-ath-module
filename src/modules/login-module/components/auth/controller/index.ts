import * as yup from "yup";
import {CreateAccountProps} from "src/model/CreateAccountProps";
import {LoginAuthProps} from "src/model/LoginAuthProps";


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


    onSubmit = (data: Partial<CreateAccountProps>) => {
        // if (data)
        //     alert(JSON.stringify(data));
    }

    onErrors = (data: any) => {
        // if (data)
        //     alert(JSON.stringify(data));
    }

}


export default new LoginAuthController();
