
import React from 'react'
import { Question } from '../types/Question'
import TriviaQuestion from './TriviaQuestion'

interface Props {
  questions: Question[]
}

const Quiz: React.FC<Props> = (Props) => {
  return (
    <>
      {
        Props.questions.map(q => (
          <TriviaQuestion id={q.id} detail={q.detail} correctAnswer={q.correctAnswer} />
        ))
      }
      
    </>
  )
}

export default Quiz