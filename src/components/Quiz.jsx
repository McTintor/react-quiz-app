import { useState, useCallback } from "react";
import QUESTIONS from '../questions';
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    return (
        <div id="quiz">
            {quizIsComplete ? (
                <Summary userAnswers={userAnswers} />
            ) : (
                <Question
                    key={activeQuestionIndex}
                    questionIndex={activeQuestionIndex}
                    onSkipAnswer={handleSkipAnswer}
                    onSelectAnswer={handleSelectAnswer}
                />
            )}
        </div>
    );
}
