import * as yup from "yup";
import {CreateAccountProps} from "src/model/CreateAccountProps";
import * as React from "react";

const rePhoneNumber = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

class CreateAccountController {

    private readonly CREATE_ACCOUNT_FIELDS: CreateAccountProps = {
        firstName: 'firstName',
        lastName: 'lastName',
        middleName: 'middleName',
        phone: 'phone',
        email: 'email',
        password: 'password',
        passwordConfirmation: 'passwordConfirmation',
    };

    get fields() {
        return this.CREATE_ACCOUNT_FIELDS;
    }

    get MySchema() {
        return yup.object().shape({
            firstName: yup.string().required(),
            lastName: yup.string().required(),
            middleName: yup.string().optional(),
            phone: yup.string().matches(rePhoneNumber, 'Phone number is not valid'),
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
            passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
        });
    }

    onCheckTermsAndConditions = (checked: boolean, id: string, event: React.ChangeEvent<HTMLInputElement>, setter: (v: boolean) => void): void => {
        if (setter) {
            setter(checked);
        }
    }

    onSubmit = (data: Partial<CreateAccountProps>) => {
        if (data)
            alert(JSON.stringify(data));
    }


    onErrors = (data: any) => {
        // if (data)
        //     alert(JSON.stringify(data));
    }

}


export default new CreateAccountController();
