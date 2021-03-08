import React, {memo} from "react";
import {Divider} from "src/style/Divider";
import {FormControl} from "src/style/FormControl";
import {CustomInput} from "src/style/CustomInput";
import {LoginButton} from "src/style/LoginButton";
import {FormIn, MyBorderImageRecovery, RecoveryContainer} from "./recovery-style";
import {useTranslation} from "react-i18next";
import {ArrowRight32} from "@carbon/icons-react";
import {buildKey} from "src/utils/unique-key";
import {Link} from "react-router-dom";


const PasswordRecoveryUI: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});

    return <RecoveryContainer>
        <FormIn>
            <h3>{t('recovery-password-text')}</h3>
            <span>{t('slogan')}</span>
            <Divider/>
            <FormControl>
                <CustomInput
                    helperText={t("username-helper-text")}
                    id={buildKey()}
                    invalidText="Invalid error message."
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
            <Link to={"/renew-password"}>tmp-confirm</Link>
        </FormIn>
        <MyBorderImageRecovery/>
    </RecoveryContainer>;
};

export default memo(PasswordRecoveryUI);
