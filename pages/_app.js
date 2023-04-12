import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/custom.css'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { appWithTranslation, useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { SSRProvider } from 'react-aria';


function MyApp({ Component, pageProps }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    const locale = localStorage.getItem('locale') || 'en'
    i18n.changeLanguage(locale)
  }, [i18n])
  return (
    <SSRProvider>
      <Head>
        <title>Batur Trekking and Jeep Tour | Explore Bali's Natural Beauty | Trisula Sunrise Trekking</title>
        <meta name="description" content="Discover Bali's natural beauty with our unforgettable trekking and Jeep tours to Mount Batur. Our experienced team provides excellent service to ensure every moment of your tour is memorable. Book now to explore Bali's stunning landscapes in a unique and exhilarating way." />
      </Head>
      <Component {...pageProps} />
    </SSRProvider>
  )
}

export default appWithTranslation(MyApp)
