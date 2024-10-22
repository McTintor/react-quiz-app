# Quiz App

A responsive, interactive quiz application built with React. This project allows users to answer a series of multiple-choice questions, with a timer for each question. At the end of the quiz, users receive a summary of their performance, including skipped, correct, and incorrect answers.

Live version here: https://mctintor-react-quiz-app.netlify.app/

## Features

- **Multiple-choice questions:** Users can select one answer from a list of shuffled options.
- **Question timer:** A countdown timer for each question, which automatically skips the question when time runs out.
- **Answer summary:** At the end of the quiz, users are provided with a performance summary, including the percentage of correct, incorrect, and skipped answers.
- **Dynamic UI:** Questions and answers are dynamically shuffled and displayed, and the layout is responsive.

## Components

### 1. `App.jsx`
The entry point of the application. It includes the header and renders the `Quiz` component.

### 2. `Quiz.jsx`
This component handles the main quiz logic. It tracks the user's answers and manages the flow of the quiz. Key functionalities include:
- Managing the quiz state and checking if the quiz is complete.
- Handling user actions such as selecting and skipping answers.
- Passing necessary props to the `Question` component.

### 3. `Question.jsx`
This component displays the current question and a list of answer options. It also passes user interactions (e.g., answer selection, skipping) back to the `Quiz` component.

### 4. `Answers.jsx`
Handles rendering the list of possible answers. The answers are shuffled and displayed, with each answer having a conditional style based on the current game state (e.g., selected, correct, wrong).

### 5. `QuestionTimer.jsx`
Displays a countdown timer for each question. When the timer expires, it triggers the automatic skipping of the question.

### 6. `Summary.jsx`
Once the quiz is completed, this component displays a summary of the user's performance. It calculates the percentage of skipped, correct, and wrong answers and lists the questions with the user's responses.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/McTintor/react-quiz-app.git
   ```

2. Navigate into the project directory:
   ```bash
   cd quiz-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will run locally at `http://localhost:3000`.

## Usage

- Select an answer from the available options for each question.
- You can skip a question if you're unsure by clicking the "Skip" button.
- A timer will appear on each question, and if it runs out, the question will be automatically skipped.
- After completing all the questions, a summary will show your results: the percentage of correct, skipped, and wrong answers.
