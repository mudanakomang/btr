import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styles from './BaseNavbar.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';


export default function BaseNavbar() {
    const [lang, setLang] = useState('en');
    useEffect(() => {
        setLang(localStorage.getItem('locale') || 'en');
    }, [lang])


    const { t } = useTranslation('common');
    return (
        <>
            <Navbar bg="light" expand="lg" sticky="top" className={styles.nav_center}>
                <Link href='https://wa.me/6282146397875?text=Hello%2C%20Trisula%20Sunrise%20Trekking'>
                    <a className='nav-link ' target='_blank'>
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
                    </Nav>
                    <Nav>
                        <Nav.Link href="/trekking/batur">Batur Surise Trekking</Nav.Link>
                        <Nav.Link href="/4wd-jeep-tour">Batur 4WD Jeep Tour</Nav.Link>
                        <Nav.Link href="/contact-us">{t('contact')}</Nav.Link>
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