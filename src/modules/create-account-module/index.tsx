import React, {memo} from "react";
import {PanelVertical} from "src/style/PanelVertical";
import {useTranslation} from "react-i18next";
import {InnerPanelV} from "src/style/InnerPanelV";
import {Divider} from "src/style/Divider";
import {CustomForm} from "src/modules/login-module/components/auth/auth-style";
import {FormControl} from "src/style/FormControl";
import {CustomInput} from "src/style/CustomInput";
import {buildKey} from "src/utils/unique-key";
import {Checkbox} from "carbon-components-react";
import {LoginButton} from "src/style/LoginButton";
import {ArrowRight32} from "@carbon/icons-react";
import {PanelHorizontal} from "src/style/PanelHorizontal";
import {Spacer} from "src/style/Spacer";
import {MyBorderImageNewUser} from "src/modules/create-account-module/create-account-style";
import {Link} from "react-router-dom";

const CreateAccountUI: React.FC = () => {
    const {t} = useTranslation(undefined, {useSuspense: false});

    return <PanelVertical>
        <InnerPanelV paddingLeft={50} doubleWidth>
            <h3>{t('create-account-text')}</h3>
            <PanelHorizontal>
                <span>{t('slogan')}</span>
                <Spacer width={.5}>.</Spacer>
                <Link to={"/"}>I already have an account</Link>
            </PanelHorizontal>
            <Divider/>
            <CustomForm>
                <PanelHorizontal>
                    <FormControl>
                        <CustomInput
                            id={buildKey()}
                            invalidText="Invalid error message."
                            labelText={t('first-name-text') as string}
                            placeholder={t('first-name-placeholder-text') as string}/>
                    </FormControl>
                    <Spacer/>
                    <FormControl>
                        <CustomInput
                            id={buildKey()}
                            invalidText="Invalid error message."
                            labelText={t('last-name-text') as string}
                            placeholder={t('last-name-placeholder-text') as string}/>
                    </FormControl>
                </PanelHorizontal>
                <PanelHorizontal>
                    <FormControl>
                        <CustomInput
                            id={buildKey()}
                            invalidText="Invalid error message."
                            labelText={t('middle-name-text') as string}
                            placeholder={t('middle-name-placeholder-text') as string}/>
                    </FormControl>
                    <Spacer/>
                    <FormControl>
                        <CustomInput
                            id={buildKey()}
                            helperText={t("phone-format-text")}
                            invalidText="Invalid error message."
                            labelText={t('phone-text') as string}
                            placeholder={t('phone-placeholder-text') as string}/>
                    </FormControl>
                </PanelHorizontal>
                <FormControl>
                    <CustomInput
                        id={buildKey()}
                        invalidText="Invalid error message."
                        labelText={t('email-text') as string}
                        placeholder={t('email-placeholder-text') as string}/>
                </FormControl>
                <PanelHorizontal>
                    <FormControl>
                        <CustomInput.PasswordInput
                            id={buildKey()}
                            helperText={t("password-helper-text")}
                            invalidText="Invalid error message."
                            labelText={t('password-title') as string}
                            hidePasswordLabel={t('hide-password-text')}
                            showPasswordLabel={t('show-password-text')}
                            placeholder={t('password-placeholder') as string}/>
                    </FormControl>
                    <Spacer/>
                    <FormControl>
                        <CustomInput.PasswordInput
                            id={buildKey()}
                            helperText={t("password-helper-text")}
                            invalidText="Invalid error message."
                            labelText={t('confirm-password-text') as string}
                            hidePasswordLabel={t('hide-password-text')}
                            showPasswordLabel={t('show-password-text')}
                            placeholder={t('confirm-password-placeholder-text') as string}/>
                    </FormControl>
                </PanelHorizontal>
                <FormControl>
                    <Checkbox defaultChecked
                              labelText={t('terms-conditions-text') as string}
                              id={buildKey()}/>
                </FormControl>
                <LoginButton
                    kind="primary"
                    tabIndex={0}
                    renderIcon={ArrowRight32}
                    iconDescription="Sensor system"
                    type="submit">
                    {t('create-account-text')}
                </LoginButton>
            </CustomForm>
        </InnerPanelV>
        <MyBorderImageNewUser/>
    </PanelVertical>;
};


export default memo(CreateAccountUI);
