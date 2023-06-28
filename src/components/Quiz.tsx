
import React, { useState } from 'react'
import { Question } from '../types/Question'
import TriviaQuestion from './TriviaQuestion'


interface Props {
  questions: Question[]
}

/*
  TODO: create use effect to check if every question is answered if so allow the next button and calc results
*/

const Quiz: React.FC<Props> = (Props) => {
  const [gameOver,setGameOver] = useState<boolean>(false)
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0)

  // toggles game over, once toggled will render play again and correctanswercount
  const toggleGameOver = () => {
    setGameOver(true)
  }

  // increments our correct answer count so we can display the correct answers below
  const incrementCorrectAnswer = () => {
    setCorrectAnswerCount(prev => prev += 1)
  }

  return (
    <>
      {
        Props.questions.map(q => (
          <TriviaQuestion id={q.id} detail={q.detail} correctAnswer={q.correctAnswer} answers={q.answers} answered={q.answered} gameover={gameOver} />
        ))
      }

      <button 
        onClick={() => {
          toggleGameOver()
          console.log(`gameover`)
        }}
        className="text-gray-50 bg-slate-800 rounded-lg p-2">Check Answers</button>
      
    </>
  )
}

export default Quiz