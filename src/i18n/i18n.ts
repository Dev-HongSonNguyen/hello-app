import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import VI01_EN from "../locales/en/RegisterCompanyVi01.json"
import VI01_VN from "../locales/vi/RegisterCompanyVi01.json"
import VI02_VN from "../locales/vi/RegisterCompanyVi02.json"
import VI02_EN from "../locales/en/RegisterCompanyVi02.json"
import VI05_VN from "../locales/vi/RegisterCompanyVi05.json"
import VI05_EN from "../locales/en/RegisterCompanyVi05.json"
import RES_EN from "../locales/en/Register.json"
import RES_VN from "../locales/vi/Register.json"
const resources = {
    en: {
        res: RES_EN,
        vi01: VI01_EN,
        vi02: VI02_EN,
        vi05: VI05_EN
    },
    vi: {
        res: RES_VN,
        vi01: VI01_VN,
        vi02: VI02_VN,
        vi05: VI05_VN,
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "vi",
        ns: ['vi01', 'res', 'vi02', 'vi05'],
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;