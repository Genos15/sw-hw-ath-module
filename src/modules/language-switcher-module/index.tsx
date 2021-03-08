import React, {memo} from "react";
import {ComboBox} from 'carbon-components-react';
import LanguageSwitcherController from "./controller/LanguageSwitcherController";
import {LanguageSwitcherPanel} from "./language-switcher-style";
import {useTranslation} from "react-i18next";
import {buildKey} from "src/utils/unique-key";


const LanguageSwitcher: React.FC = () => {

    const {t} = useTranslation(undefined, {useSuspense: false});
    const options: { id: string, text: string }[] = Array.from(LanguageSwitcherController.myLanguages).map((item => {
        const [key, value] = item;
        return {id: key, text: value};
    }));

    return <LanguageSwitcherPanel>
        <ComboBox
            items={options}
            itemToString={(item) => (item ? item.text : '')}
            onChange={LanguageSwitcherController._onSwitch}
            placeholder={t('select-language-text')}
            id={buildKey()}/>
    </LanguageSwitcherPanel>;
};


export default memo(LanguageSwitcher);
