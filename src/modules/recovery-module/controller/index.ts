import * as yup from "yup";
import {RecoveryAuthProps} from "src/model/RecoveryAuthProps";
import {RecoveryAuthFormProps} from "src/model/RecoveryAuthFormProps";

class RecoveryController {
    private readonly RECOVERY_FIELDS: RecoveryAuthProps = {
        username: 'username',
    };

    get fields() {
        return this.RECOVERY_FIELDS;
    }

    get MySchema() {
        return yup.object().shape({
            username: yup.string().min(4).required(),
        });
    }

    onSubmit = (data: Partial<RecoveryAuthFormProps>) => {
        if (data)
            alert(JSON.stringify(data));
    }

    onErrors = (data: any) => {
        // if (data)
        //     alert(JSON.stringify(data));
    }
}


export default new RecoveryController();
