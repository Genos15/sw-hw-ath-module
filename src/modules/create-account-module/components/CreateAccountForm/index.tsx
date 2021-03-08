import * as React from "react";
import {memo} from "react";
import {CustomForm} from "src/modules/login-module/components/auth/auth-style";
import CreateAccountController from "src/modules/create-account-module/controller/CreateAccountController";
import {PanelHorizontal} from "src/style/PanelHorizontal";
import {FormControl} from "src/style/FormControl";
import {CustomInput} from "src/style/CustomInput";
import {buildKey} from "src/utils/unique-key";
import {Spacer} from "src/style/Spacer";
import {useTranslation} from "react-i18next";
import CreateAccountAction from "../CreateAccountAction";
import {CreateAccountFormProps} from "src/model/CreateAccountFormProps";
import {Tooltip} from "carbon-components-react";


const CreateAccountForm: React.FC<CreateAccountFormProps> = ({register, handleSubmit, errors}) => {
    const {t} = useTranslation(undefined, {useSuspense: false});

    const PhoneDesc = <Tooltip
        direction="bottom"
        tabIndex={0}
        triggerText={t('phone-text')}>
        <p>{t("why-collecting-phone-text")}</p>
    </Tooltip>;

    return <CustomForm onSubmit={handleSubmit(CreateAccountController.onSubmit, CreateAccountController.onErrors)}>
        <PanelHorizontal>
            <FormControl>
                <CustomInput
                    id={buildKey()}
                    invalidText={t('required-field-text')}
                    ref={register}
                    name={CreateAccountController.fields.firstName}
                    labelText={t('first-name-text') as string}
                    placeholder={t('first-name-placeholder-text') as string}
                    invalid={errors.firstName !== undefined}
                />
            </FormControl>
            <Spacer/>
            <FormControl>
                <CustomInput
                    id={buildKey()}
                    ref={register}
                    name={CreateAccountController.fields.lastName}
                    invalidText={t('required-field-text')}
                    invalid={errors.lastName !== undefined}
                    labelText={t('last-name-text') as string}
                    placeholder={t('last-name-placeholder-text') as string}/>
            </FormControl>
        </PanelHorizontal>
        <PanelHorizontal>
            <FormControl>
                <CustomInput
                    id={buildKey()}
                    ref={register}
                    invalid={errors.middleName !== undefined}
                    name={CreateAccountController.fields.middleName}
                    labelText={t('middle-name-text') as string}
                    placeholder={t('middle-name-placeholder-text') as string}/>
            </FormControl>
            <Spacer/>
            <FormControl>
                <CustomInput
                    id={buildKey()}
                    helperText={t("phone-format-text")}
                    invalidText={t("phone-format-text")}
                    ref={register}
                    invalid={errors.phone !== undefined}
                    name={CreateAccountController.fields.phone}
                    labelText={PhoneDesc}
                    placeholder={t('phone-placeholder-text') as string}/>
            </FormControl>
        </PanelHorizontal>
        <FormControl>
            <CustomInput
                id={buildKey()}
                invalidText={t('invalid-email-field-text')}
                ref={register}
                invalid={errors.email !== undefined}
                name={CreateAccountController.fields.email}
                labelText={t('email-text') as string}
                placeholder={t('email-placeholder-text') as string}/>
        </FormControl>
        <PanelHorizontal>
            <FormControl>
                <CustomInput.PasswordInput
                    id={buildKey()}
                    helperText={t("password-helper-text")}
                    invalidText={t('invalid-password-field-text')}
                    ref={register}
                    invalid={errors.password !== undefined}
                    name={CreateAccountController.fields.password}
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
                    invalidText={t('invalid-password-field-confirmation-text')}
                    ref={register}
                    invalid={errors.passwordConfirmation !== undefined}
                    name={CreateAccountController.fields.passwordConfirmation}
                    labelText={t('confirm-password-text') as string}
                    hidePasswordLabel={t('hide-password-text')}
                    showPasswordLabel={t('show-password-text')}
                    placeholder={t('confirm-password-placeholder-text') as string}/>
            </FormControl>
        </PanelHorizontal>
        <CreateAccountAction/>
    </CustomForm>;
};

export default memo<CreateAccountFormProps>(CreateAccountForm);
