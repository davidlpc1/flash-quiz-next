import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export const Form = styled.form`
  display:flex;
  margin:20px;
  gap:10px;
  flex-direction:column;
`;

export const Input = styled.input`
  color:${({ theme }) => theme.colors.contrastText};
  padding:10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  outline:0;
  display: block;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.wrong};
  color:${({ theme }) => theme.colors.contrastText};
  font-weight: 700;
  text-transform:uppercase;
  outline:0;
  border:0;
  border-radius:4px;
  padding:10px;
  cursor:pointer;

  &:disabled{
    opacity:.6;
    cursor:not-allowed;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <Form onSubmit={handleSubmit}>
              <Input
                placeholder="Diz aí seu nome"
                onChange={handleChange}
                maxLength={30}
              />

              <Button type="submit" disabled={name.trim().length === 0}>
                Jogar como
                {' '}
                { name }
              </Button>
            </Form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/davidlpc1/flash-quiz-next" />
    </QuizBackground>
  );
}
