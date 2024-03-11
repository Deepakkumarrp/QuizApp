export const setQuizParameters = (params) => ({
    type: 'SET_QUIZ_PARAMETERS',
    payload: params,
})


export const fetchQuestionsSuccess = (questions) => ({
  type: 'FETCH_QUESTIONS_SUCCESS',
  payload: questions,
});