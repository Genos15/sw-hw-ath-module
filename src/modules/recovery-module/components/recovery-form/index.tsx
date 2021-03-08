import * as React from "react";
import {memo} from "react";
import {RecoveryAuthFormProps} from "src/model/RecoveryAuthFormProps";
import RecoveryController from "../../controller";
import {CustomForm} from "src/modules/login-module/components/auth/auth-style";
import {FormControl} from "src/style/FormControl";
import {CustomInput} from "src/style/CustomInput";
import {buildKey} from "src/utils/unique-key";
import {LoginButton} from "src/style/LoginButton";
import {ArrowRight32} from "@carbon/icons-react";
import {useTranslation} from "react-i18next";

const RecoveryForm: React.FC<RecoveryAuthFormProps> = ({register, errors, handleSubmit}) => {

    const {t} = useTranslation(undefined, {useSuspense: false});

    return <CustomForm onSubmit={handleSubmit(RecoveryController.onSubmit, RecoveryController.onErrors)}>
        <FormControl>
            <CustomInput
                helperText={t("username-helper-text")}
                id={buildKey()}
                ref={register}
                name={RecoveryController.fields.username}
                invalid={errors.username !== undefined}
                invalidText={t('required-field-text')}
                labelText={t('username-title') as string}
                placeholder={t('username-placeholder') as string}/>
        </FormControl>
        <LoginButton
            kind="primary"
            tabIndex={0}
            renderIcon={ArrowRight32}
            iconDescription="Recovery Sensor Kit"
            type="submit">
            {t('continue-text')}
        </LoginButton>
    </CustomForm>;
};

export default memo<RecoveryAuthFormProps>(RecoveryForm);
