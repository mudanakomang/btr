import React, { useCallback, useEffect, useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import styles from './BaseNavbar.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { i18n } from '../../next-i18next.config';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

import ReactCountryFlag from "react-country-flag"


export default function BaseNavbar(data) {
    console.log(data)
   const router = useRouter();
    const [lang, setLang] = useState('en');
    useEffect(() => {            
        setLang(localStorage.getItem('locale') || 'en');
    },[lang])

    const onClickLanguageSwitcherHandler = useCallback((lc) => {
        localStorage.setItem('locale', lc);
        setLang(lc);
        router.push(router.pathname, router.asPath, { locale: lc });
    },[])

   

    const {t} = useTranslation('common');
    return (
        <>
        <Navbar bg="light" expand="lg" sticky="top"  className={styles.nav_center}>
            <Link href='https://wa.me/6282146397875?text=Hello%2C%20Trisula%20Sunrise%20Trekking' target="_blank">
                <a className='nav-link ' >
                    <img className='pl-2' src="/images/logo/whatsapp.png" height={20} alt="whatsapp" />  6282146397875
                </a>
            </Link>
        </Navbar>
        
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-2">            
            <Navbar.Brand className='p-2'>
                <Link href={`/`} lang={lang}>
                    <a className='text-white'>
                    <img
                        src="/images/logo/logo-2.png"
                        height="100vh"
                        className="d-inline-block align-top"
                        alt="Trisula Sunrise Trekking Logo Variant 2"
                    />
                </a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className='px-2' id="responsive-navbar-nav">
                <Nav className="mr-2">                   
                    <Link href={`/batur`} lang={lang}>
                    <a className='nav-link'>
                        {t('about_trekking.head')}
                    </a>
                    </Link>                    
                    <Nav.Item className="ml-auto">
                        <NavDropdown title={t('trekking_package')} id="collasible-nav-dropdown" menuVariant='dark'> 
                            <NavDropdown.Item href={`#`}  onClick={() => router.push('/trekking/batur')}>
                            Batur Surise Trekking
                            </NavDropdown.Item>   
                        </NavDropdown>
                    </Nav.Item>                    
                </Nav>
                <Nav>
                    <Nav.Link href="/contact-us">{t('contact')}</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                    <Nav.Item className="ml-auto">
                        <NavDropdown title={`Language ` } id="collasible-nav-dropdown" menuVariant='dark'> 
                            {i18n.locales.map((locale) => {
                                return (
                                    <NavDropdown.Item 
                                        key={locale} 
                                        href='#' 
                                        onClick={() => onClickLanguageSwitcherHandler(locale)}
                                    >
                                  
                                        {locale === "en" ?
                                            (
                                                <>
                                                  <div className="d-flex justify-content-between">
                                                <div>English</div> 
                                                <div > <ReactCountryFlag countryCode="GB" style={{fontSize: '1em'}} svg title='English'/></div>                                       
                                                </div>
                                                </>
                                            ): (
                                                <>
                                                <div className="d-flex justify-content-between">
                                              <div>Indonesia</div> 
                                              <div > <ReactCountryFlag countryCode="ID" style={{fontSize: '1em'}} svg title='Indonesia'/></div>                                       
                                              </div>
                                              </>
                                            )
                                        }
                                    
        
                                    </NavDropdown.Item>
                                );
                            })}
                                            
                        </NavDropdown>
                    </Nav.Item>
                    <Nav.Link className="ml-auto">
                        {lang === 'en' ? 
                            (<ReactCountryFlag countryCode="GB" style={{fontSize: '1em'}} svg title='English'/>)
                            :(<ReactCountryFlag countryCode="ID" style={{fontSize: '1em'}} svg title='Indonesia'/>)
                        }
                    </Nav.Link>
                </Nav>               
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },

});