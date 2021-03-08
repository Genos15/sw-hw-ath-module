import * as React from "react";
import {memo} from "react";
import {LoginAuthFormProps} from "src/model/LoginAuthFormProps";
import {CustomForm} from "src/modules/login-module/components/auth/auth-style";
import {FormControl} from "src/style/FormControl";
import {CustomInput} from "src/style/CustomInput";
import {buildKey} from "src/utils/unique-key";
import {TopRightLink} from "src/style/TopRightLink";
import {Checkbox} from "carbon-components-react";
import {LoginButton} from "src/style/LoginButton";
import {ArrowRight32} from "@carbon/icons-react";
import {useTranslation} from "react-i18next";
import LoginAuthController from "src/modules/login-module/components/auth/controller";

const LoginAuthForm: React.FC<LoginAuthFormProps> = ({register, handleSubmit, errors}) => {
    const {t} = useTranslation(undefined, {useSuspense: false});


    return <CustomForm onSubmit={handleSubmit(LoginAuthController.onSubmit, LoginAuthController.onErrors)}>
        <FormControl>
            <CustomInput
                helperText={t("username-helper-text")}
                id={buildKey()}
                ref={register}
                name={LoginAuthController.fields.username}
                invalid={errors.username !== undefined}
                invalidText={t('required-field-text')}
                labelText={t('username-title') as string}
                placeholder={t('username-placeholder') as string}/>
        </FormControl>
        <FormControl>
            <TopRightLink to="/recovery">
                {t('forgot-password-text')}
            </TopRightLink>
            <CustomInput.PasswordInput
                helperText={t("password-helper-text")}
                id={buildKey()}
                ref={register}
                invalidText={t('invalid-password-field-text')}
                invalid={errors.password !== undefined}
                name={LoginAuthController.fields.password}
                labelText={t('password-title') as string}
                hidePasswordLabel={t('hide-password-text')}
                showPasswordLabel={t('show-password-text')}
                placeholder={t('password-placeholder') as string}/>
        </FormControl>
        <FormControl>
            <Checkbox defaultChecked
                      labelText={t('remember-me-text') as string}
                      id={buildKey()}/>
        </FormControl>
        <LoginButton
            kind="primary"
            tabIndex={0}
            renderIcon={ArrowRight32}
            iconDescription="Sensor system"
            type="submit">
            {t('login-submit-title')}
        </LoginButton>
    </CustomForm>;
};


export default memo<LoginAuthFormProps>(LoginAuthForm);
