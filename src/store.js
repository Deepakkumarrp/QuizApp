import { createStore, combineReducers } from 'redux';
import quizReducer from './reducers/quizReducer';
// import leaderboardReducer from './reducers/leaderboardReducer';

const rootReducer = combineReducers({
  quiz: quizReducer,
//   leaderboard: leaderboardReducer,
});

const store = createStore(rootReducer);

export default store;