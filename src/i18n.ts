import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const { items: keys } = process.env.REACT_APP_TRANSLATIONS && JSON.parse(process.env.REACT_APP_TRANSLATIONS);

const resources = keys.reduce((acc: any, key: any): any => {
  const keyName = key.key_name.web;

  key.translations.forEach(({ language_iso, translation: translationString }: any) => {
    acc = {
      ...acc,
      [language_iso]: {
        translation: {
          ...acc[language_iso]?.translation,
          [keyName]: translationString
        }
      }
    };
  });
  return acc;
}, {});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: Object.keys(resources),
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
