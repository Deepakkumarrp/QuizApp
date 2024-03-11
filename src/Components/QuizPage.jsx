// import React, { useEffect, useState } from "react";

// function QuizPage() {
//     const timeLength = {
//         hard : 30,
//         medium: 20,
//         easy: 10
//     }
//   const api =
//     "https://opentdb.com/api.php?amount=3&category=9&difficulty=medium&type=multiple";
//   const [questions, setQuestions] = useState([]);
// //   let interval;
// //   const [count, setCount] = useState(0);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [timer, setTimer] = useState(2);
//   const currentQuestion = questions[currentQuestionIndex];
//   const totalQuestions = questions.length;

//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);

//   useEffect(() => {
//     fetch(api)
//       .then((res) => res.json())
//       .then((data) => {
//         setQuestions(data.results);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

// //   useEffect(() => {
// //     function changeQuestion(num) {}
// //   }, [count]);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setTimer((prevTimer) => prevTimer - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

// //   useEffect(() => {
// //     if (timer === 0) {
// //       // Move to the next question when the timer reaches 0
// //       setTimer(10); // Reset timer for the next question
// //       if (currentQuestionIndex < totalQuestions - 1) {
// //         // If there are more questions, move to the next question
// //         setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
// //       } else {
// //         // Handle logic when all questions are answered (end of the quiz)
// //         console.log('Quiz completed!');
// //       }
// //     }
// //   }, [timer, currentQuestionIndex, totalQuestions]);

// useEffect(() => {
//     if (timer === 0) {
//       handleAnswerSubmission(null); // Treat unanswered questions as incorrect
//     }
//   }, [timer]);

//   const handleAnswerSelection = (answer) => {
//     setSelectedAnswer(answer);
//   };

//   const handleAnswerSubmission = (submittedAnswer) => {
//     // If submittedAnswer is null, treat it as unanswered
//     const isCorrect = submittedAnswer === currentQuestion.correct_answer;

//     if (isCorrect) {
//       setScore((prevScore) => prevScore + 1);
//     }

//     // Move to the next question or end the quiz if all questions are answered
//     setTimer(2); // Reset timer for the next question
//     setSelectedAnswer(null);
//     if (currentQuestionIndex < totalQuestions - 1) {
//       setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
//     } else {
//         console.log("DONE")
//         return <div>QUIZ COMPLETED {score}</div>
//       console.log('Quiz completed!');
//       console.log('Final Score:', score);
//     }
//   };

//   return (
//     <div>
//       {currentQuestion && (
//         <div>
//           <h2>{currentQuestion.question}</h2>
//           <ul>
//             {currentQuestion.incorrect_answers.map((answer, index) => (
//               <li key={index}>
//                 <button
//                   onClick={() => handleAnswerSelection(answer)}
//                   disabled={selectedAnswer !== null}
//                 >
//                   {answer}
//                 </button>
//               </li>
//             ))}
//             <li>
//               <button
//                 onClick={() => handleAnswerSelection(currentQuestion.correct_answer)}
//                 disabled={selectedAnswer !== null}
//               >
//                 {currentQuestion.correct_answer}
//               </button>
//             </li>
//           </ul>
//           <p>Timer: {timer}s</p>
//           {selectedAnswer !== null && (
//             <p>
//               Your answer: {selectedAnswer} - {selectedAnswer === currentQuestion.correct_answer ? 'Correct!' : 'Incorrect!'}
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default QuizPage;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import QuizQue from "../Components/QuizQue";
import { fetchQuestionsSuccess } from "../action/quizAction";
// import QuizQue from "./QuizQue"

const Quizpage = () => {
  const { name , category, difficulty, numQuestions } = useSelector((state) => state.quiz.quizParameters);
//   console.log(category, difficulty, numQuestions);
  const api = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`;
//   const [quizData, setQuestions] = useState([]);
    const quizData = useSelector((state) => state.quiz.questions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const questions = quizData || [];
  const totalQuestions = questions.length;
  const dispatch = useDispatch();

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchQuestionsSuccess(data.results));
        // setQuestions(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch]);

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleAnswerSubmit = (answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
        if(currentQuestion==questions.length-1) {
            localStorage.setItem('scoreData',JSON.stringify({name,score}))
            navigate("/leaderboard")
        }

    handleNextQuestion();
  };

  const handleQuizSubmit = () => {
    // Calculate user's performance metrics
    // Display modal or popup with performance metrics
  };

//   if (quizData.isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (quizData.isError) {
//     return <div>Error occurred while fetching data</div>;
//   }

  if (totalQuestions === 0) {
    return <div>No questions available</div>;
  }

  if (currentQuestionIndex === totalQuestions) {
    return (
      <div>
        <h1>Quiz Completed</h1>
        {/* Display performance metrics */}
        {/* Render a button to handleQuizSubmit */}
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return <div>Question not available</div>;
  }

  return (
    <div>
      <h1>Quiz Page</h1>
      <p>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
      <QuizQue
        question={currentQuestion}
        onAnswerSubmit={handleAnswerSubmit}
        onNextQuestion={handleNextQuestion}
        onPreviousQuestion={handlePreviousQuestion}
      />
    </div>
  );
};

export default Quizpage;
