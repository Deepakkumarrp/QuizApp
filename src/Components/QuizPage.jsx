import React, { useEffect, useState } from 'react'

function QuizPage() {
    const api = "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple";
    const [data,setData] = useState(null);
    useEffect(() => {
        fetch(api)
        .then(res => res.json())
        .then(data => {

        })
        .catch(err => {
            console.log(err);
        })
        
    },[])
  return (
    <div>QuizPage</div>
  )
}

export default QuizPage