/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from '../Link';

import Widget from '../Widget';

export default function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;

  const correctAnswers = results.filter((x) => x).length;
  const twitterLink = `https://twitter.com/intent/tweet?text=Fiz%20o%20quiz%20do%20flash%20dispon%C3%ADvel%20em%20https://flash-quiz-next.davidlpc1.vercel.app e ${correctAnswers === 0 ? 'errei todas hahahah' : `acertei ${correctAnswers} ${correctAnswers === 1 ? 'questão' : 'questões'}`} &via=davidlpc1%20@omariosouto%20@paulo_caelum%20@AluraOnline&hashtags=react,next,alura`;

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        Resultado
      </Widget.Header>

      <Widget.Content>
        <p>{`${correctAnswers === 0 ? 'Que pena!!' : 'Mandou bem!!'} ${name || ''} `}</p>
        <p>{correctAnswers === 0 ? 'Você errou todas' : `${name || 'Você'} acertou ${correctAnswers} pergunta(s)`}</p>

        <ul>
          {results.map((result, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`result__${index}--${result}`}>
              {`
                  #${index < 10 ? `0${index + 1}` : index + 1} 
                  Resultado 
                  ${result === true ? 'Acertou' : 'Errou'}`}
            </li>
          ))}

          <li />
        </ul>

        <Link href="/">
          Voltar para a Home
        </Link>

        <a style={{ display: 'block', marginTop: 10 }} target="_blank" rel="noreferrer" href={twitterLink}>
          <Image
            src="/twitter-icon.png"
            alt="Share in Twitter"
            width={32}
            height={32}
          />
        </a>

      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
