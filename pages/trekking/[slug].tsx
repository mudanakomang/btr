import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'; 
import { useTranslation } from 'next-i18next';
import SimpleLayout from '../components/SimpleLayout';
import getDocBySlug from '../components/getDocBySlug';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import gfm from 'remark-gfm';


const Trekking = ({content}) => {
  const router = useRouter()
  const { slug } = router.query
  const components = {}
  const {t} = useTranslation('common');
  return (
  
    <SimpleLayout>
      <div className="row">
        <MDXRemote {...content} components={components} />        
      </div>
    </SimpleLayout>
  
  )
}

export async function getServerSideProps( {
    query,
    locale,
    }: GetServerSidePropsContext): Promise<GetServerSidePropsResult<Record<string, unknown>>> {
        
        const {slug} = query
        const { content, meta } = getDocBySlug(slug, locale);
        const mdxSource = await serialize(content, { mdxOptions: {
            remarkPlugins: [gfm],
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
export default Trekking