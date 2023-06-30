import React, { useEffect, useState } from 'react'
import { Answer } from '../types/Answer'
import TriviaAnswer from './TriviaAnswer'
import { decode } from 'html-entities'

interface Props {
  id: number,
  detail: string,
  correctAnswer: string,
  answers: Answer[]
  answered?: boolean,
  gameOver: boolean,
  increment: () => void,
}


const TriviaQuestion : React.FC<Props> = (Props) => {

  const [answers, setAnswers] = useState<Answer[]>([])  // our list of answers
  const [correctAnswer, setCorrectAnswer] = useState<string>(''); // contains the correct answer for the question
  const [proposedAnswer, setProposedAnswer] = useState<string>('');
  const [answered,setAnswered] = useState(false)  // has the question been answered?
  
  useEffect(() => {
    setAnswers(Props.answers)
    setCorrectAnswer(Props.correctAnswer)

  },[])

  useEffect(() => {
    if(answered) {
      if(proposedAnswer === correctAnswer) {
        Props.increment()
      }
    }
  },[answered,proposedAnswer,correctAnswer])

  /* toggle is passed to the child component as a function in the properties. When triggered, it sets the correct
     answer in the array to selected. It sets the question to answered. It also sets the proposed answer, which
     may not be the correct answer.
  */
  const toggle = (id: number) => {
    setAnswers(prev => {
      return prev.map(a => {
        return a.id === id ? {...a, isSelected: !a.isSelected} : a
      })
    })
    
    setAnswered(true) 
    setProposedAnswer(answers[id].text)
  }

  return (
    
    <div className="w-2/3 m-6">
      
      <p className="text-gray-900">{decode(`${Props.detail}`,{level:'html5'})}</p>
        <div className="answers flex">
          {
            answers.map(a => (
              <TriviaAnswer 
                index={a.id} 
                detail={a.text} 
                selected={a.isSelected} 
                toggle={toggle} 
                answered={answered}
                gameOver = {Props.gameOver} 
                correctAnswer = {Props.correctAnswer}
              />
            )) 
          }
      </div>
    </div>
  )
}

export default TriviaQuestion