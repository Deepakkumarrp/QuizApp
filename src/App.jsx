import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import QuizSetup from './Components/QuizSetup'
import QuizPage from './Components/QuizPage'
import Leaderboard from './Components/Leaderboard'
import Result from './Components/Result'

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<QuizSetup />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/result' element={<Result />} />
        </Routes>
    </>
  )
}

export default App

{/* <Router>
      <Switch>
        <Route path="/" exact component={QuizSetup} />
        <Route path="/quiz" component={QuizPage} />
        <Route path="/result" component={ResultModal} />
        <Route path="/leaderboard" component={Leaderboard} />
      </Switch>
    </Router> */}