import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setQuizParameters } from "../action/quizAction";

function QuizSetup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector(state => state);
  const [params, setParams] = useState({
    name: "",
    category: "9",
    difficulty: "easy",
    numQuestions: 5,
  });
  function handleOnFormSubmit(e) {
    e.preventDefault();
    console.log(params);
    dispatch(setQuizParameters(params));
    navigate('/quiz');
  }
  function handleOnInputChange(e) {
    const { name, value } = e.target;
    setParams((prevParams) => ({ ...prevParams, [name]: value }));
  }
  return (
    <div>
      <h2>Set up your Quiz</h2>
      <pre>
        <code>{JSON.stringify(store)}</code>
      </pre>
      <form action="" onSubmit={handleOnFormSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            value={params.name}
            onChange={handleOnInputChange}
          />
        </label>

        <label htmlFor="category">
          Category:
          <select name="category" id="category" value={params.category} onChange={handleOnInputChange}>
            <option value="9">General Knowledge</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
          </select>
        </label>

        <label htmlFor="difficulty">
          Difficulty:
          <select
            name="difficulty"
            value={params.difficulty}
            onChange={handleOnInputChange}
            id="difficulty"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>

        <label>
          Number of Questions:
          <input
            type="number"
            name="numQuestions"
            value={params.numQuestions}
            onChange={handleOnInputChange}
          />
        </label>
        <button>Start Quiz</button>
      </form>
    </div>
  );
}

export default QuizSetup;
