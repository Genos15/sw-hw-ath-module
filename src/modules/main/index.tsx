import React, {memo} from "react";
import {Route, Switch} from "react-router-dom";
import LoginUI from "src/modules/login-module";
import CreateAccountUI from "src/modules/create-account-module";
import My404UI from "src/modules/404-module";
import ToolbarUI from "src/modules/toolbar-module";
import PasswordRecoveryUI from "src/modules/recovery-module";
import RenewPasswordUI from "src/modules/recovery-module/components/renew-password";
import TermsAndConditionsUI from "src/modules/terms-and-condition-module";

const MainUI: React.FC = () => {

    return <>
        <ToolbarUI/>
        <Switch>
            <Route exact path="/" component={LoginUI}/>
            <Route path="/create-account" component={CreateAccountUI}/>
            <Route path="/recovery" component={PasswordRecoveryUI}/>
            <Route path="/renew-password" component={RenewPasswordUI}/>
            <Route path="/terms-and-conditions" component={TermsAndConditionsUI}/>
            <Route component={My404UI}/>
        </Switch>
    </>;
};


export default memo(MainUI);
