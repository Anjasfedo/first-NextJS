import Layout from '../../components/layout';
import Head from 'next/head';

import Date from '../../components/date';

import utilStyles from '../../styles/utils.module.css';

import { getAllPostIds, getPostData } from '../../lib/posts';

// export async function getStaticProps({ params }) {
//   const postData = getPostData(params.id);
//   return {
//     props: {
//       postData,
//     },
//   };
// }

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
  
    return {
      props: {
        postData,
      },
    };
  }

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// export default function Post({ postData }) {
//     return (
//       <Layout>
//         {postData.title}
//         <br />
//         {postData.id}
//         <br />
//         {postData.date}
//       </Layout>
//     );
//   }

  export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
        <title>{postData.title}</title>
      </Head>
        {/* {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Date dateString={postData.date} /> */}

        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      </Layout>
    );
  }