/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function QuizDaGalera(props) {
  const { id } = props.params;
  console.log('WEB:', id);
  return (
    <div style={{ color: '#000' }}>
      <p>Desafio da próxima aula junto com as animações</p>
      {`O Id da page é ${id}`}
    </div>
  );
}

export async function getStaticPaths() {
  const allIds = ['sonic', 'flash', 'alura', 'futebol', 'js', 'vercel', 'ts'];
  return {
    paths: allIds.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('SERVER:', params.id);
  return { props: { params } };
}
