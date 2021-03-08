import * as React from "react";
import {memo} from "react";
import {RecoveryAuthFormProps} from "src/model/RecoveryAuthFormProps";
import {useTranslation} from "react-i18next";
import RecoveryController from "src/modules/recovery-module/controller";
import {CustomForm} from "src/modules/login-module/components/auth/auth-style";
import {FormControl} from "src/style/FormControl";
import {CustomInput} from "src/style/CustomInput";
import {buildKey} from "src/utils/unique-key";
import {LoginButton} from "src/style/LoginButton";
import {ArrowRight32} from "@carbon/icons-react";

const RenewPasswordForm: React.FC<RecoveryAuthFormProps> = ({register, errors, handleSubmit}) => {

    const {t} = useTranslation(undefined, {useSuspense: false});

    return <CustomForm onSubmit={handleSubmit(RecoveryController.onSubmit, RecoveryController.onErrors)}>
        <FormControl>
            <CustomInput.PasswordInput
                helperText={t("password-helper-text")}
                id={buildKey()}
                ref={register}
                invalidText={t('invalid-password-field-text')}
                invalid={errors.password !== undefined}
                name={RecoveryController.fields.password}
                labelText={t('password-title') as string}
                hidePasswordLabel={t('hide-password-text')}
                showPasswordLabel={t('show-password-text')}
                placeholder={t('password-placeholder') as string}/>
        </FormControl>
        <FormControl>
            <CustomInput.PasswordInput
                id={buildKey()}
                invalidText={t('invalid-password-field-confirmation-text')}
                ref={register}
                invalid={errors.passwordConfirmation !== undefined}
                name={RecoveryController.fields.passwordConfirmation}
                labelText={t('confirm-password-text') as string}
                hidePasswordLabel={t('hide-password-text')}
                showPasswordLabel={t('show-password-text')}
                placeholder={t('confirm-password-placeholder-text') as string}/>
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
}


export default memo<RecoveryAuthFormProps>(RenewPasswordForm);
