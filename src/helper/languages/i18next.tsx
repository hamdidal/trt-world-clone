import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'

const resources = {
    en: {
        translation: en,
    },
}

i18n.use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        keySeparator: false,

        interpolation: {
            escapeValue: false,
        },
    })
    .then((res) => res)
    .catch(() => '')

export default i18n
