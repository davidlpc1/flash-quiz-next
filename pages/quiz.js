/* eslint-disable linebreak-style */
import React from 'react';
import { useRouter } from 'next/router';

export default function QuizPage() {
  const router = useRouter();

  return (
    <div style={{ color: '#000' }}>
      Página de quiz
      <br />
      Seu Nome:
      {' '}
      {router.query.name || ''}
    </div>
  );
}
