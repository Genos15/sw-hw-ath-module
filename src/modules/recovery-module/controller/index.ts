import * as yup from "yup";
import {RecoveryAuthProps} from "src/model/RecoveryAuthProps";
import {RecoveryAuthFormProps} from "src/model/RecoveryAuthFormProps";

class RecoveryController {
    private readonly RECOVERY_FIELDS: RecoveryAuthProps = {
        username: 'username',
        password: 'password',
        passwordConfirmation: 'passwordConfirmation',
    };

    get fields() {
        return this.RECOVERY_FIELDS;
    }

    get MySchema() {
        return yup.object().shape({
            username: yup.string().min(4).required(),
        });
    }

    get MyRenewPasswordSchema() {
        return yup.object().shape({
            password: yup.string().min(6).required(),
            passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
        });
    }

    onSubmit = (data: Partial<RecoveryAuthFormProps>) => {
        //For Both Password recovery and Renew Password
        if (data)
            alert(JSON.stringify(data));
    }

    onErrors = (data: any) => {
        // if (data)
        //     alert(JSON.stringify(data));
    }
}


export default new RecoveryController();
