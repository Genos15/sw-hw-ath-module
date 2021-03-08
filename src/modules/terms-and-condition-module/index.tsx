import * as React from "react";
import {memo} from "react";
import {InnerPanelV} from "src/style/InnerPanelV";
import {PanelVertical} from "src/style/PanelVertical";
import {useTranslation} from "react-i18next";

const TermsAndConditionsUI: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});

    return <PanelVertical>
        <InnerPanelV paddingLeft={50} doubleWidth>
            <h3>{t('terms-and-condition-text')}</h3>
        </InnerPanelV>
    </PanelVertical>;
};

export default memo(TermsAndConditionsUI);
