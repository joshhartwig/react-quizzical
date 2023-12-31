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
  const [playing, setPlaying] = useState<boolean>(false)

  const fetchQuestions = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple';
    const res = await fetch(url)
      const data = await res.json()
      const mappedQuestions: Question[] = data.results.map((q:TriviaQuestion, index: number) => {
        const answers: Answer[] = [...q.incorrect_answers, q.correct_answer].map((answer,idx) => {
          return {id: idx, text: answer, correct: answer === q.correct_answer, isSelected: false}
        })
        return {
          id: index,
          detail: q.question,
          correctAnswer: q.correct_answer,
          answers: answers,
          answered: false
        }
      })
    setQuizData(mappedQuestions)
  }

  const resetGame = () => {
    setPlaying(false)
    fetchQuestions()
  }

  useEffect(()=> {
    fetchQuestions();
  },[])

  return (
    <div className='app'>
      <div className="absolute top-1 -right-24 w-72 h-72 bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>  
    {
      !playing ? <div className="text-center flex flex-col h-screen items-center justify-center">
      <h1 className="text-5xl font-title text-sky-950 mb-8">Quizzical</h1>
      
      <p className="w-3/5 mb-8 font-display text-xl">Quizzical is a quiz game that asks you a set of questions. You get scored based on the amount of correct answers you pick. Click Start Quiz to begin</p>
      <button className="bg-slate-500 text-sky-50 p-4 rounded-lg" onClick={()=> setPlaying(true)}>Start Quiz</button>
    </div> : <Quiz questions={quizData} reset={resetGame}/> 
    }
    <div className="absolute bottom-1 -left-24 w-72 h-72 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"></div>
      
    </div>
  )
}

export default App
