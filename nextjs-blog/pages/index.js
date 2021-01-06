import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import * as matter from 'gray-matter';

export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        {props.collect.map((item) => (
          <div>
            <p>{item.id} - {item.date} - {item.date}</p>
            <p>{item.content}</p>
          </div>
        ))}
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const pre = matter.read("./posts/pre-rendering.md");
  const ssd = matter.read("./posts/ssg-ssr.md");
  
  return {
    props: {
      collect: [
        {
          id: 1,
          title: pre.data.title,
          date: pre.data.date,
          content: pre.content,
        },
        {
          id: 2,
          title: ssd.data.title,
          date: ssd.data.date,
          content: ssd.content,
        },
      ]
    }
  }
}