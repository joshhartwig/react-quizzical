/*
  Our quick component will display question components.
  Question component contains
    - array of answer components
    - Correct answer in state as string
    - is answered already? Ensure once answered you can no longer click other answers, grey the text out 
    - allQuestionsAnswered?(boolean) ensure every question is answered before check answers
    - check answers - if allquestionsAnswered move to results page
  Answer components
    - details 
    - isSelected
  Answer type 
    - details
    - isTrue
  Results components
    - should be almost the same as quiz component
    - renders questions, what you answered, what the correct answer is
    - nothing is clickable
    - play again resets and puts back to start

  will need html entities package to decode text and open trivia api
*/

import React from 'react'

const Quiz = () => {
  return (
    <div>Quiz</div>
  )
}

export default Quiz