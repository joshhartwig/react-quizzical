import React, { useState } from 'react'
import { Question } from '../types/Question'
import TriviaQuestion from './TriviaQuestion'

interface Props {
  questions: Question[]
}

const Quiz: React.FC<Props> = (Props) => {
  const [gameOver,setGameOver] = useState<boolean>(false)
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0)

  // toggles game over, once toggled will render play again and correctanswercount
  const toggleGameOver = () => {
    setGameOver(true)
  }

  // reset the game state
  const toggleReset = () => {
    
    setCorrectAnswerCount(0);
  }

  // increments our correct answer count so we can display the correct answers below
  const incrementCorrectAnswer = () => {
    setCorrectAnswerCount(prev => prev += 1)
  }

  return (
    <div className='quiz ml-16 mt-14 flex-col '>
      {
        Props.questions.map(q => (
          <TriviaQuestion id={q.id} detail={q.detail} correctAnswer={q.correctAnswer} answers={q.answers} answered={q.answered} gameOver={gameOver} increment={incrementCorrectAnswer} />
        ))
      }
      <div className="quiz--btn-section flex items-center justify-center mt-16">
      {
        !gameOver ?
            <button onClick={() => {
            toggleGameOver()
            }} className="text-gray-50 bg-slate-800 rounded-lg p-4">Check Answers</button>
             : 
          <p className=" text-lg mb-4">
              You have answered {correctAnswerCount} answers correct out of {Props.questions.length}
              <span className="ml-4">
                <button onClick={() => {
                  toggleReset()
                }} className="text-sky-50 bg-gray-600 rounded-lg p-4">Next Match</button></span>
          </p>   
      }
      </div>
    </div>
  )
}

export default Quiz