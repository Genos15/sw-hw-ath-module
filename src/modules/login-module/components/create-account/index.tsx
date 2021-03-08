import React, {memo} from "react";
import {Divider} from "src/style/Divider";
import {PanelVertical} from "src/style/PanelVertical";
import {CreateButton, TitleCreate} from "src/modules/login-module/components/create-account/create-account-style";
import {IotConnect32} from "@carbon/icons-react";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
import {InnerPanelV} from "src/style/InnerPanelV";


const CreateAccountPanel: React.FC = () => {

    let history = useHistory();
    const {t} = useTranslation(undefined, {useSuspense: false});

    return <PanelVertical>
        <InnerPanelV>
            <Divider/>
            <TitleCreate>{t('create-account-text')}</TitleCreate>
            <CreateButton renderIcon={IotConnect32}
                          onClick={() => history?.push("/create-account")}
                          kind='tertiary'>
                {t('set-up-board-text')}
            </CreateButton>
        </InnerPanelV>
    </PanelVertical>;
};


export default memo(CreateAccountPanel);
