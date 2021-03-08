import React, {memo} from "react";
import {Divider} from "src/style/Divider";
import {LoginPanel} from "src/modules/login-module/components/auth/auth-style";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {LoginAuthProps} from "src/model/LoginAuthProps";
import LoginAuthController from "./controller";
import LoginAuthForm from "src/modules/login-module/components/auth/components/LoginAuthForm";

const Auth: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});
    const {register, handleSubmit, errors} = useForm<LoginAuthProps>({
        resolver: yupResolver(LoginAuthController.MySchema)
    });

    return <LoginPanel>
        <h3>{t('login-title')}</h3>
        <span>{t('slogan')}</span>
        <Divider/>
        <LoginAuthForm register={register} handleSubmit={handleSubmit} errors={errors}/>
    </LoginPanel>;
};

export default memo(Auth);
