import i18n from "i18next";

class LanguageController {
    onSwitchLanguage = async () => {
        if (i18n.language === "en") {
            await i18n.changeLanguage("ru");
        } else {
            await i18n.changeLanguage("en");
        }
    };
}

export default new LanguageController();
