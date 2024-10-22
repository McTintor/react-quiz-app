import QuestionTimer from "./QuestionTimer"
import Answers from "./Answers"
import { useState } from "react"
import QUESTIONS from '../questions'

export default function Question({questionIndex, onSkipAnswer, onSelectAnswer}) {
    
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    let timer = 10000;

    if (answer.selectedAnswer) {
        timer = 1000;
    }

    if (answer.isCorrect !== null) {
        timer = 2000;
    }

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[questionIndex].answers[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }
    
    return (
        <div id="question">
            <QuestionTimer key={timer} mode={answerState} timeout={timer} onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : null} />
            <h2>{QUESTIONS[questionIndex].text}</h2>
            <Answers onSelect={handleSelectAnswer} answers={QUESTIONS[questionIndex].answers} selectedAnswer={answer.selectedAnswer} answerState={answerState} />
        </div>
    )
}