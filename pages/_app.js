import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/custom.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { appWithTranslation, useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import {SSRProvider} from 'react-aria';


function MyApp({ Component, pageProps }) { 
  const { i18n } = useTranslation()
  
  useEffect(() => {
    const locale = localStorage.getItem('locale') || 'en'
    i18n.changeLanguage(locale) 
  }, [])
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default appWithTranslation(MyApp)
