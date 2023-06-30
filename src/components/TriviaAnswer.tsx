import React from 'react'
import { decode } from 'html-entities'

interface Props {
  index: number,
  detail: string,
  selected: boolean
  toggle: (id: number) => void,
  answered: boolean,
  gameOver: boolean,
  correctAnswer: string
}

const TriviaAnswer: React.FC<Props> = (Props) => {
  let bgClass;

  if(Props.gameOver) {
    if(Props.selected) {
      bgClass = "bg-cyan-200"
    } else if(Props.detail === Props.correctAnswer) {
      bgClass = "bg-red-500" 
    } else {
      bgClass = "bg-white-50"
    }
  } else {
    bgClass = Props.selected ? "bg-cyan-200 text-blue-900" : "bg-white-100 text-blue-900"
  }
  return (
    <div className="answer text-sm">
      {
        Props.answered ? 
        <div
        className={`${bgClass} mb-1 border border-gray-400 rounded-lg m-2 p-2`}>{decode(Props.detail)}</div> : 
          <div
          onClick={()=> {
            Props.toggle(Props.index)
          }} 
          className={`${bgClass} mb-1 border border-gray-400 rounded-lg m-2 p-2`}>{decode(Props.detail)}</div>
      }
    </div>
  )
}

export default TriviaAnswer