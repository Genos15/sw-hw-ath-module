import React, {memo} from "react";
import {PanelVertical} from "src/style/PanelVertical";
import {useTranslation} from "react-i18next";
import {InnerPanelV} from "src/style/InnerPanelV";
import {Divider} from "src/style/Divider";
import {PanelHorizontal} from "src/style/PanelHorizontal";
import {Spacer} from "src/style/Spacer";
import {MyBorderImageNewUser} from "src/modules/create-account-module/create-account-style";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import CreateAccountController from "./controller/CreateAccountController";
import {yupResolver} from '@hookform/resolvers/yup';
import {CreateAccountProps} from "src/model/CreateAccountProps";
import CreateAccountForm from "src/modules/create-account-module/components/CreateAccountForm";


const CreateAccountUI: React.FC = () => {
    const {t} = useTranslation(undefined, {useSuspense: false});
    const {register, handleSubmit, errors, formState} = useForm<CreateAccountProps>({
        resolver: yupResolver(CreateAccountController.MySchema)
    });

    console.debug("CreateAccountUI is dirty = ", formState.isDirty);

    return <PanelVertical>
        <InnerPanelV paddingLeft={50} doubleWidth>
            <h3>{t('create-account-text')}</h3>
            <PanelHorizontal>
                <span>{t('slogan')}</span>
                <Spacer width={.5}>.</Spacer>
                <Link to={"/"}>{t("already-have-account-text")}</Link>
            </PanelHorizontal>
            <Divider/>
            <CreateAccountForm
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}/>
        </InnerPanelV>
        <MyBorderImageNewUser/>
    </PanelVertical>;
};


export default memo(CreateAccountUI);
