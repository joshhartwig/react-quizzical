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
  return (
    <div className="answer">
      {
        Props.answered ? 
        <div
        className={`${Props.selected ? "bg-orange-500 text-gray-800" : "bg-blue-100 text-gray-900"} mb-1 border border-gray-500 rounded-lg m-2 p-2`}>{decode(Props.detail)}</div> : 
          <div
          onClick={()=> {
            Props.toggle(Props.index)
          }} 
          className={`${Props.selected ? "bg-blue-500 text-gray-50" : "bg-blue-100 text-gray-900"} mb-1 border border-gray-500 rounded-lg m-2 p-2`}>{decode(Props.detail)}</div>
      }

      // game over 
          // if selected and correct ? orange : correct ? grey : white

    </div>
  )
}

export default TriviaAnswer