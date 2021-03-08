import i18n from "i18next";

class LanguageSwitcherController {

    private mySupportedLanguages = new Map<string, string>([
        ["en", "English"],
        ["ru", "Русский"],
        ["cn", "中文"]
    ]);


    get myLanguages(): Map<string, string> {
        this.mySupportedLanguages[Symbol.iterator] = function* () {
            yield* [...this.entries()]
                .sort((a, b) => a[0] === i18n.language && b[0] !== i18n.language ? 1 : 0);
        }
        return this.mySupportedLanguages;
    }

    get selectedLanguage() {
        return i18n.language;
    }

    _onSwitch = async (data: { selectedItem: { id: string, text: string } | null | undefined }) => {
        await i18n.changeLanguage(data.selectedItem?.id);
    }
}

export default new LanguageSwitcherController();
