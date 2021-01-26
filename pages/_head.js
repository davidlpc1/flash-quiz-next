import Head from 'next/head'
import db from '../db.json'
const { bg } = db

export default  function HeadConfig() {
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

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> 
    </Head>
  )
}