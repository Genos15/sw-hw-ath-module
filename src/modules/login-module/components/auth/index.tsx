import React, {memo} from "react";
import {Divider} from "src/style/Divider";
import {CustomInput} from "src/style/CustomInput";
import {FormControl} from "src/style/FormControl";
import {LoginButton} from "src/style/LoginButton";
import {
    CustomForm,
    LoginPanel,
} from "src/modules/login-module/components/auth/auth-style";
import {TopRightLink} from "src/style/TopRightLink";
import {useTranslation} from "react-i18next";
import {ArrowRight32} from '@carbon/icons-react';
import {Checkbox} from "carbon-components-react";
import {buildKey} from "src/utils/unique-key";


const Auth: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});

    return <LoginPanel>
        <h3>{t('login-title')}</h3>
        <span>{t('slogan')}</span>
        <Divider/>
        <CustomForm>
            <FormControl>
                <CustomInput
                    helperText={t("username-helper-text")}
                    id={buildKey()}
                    invalidText="Invalid error message."
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
                    invalidText="Invalid error message."
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
        </CustomForm>
    </LoginPanel>;
};

export default memo(Auth);
