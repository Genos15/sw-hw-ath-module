import * as React from "react";
import {memo} from "react";
import {
    FormIn,
    MyBorderImageRenewPassword,
    RecoveryContainer
} from "src/modules/recovery-module/recovery-style";
import {Divider} from "src/style/Divider";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {RecoveryAuthProps} from "src/model/RecoveryAuthProps";
import {yupResolver} from "@hookform/resolvers/yup";
import RecoveryController from "src/modules/recovery-module/controller";
import RenewPasswordForm from "src/modules/recovery-module/components/renew-password/components/renew-password-form";

const RenewPasswordUI: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});
    const {register, handleSubmit, errors} = useForm<RecoveryAuthProps>({
        resolver: yupResolver(RecoveryController.MyRenewPasswordSchema)
    });

    return <RecoveryContainer>
        <FormIn>
            <h3>{t('renew-password-text')}</h3>
            <span>{t('slogan')}</span>
            <Divider/>
            <RenewPasswordForm register={register} handleSubmit={handleSubmit} errors={errors}/>
        </FormIn>
        <MyBorderImageRenewPassword/>
    </RecoveryContainer>;
};


export default memo(RenewPasswordUI);
