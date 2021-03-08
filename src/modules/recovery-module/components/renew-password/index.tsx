import * as React from "react";
import {memo} from "react";
import {
    FormIn,
    MyBorderImageRenewPassword,
    RecoveryContainer
} from "src/modules/recovery-module/recovery-style";
import {Divider} from "src/style/Divider";
import {FormControl} from "src/style/FormControl";
import {CustomInput} from "src/style/CustomInput";
import {buildKey} from "src/utils/unique-key";
import {LoginButton} from "src/style/LoginButton";
import {ArrowRight32} from "@carbon/icons-react";
import {useTranslation} from "react-i18next";

const RenewPasswordUI: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});

    return <RecoveryContainer>
        <FormIn>
            <h3>{t('renew-password-text')}</h3>
            <span>{t('slogan')}</span>
            <Divider/>
            <FormControl>
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
                <CustomInput.PasswordInput
                    id={buildKey()}
                    invalidText="Invalid error message."
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
        </FormIn>
        <MyBorderImageRenewPassword/>
    </RecoveryContainer>;
};


export default memo(RenewPasswordUI);
