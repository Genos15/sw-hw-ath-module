import {FieldElement, FieldValues, Ref} from "react-hook-form/dist/types/fields";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {SubmitHandler} from "react-hook-form/dist/types/form";
import * as React from "react";
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {CreateAccountProps} from "src/model/CreateAccountProps";

export type CreateAccountFormProps = {
    register<TFieldElement extends FieldElement<CreateAccountProps>>(ref: (TFieldElement & Ref) | null, rules?: RegisterOptions): void;
    handleSubmit: <TSubmitFieldValues extends FieldValues = CreateAccountProps>(onValid: SubmitHandler<TSubmitFieldValues>, onInvalid?: any) => (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<CreateAccountProps>;
}
