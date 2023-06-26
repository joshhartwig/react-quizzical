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
}


const TriviaQuestion : React.FC<Props> = (Props) => {

  const [answers, setAnswers] = useState<Answer[]>([])
  const [answered,setAnswered] = useState(false)
  
  useEffect(() => {
    setAnswers(Props.answers)
  },[])

  const toggle = (id: number) => {
    setAnswers(prev => {
      return prev.map(a => {
        return a.id === id ? {...a, isSelected: !a.isSelected} : a
      })
    })
    setAnswered(true) 
  }

  // this is probably hacky idea, i did this because the method signature was not matching the props
  // i was not able to have a nullabe type as function in the prop
  const doNothing = () => {
    return;
  }

  return (
    
    <div className="w-2/3 m-6">
      
      <p className="text-gray-900">{decode(`${Props.detail}`,{level:'html5'})}</p>
        <div className="answers flex">
          {
            answers.map(a => (
              <TriviaAnswer index={a.id} detail={a.text} selected={a.isSelected} toggle={toggle} answered={answered} />
            )) 
          }
      </div>
    </div>
  )
}

export default TriviaQuestion