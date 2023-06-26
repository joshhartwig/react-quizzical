
import React from 'react'
import { Question } from '../types/Question'
import TriviaQuestion from './TriviaQuestion'

interface Props {
  questions: Question[]
}

/*
  TODO: create use effect to check if every question is answered if so allow the next button and calc results
*/

const Quiz: React.FC<Props> = (Props) => {
  return (
    <>
      {
        Props.questions.map(q => (
          <TriviaQuestion id={q.id} detail={q.detail} correctAnswer={q.correctAnswer} answers={q.answers} answered={q.answered} />
        ))
      }
      
    </>
  )
}

export default Quiz