import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import es from './es.json';
import {useTranslation} from 'react-i18next';

export const languageResources = {
  es: {translation: es},
  en: {translation: en},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'es',
  fallbackLng: 'es',
  resources: languageResources,
});

const {t} = useTranslation();

export {i18next, t};
