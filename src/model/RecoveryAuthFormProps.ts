import {FieldElement, FieldValues, Ref} from "react-hook-form/dist/types/fields";
import {RegisterOptions} from "react-hook-form/dist/types/validator";
import {SubmitHandler} from "react-hook-form/dist/types/form";
import * as React from "react";
import {FieldErrors} from "react-hook-form/dist/types/errors";
import {RecoveryAuthProps} from "./RecoveryAuthProps";

export type RecoveryAuthFormProps = {
    register<TFieldElement extends FieldElement<RecoveryAuthProps>>(ref: (TFieldElement & Ref) | null, rules?: RegisterOptions): void;
    handleSubmit: <TSubmitFieldValues extends FieldValues = RecoveryAuthProps>(onValid: SubmitHandler<TSubmitFieldValues>, onInvalid?: any) => (e?: React.BaseSyntheticEvent) => Promise<void>;
    errors: FieldErrors<RecoveryAuthProps>;
}
