import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { reactI18nextModule } from 'react-i18next'

i18n.use(Backend).use(LanguageDetector).use(reactI18nextModule).init({
  fallbackLng: 'de',

  ns: ['home'],
  defaultNS: 'home',
  debug: false,
  backend: {
    loadPath: (lngs, namespaces) => {
      const localesPath = '/locales/en/{{ns}}.json'
      return localesPath
    }
  },
  load: 'languageOnly',
  interpolation: {
    escapeValue: false // not needed for react!!
  },

  react: {
    wait: true
  }
})

export default i18n
