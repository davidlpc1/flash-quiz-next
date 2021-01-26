import Head from 'next/head'
import db from '../db.json'
const { bg } = db

export default  function IndexPage() {
  return (
    <Head>
      <meta name="title" content="Flash Quiz" />
      <meta name="description" content="Um quiz do flash feito durante a imersão React NextJS da Alura" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://flash-quiz-next.davidlpc1.vercel.app/" />
      <meta property="og:title" content="Flash Quiz" />
      <meta property="og:description" content="Um quiz do flash feito durante a imersão React NextJS da Alura" />
      <meta property="og:image" content={bg} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://flash-quiz-next.davidlpc1.vercel.app/" />
      <meta property="twitter:title" content="Flash Quiz" />
      <meta property="twitter:description" content="Um quiz do flash feito durante a imersão React NextJS da Alura" />
      <meta property="twitter:image" content={bg}></meta> 
      <title>Flash quiz</title>
    </Head>
  )
}