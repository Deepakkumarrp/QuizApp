const initialState = {
    quizParameters: {},
  };
  
  const quizReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_QUIZ_PARAMETERS':
        return {
          ...state,
          quizParameters: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default quizReducer;