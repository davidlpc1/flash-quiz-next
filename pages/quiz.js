/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import Button from '../src/components/Button';
import LoadingWidget from '../src/components/LoadingWidget';

// function LoadingWidget() {
//   return (
//     <Widget>
//       <Widget.Header>
//         Carregando...
//       </Widget.Header>

//       <Widget.Content>
//         [Desafio do Loading]
//       </Widget.Content>
//     </Widget>
//   );
// }

function QuestionWidget({
  question,
  totalQuestions,
  questionIndex,
  onSubmit,
}) {
  const questionId = `question_${questionIndex}`;
  const [currentAlternative, setCurrentAlternative] = useState(null);
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" /> */}
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
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

        <form onSubmit={(event) => {
          event.preventDefault();
          console.log(event);
          console.log(currentAlternative);
          onSubmit(currentAlternative);
        }}
        >
          {
            question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative_${alternativeIndex}--${alternative}`;
              return (
                <Widget.Topic
                  as="label"
                  key={alternativeId}
                  htmlFor={alternativeId}
                >
                  <input
                    // style={{ display: 'none' }}
                    id={alternativeId}
                    onChange={(event) => {
                      setCurrentAlternative(Number(event.target.dataset.alternativeIndex));
                    }}
                    name={questionId}
                    type="radio"
                    data-alternative-index={alternativeIndex}
                  />
                  { alternative }
                </Widget.Topic>
              );
            })
          }

          {/* <pre>
            { JSON.stringify(question, null, 4) }
          </pre> */}

          <Button type="submit">
            Confirmar
          </Button>
        </form>

      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  LOADING: 'LOADING',
  QUIZ: 'QUIZ',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    // nasce === didMount
    // fetch() ...
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  // atualizado === willUpdate
  // morre === willUnmount

  function handleSubmitQuiz(currentAlternative) {
    if (currentAlternative === question.answer) {
      // eslint-disable-next-line no-alert
      alert('Correct!!');
      setCorrectAnswers((old) => old + 1);
    } else {
      // eslint-disable-next-line no-alert
      alert('Wrong!!');
    }

    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>
            {` Você acertou ${correctAnswers}  questõe(s),`}
            {correctAnswers === 0 ? 'que pena' : 'parabéns!'}
          </div>
        )}
      </QuizContainer>
    </QuizBackground>
  );
}
