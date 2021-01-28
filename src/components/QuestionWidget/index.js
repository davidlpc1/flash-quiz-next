/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';

import Widget from '../Widget';
import Button from '../Button';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';

export default function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const questionId = `question_${questionIndex}`;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const handleForm = useCallback((event) => {
    event.preventDefault();
    setIsQuestionSubmited(true);
    setTimeout(() => {
      addResult(isCorrect);
      onSubmit();
      setIsQuestionSubmited(false);
      setSelectedAlternative(undefined);
    }, 2 * 1000);
  }, [isCorrect, isQuestionSubmited, selectedAlternative]);

  return (
    <Widget>
      <Widget.Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BackLinkArrow href="/" />
          <h3>
            {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
          </h3>
        </div>

      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />

      <Widget.Content>
        <h2>
          { question.title }
        </h2>

        <p>
          { question.description }
        </p>

        <AlternativesForm
          onSubmit={handleForm}
        >
          {
              question.alternatives.map((alternative, alternativeIndex) => {
                const alternativeId = `alternative_${alternativeIndex}--${alternative}`;
                const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                const isSelected = selectedAlternative === alternativeIndex;

                return (
                  <Widget.Topic
                    as="label"
                    key={alternativeId}
                    htmlFor={alternativeId}
                    data-selected={isSelected}
                    data-status={isQuestionSubmited && alternativeStatus}
                  >
                    <input
                      style={{ display: 'none' }}
                      id={alternativeId}
                      onChange={() => setSelectedAlternative(alternativeIndex)}
                      name={questionId}
                      type="radio"
                      disabled={isQuestionSubmited}
                    />
                    { alternative }
                  </Widget.Topic>
                );
              })
            }

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>

          { isQuestionSubmited && isCorrect && <p>Você acertou!</p> }
          { isQuestionSubmited && !isCorrect && <p>Você errou!</p> }

        </AlternativesForm>

      </Widget.Content>
    </Widget>
  );
}
