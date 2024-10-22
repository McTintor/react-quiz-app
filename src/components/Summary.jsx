import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions'

export default function Summary({ userAnswers }) {

    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter(
        (answer, index) => answer === QUESTIONS[index].answers[0]
    );
    const skippedAnswersShare = (skippedAnswers.length / userAnswers.length) * 100;
    const correctAnswersShare = (correctAnswers.length / userAnswers.length) * 100;
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare;

    return <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{Math.round(skippedAnswersShare * 100) / 100}%</span>
                <span className="skipped">Skipped</span>
            </p>
            <p>
                <span className='number'>{Math.round(correctAnswersShare * 100) / 100}%</span>
                <span className="skipped">Answered Correctly</span>
            </p>
            <p>
                <span className='number'>{Math.round(wrongAnswersShare * 100) / 100}%</span>
                <span className="skipped">Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {userAnswers.map((answer, index) => {
                let cssClass = 'user-answer';

                if (answer === null) {
                    cssClass += ' skipped';
                } else if (answer === QUESTIONS[index].answers[0]) {
                    cssClass += ' correct';
                } else {
                    cssClass += ' wrong';
                }

                return (
                    <li key={index}>
                        <h3>{index + 1}</h3>
                        <p className='question'>{QUESTIONS[index].text}</p>
                        <p className={cssClass}>{answer ?? 'Skipped'}</p>
                    </li>
                )
            })}
        </ol>
    </div>
}