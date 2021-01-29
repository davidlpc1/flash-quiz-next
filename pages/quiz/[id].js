/* eslint-disable react/prop-types */

import React from 'react';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizDaGalera({ externalDb }) {
  return (
    <QuizScreen db={externalDb} />
  );
}

export async function getServerSideProps({ query, res }) {
  const [repoName, githubUser] = query.id.split('___');

  try {
    const externalDb = await fetch(`https://${repoName}.${githubUser}.vercel.app/api/db`)
      .then((response) => {
        if (response.ok) return response.json();

        throw new Error('Falha em entregar os dados');
      })
      .then((resObj) => resObj);

    return {
      props: {
        externalDb,
      },
    };
  } catch (err) {
    // res.redirect...
    console.error(err);
    throw new Error(err.message);
  }
}
