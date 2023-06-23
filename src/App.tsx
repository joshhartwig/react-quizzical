import { useState, useEffect } from 'react'
import './css/App.css'
import { Question } from './types/Question'
import Quiz from './components/Quiz'
import { Answer } from './types/Answer'

interface TriviaQuestion {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: string[]
}

function App() {
  const [quizData, setQuizData] = useState<Question[]>([])

  useEffect(()=> {
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
    
    const fetchQuestions = async () => {
      const res = await fetch(url)
      const data = await res.json()
      const mappedQuestions: Question[] = data.results.map((q:TriviaQuestion, index: number) => {
        const answers: Answer[] = [...q.incorrect_answers, q.correct_answer].map(answer => {
          return {text: answer, correct: answer === q.correct_answer}
        })
        return {
          id: index,
          Detail: q.question,
          CorrectAnswer: q.correct_answer,
          Answers: answers,
          Answered: false
        }
      })
      setQuizData(mappedQuestions)
    }

    fetchQuestions();
  },[])

  return (
    <>
      {
        console.log(quizData)
      }
      <div className="text-center flex flex-col h-screen items-center justify-center">
        <h1 className="text-xl text-gray-900 mb-8">Quizzical</h1>
        
        <p className="w-3/5 mb-8">Quizzical is a quiz game that asks you a set of questions. You get scored based on the amount of correct answer you pick. Click Start Quiz to begin</p>
        <button className="bg-gray-500 text-gray-50 p-3 rounded-lg">Start Quiz</button>
      </div>
      
    </>
  )
}

export default App
