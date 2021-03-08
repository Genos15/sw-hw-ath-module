import ThemeStore from "../../../stores/ThemeStore";
import React from "react";

class LoginController {

    onSwitchTheme = (event: React.SyntheticEvent) => {
        event.preventDefault();
        ThemeStore.switchTheme();
    }
}

export default new LoginController();
