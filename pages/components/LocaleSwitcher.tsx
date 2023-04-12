import { i18n } from '../../next-i18next.config';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from 'react';

export default function LocaleSwitcher() {
    const { t } = useTranslation('common');
    const [locale, setLocale] = useState('en');
    const locales = i18n.locales;
    const { pathname, query, asPath } = useRouter();


    return (
        <>
            {locales.map((locale) => {
                return (
                    <Link
                        key={locale}
                        href={{ pathname, query }}
                        as={asPath}
                        locale={locale}
                    >
                        <a>{t("switchLocale", { locale })}</a>
                    </Link>
                );
            })
            }
        </>
    )
}

export const getStaticProps = async ({ locale }) => {

    console.log(locale);
    return {
        props: { locale }
    }
};