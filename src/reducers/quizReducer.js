const initialState = {
    quizParameters: {
        name: "User",
        category: "9",
        difficulty: "easy",
        numQuestions: 5,
    },
    questions: [],
    currentQuestionIndex: 0,
  };
  
  const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_QUIZ_PARAMETERS':
        return {
          ...state,
          quizParameters: action.payload,
        };
        case `FETCH_QUESTIONS_SUCCESS`:
            return {
            ...state,
            questions: action.payload,
            };
      default:
        return state;
    }
  };
  
  export default quizReducer;

