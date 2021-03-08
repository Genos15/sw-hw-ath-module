import {DefaultTheme} from "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: string;
        bgSecondColor: string;
        primaryColor: string;
        secondaryColor: string;
        accentColor: string;
        accentColorGradient: string;
        contentBgColor: string;
        contentAccentColor: string;
        textColor: string;
        textColorReverse: string;
        contentTextColor: string;
        downOutlineColor: string;
    }
}

export const lightTheme: DefaultTheme = {
    primaryColor: "#FFFFFF",
    secondaryColor: "#666",
    bgColor: "#FFFFFF",
    bgSecondColor: "#121212",
    accentColor: "#025955",
    accentColorGradient: "#03506f, #0a043c",
    contentBgColor: "#F6F6F6",
    contentAccentColor: "#EEEEEE",
    textColor: "#121212",
    contentTextColor: "#9E9E9E",
    downOutlineColor: "#e0e0e0",
    textColorReverse: "#E1E1E1"
};

export const darkTheme: DefaultTheme = {
    primaryColor: "#121212",
    secondaryColor: "#666",
    bgColor: "#121212",
    bgSecondColor: "#E1E1E1",
    accentColor: "#025955",
    accentColorGradient: "#03506f, #0a043c",
    contentBgColor: "#F6F6F6",
    contentAccentColor: "#EEEEEE",
    textColor: "#E1E1E1",
    contentTextColor: "#9E9E9E",
    downOutlineColor: "#e0e0e0",
    textColorReverse: "#121212"
};
