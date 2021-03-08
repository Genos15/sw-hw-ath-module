import React from "react";
import {inject, observer} from "mobx-react";
import {ThemeProvider} from "styled-components";
import ThemeStore from "../../stores/ThemeStore";
import Auth from "./components/auth";
import {AuthContainer} from "src/modules/login-module/components/auth/auth-style";
import {MyBorderImage, Panel} from "src/modules/login-module/login-style";
import CreateAccountPanel from "./components/create-account";

const LoginUI: React.FC = observer(() => {

    return <ThemeProvider theme={ThemeStore.CurrentTheme}>
        <Panel>
            <AuthContainer>
                <Auth/>
                <CreateAccountPanel/>
                {/*<span>{t('title')}</span>*/}
                {/*<button onClick={LoginController.onSwitchTheme}>SWITCH THEME</button>*/}
                {/*<button onClick={LanguageController.onSwitchLanguage}>SWITCH LANGUAGE</button>*/}
            </AuthContainer>
            <MyBorderImage/>
        </Panel>
    </ThemeProvider>;
});


export default inject("ThemeStore")(LoginUI);
