import React, { useEffect } from "react";
import { VStack, Button, Text } from "@chakra-ui/react"; // Import VStack, Button, and Text from Chakra UI

const QuizQue = ({
  question,
  onAnswerSubmit,
  onNextQuestion,
  onPreviousQuestion,
  timeLeft,
  currentQuestionIndex,
  totalQuestions,
}) => {
  const {
    question: questionText,
    incorrect_answers,
    correct_answer,
  } = question;
  const options = [...incorrect_answers, correct_answer].sort(
    () => Math.random() - 0.5
  );

  useEffect(() => {
    if (timeLeft === 0) {
      onNextQuestion();
    }
  }, [timeLeft, onNextQuestion]);
  

  const handleOptionClick = (option) => {
    onAnswerSubmit(option);
  };

  return (
    <VStack align="flex-start">
      <Text fontWeight="bold" mb={4}>
        {questionText}
      </Text>
      {options.map((option, index) => (
        <Button
          key={index}
          variant="outline"
          mb={2}
          onClick={() => handleOptionClick(option)}
          isDisabled={timeLeft === 0}
        >
          {option}
        </Button>
      ))}
      <Button
        onClick={onPreviousQuestion}
        isDisabled={currentQuestionIndex === 0 || timeLeft === 0}
      >
        Previous
      </Button>
      <Button
        onClick={onNextQuestion}
        isDisabled={currentQuestionIndex === totalQuestions - 1 || timeLeft === 0}
      >
        Next
      </Button>
    </VStack>
  );
};

export default QuizQue;