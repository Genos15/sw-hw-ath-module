import React, {memo} from "react";
import LanguageSwitcher from "src/modules/language-switcher-module";
import {ToolbarContainer} from "./toolbar-style";

const ToolbarUI: React.FC = () => {

    return <ToolbarContainer>
        <LanguageSwitcher/>
    </ToolbarContainer>;
};

export default memo(ToolbarUI);
