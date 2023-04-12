import React from 'react'
import SimpleLayout from './components/SimpleLayout'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Masonry from "react-responsive-masonry";
import { splitStringByNewLine } from './components/split-string';


import {
  faCarAlt,
  faMoneyCheckAlt,
  faStopwatch,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';
import Contact from './components/Contact';

const Home = (initialData) => {
  const { t } = useTranslation('common');
  const desc = t('home_description');

  const images = [
    '/images/mountains/batur-2.JPG',
    '/images/mountains/batur.JPG',
    '/images/mountains/batur-3.JPG',
    '/images/mountains/batur-4.JPG',

  ]
  return (

    <SimpleLayout>
      <div className="row justify-content-center pb-5 container_bg">
        <div className="col-lg-4 col-sm-12 col-md-6 pb-4 my-auto" >
          <h2 className='text-center'>{t('welcome')}</h2>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-6 pb-5">
          {splitStringByNewLine(t('home_description'), 'h4')}
        </div>

      </div>
      <div className="row justify-content-center pt-5 container_bg2">
        <div className="col-lg-8 col-sm-12 col-md-8 pb-4 my-auto" >
          {/* <h2 className='text-center'>{t('about_trekking.title')}</h2>           */}
          <h2 className='text-center'>{t('about_trekking.head')}</h2>
          <div className='row pt-5 justify-content-center'>
            <div className='col-lg-10 my-auto'>
              <div className='pb-4'>
                <Masonry columnsCount={2} gutter={"0.6rem"}>
                  {images.map((image, index) => (
                    <img key={index} src={image} />
                  ))}
                </Masonry>
              </div>
              <p>{t('about_trekking.batur').substring(0, 400)} ...</p>
              <p><a href='/batur' className='btn btn-outline-primary btn-sm'>{t('read_more')}</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center pt-5">
        <div className="col-lg-6 col-sm-12 col-md-6 pb-4 my-auto" >
          <h2 className='text-center'>{t('reason_title')}</h2>
          <div className='row justify-content-center pt-4'>
            <div className='col-lg-6 mx-auto'>
              <div className='text-center py-5'>
                <FontAwesomeIcon
                  icon={faStopwatch}
                  style={{
                    fontSize: 100,
                  }}
                />
                <h5 className='pt-4'>{t('reason_1_title')}</h5>
                <p>{t('reason_1_desc')}</p>
              </div>
            </div>
            <div className='col-lg-6 mx-auto'>
              <div className='text-center py-5'>
                <FontAwesomeIcon
                  icon={faMoneyCheckAlt}
                  style={{
                    fontSize: 100,
                  }}
                />
                <h5 className='pt-4'>{t('reason_2_title')}</h5>
                <p>{t('reason_2_desc')}</p>
              </div>
            </div>
          </div>

          <div className='row justify-content-center pt-4'>
            <div className='col-lg-6 mx-auto'>
              <div className='text-center'>
                <FontAwesomeIcon
                  icon={faCarAlt}
                  style={{
                    fontSize: 100,
                  }}
                />
                <h5 className='pt-4'>{t('reason_3_title')}</h5>
                <p>{t('reason_3_desc')}</p>
              </div>
            </div>
            <div className='col-lg-6 mx-auto'>
              <div className='text-center'>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{
                    fontSize: 100,
                  }}
                />
                <h5 className='pt-4'>{t('reason_4_title')}</h5>
                <p>{t('reason_4_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </SimpleLayout>

  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Home;