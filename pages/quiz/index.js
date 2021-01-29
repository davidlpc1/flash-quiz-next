/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import db from '../../db.json';
import QuizScreen from '../../src/screens/Quiz';

export default function QuizPage() {
  return <QuizScreen db={db} />;
}
