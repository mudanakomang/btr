import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'
import SimpleLayout from './components/SimpleLayout';
import { MDXRemote } from 'next-mdx-remote';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import getDocBySlug from './components/getDocBySlug';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

const FourWDJeepTour = ({ content }) => {
    const components = {}
    return (

        <SimpleLayout>
            <div className="row">
                <MDXRemote {...content} components={components} />
            </div>
        </SimpleLayout>

    )
}

export async function getServerSideProps({
    resolvedUrl,
    locale
}: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Record<string, unknown>>> {

    const { content } = getDocBySlug(resolvedUrl, locale);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [],
            format: 'mdx'
        },
    });

    return {
        props: {
            ...await serverSideTranslations(locale, ['common']),
            content: mdxSource
        },
    }
}
export default FourWDJeepTour