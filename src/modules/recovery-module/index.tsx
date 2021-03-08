import React, {memo} from "react";
import {Divider} from "src/style/Divider";
import {FormIn, MyBorderImageRecovery, RecoveryContainer} from "./recovery-style";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import RecoveryController from "./controller"
import {RecoveryAuthProps} from "src/model/RecoveryAuthProps";
import RecoveryForm from "src/modules/recovery-module/components/recovery-form";

const PasswordRecoveryUI: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});
    const {register, handleSubmit, errors} = useForm<RecoveryAuthProps>({
        resolver: yupResolver(RecoveryController.MySchema)
    });

    return <RecoveryContainer>
        <FormIn>
            <h3>{t('recovery-password-text')}</h3>
            <span>{t('slogan')}</span>
            <Divider/>
            <RecoveryForm register={register} handleSubmit={handleSubmit} errors={errors}/>
            <Link to={"/renew-password"}>tmp-confirm</Link>
        </FormIn>
        <MyBorderImageRecovery/>
    </RecoveryContainer>;
};

export default memo(PasswordRecoveryUI);
