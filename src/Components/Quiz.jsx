import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summaried from "./Summary.jsx";

export default function Quiz() {
  // const[activeQuestionIndex,setActiveQuestionIndex]= useState(0)

//   const [answerState, setAnswerState] = useState("");
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestionIndex =userAnswer.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    // setAnswerState("answered");
    setUserAnswer((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
    // setTimeout(() => {
    //   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
    //     setAnswerState("correct");
    //   } else {
    //     setAnswerState("wrong");
    //   }

    //   setTimeout(() => {
    //     setAnswerState("");
    //   }, 2000);
    // }, 1000);
  },
  []);
  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  if (quizIsComplete) {
    return (
      <Summaried userAnswers={userAnswer}></Summaried>
    );
  }
  return (
    <div id="quiz">
      <Question 
      key={activeQuestionIndex}
      index={activeQuestionIndex}
      onSelectAnswer={handleSelectAnswer}
      onSkipAnswer={handleSkipAnswer}
      
       />
    </div>
  );
}
