/* eslint-disable react/prop-types */
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Link from 'next/link';

import Widget from '../Widget';

export default function ResultWidget({ results }) {
  const router = useRouter();
  const { name } = router.query;

  const correctAnswers = results.filter((x) => x).length;
  return (
    <Widget>
      <Widget.Header>
        Resultado
      </Widget.Header>

      <Widget.Content>
        <p>{`${correctAnswers === 0 ? 'Que pena!!' : 'Mandou bem!!'} ${name} `}</p>
        <p>{correctAnswers === 0 ? 'Você errou todas' : `${name} acertou ${correctAnswers} pergunta(s)`}</p>

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
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>Voltar para a Home</a>
        </Link>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.propTypes = {
  results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
