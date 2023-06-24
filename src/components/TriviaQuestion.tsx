import React from 'react'

interface Props {
  id: number,
  detail: string,
  correctAnswer: string,
}

const TriviaQuestion : React.FC<Props> = (Props) => {
  return (
    <div>
      {Props.detail}
    </div>
  )
}

export default TriviaQuestion