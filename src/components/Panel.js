import { useState } from "react"
import React from 'react'
import { connect } from 'react-redux'
import UnansweredCard from'./UnansweredCard'
import AnsweredCard from'./AnsweredCard'



function Panel({unAansweredQuestions,answeredQuestions}) {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Unanswered Questions
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Answered Questions
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >        
        <ul>
            {unAansweredQuestions.map(question => (
            <UnansweredCard
              key={question.id}
              question_id={question.id}              
            />
          ))}
         </ul>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
        <ul>
            {answeredQuestions.map(question => (
            <AnsweredCard
              key={question.id}
              question_id={question.id}              
            />
          ))}
         </ul>
        </div>
      </div>
    </div>
  )
}


function mapStateToProps({ authedUser, users, questions }) {
 const answeredQestionIds = Object.keys(users[authedUser].answers)
 const answeredQuestions = Object.values(questions)
  .filter(question => answeredQestionIds.includes(question.id))
  .sort((a, b) => b.timestamp - a.timestamp)

   const unAansweredQuestions = Object.values(questions)
    .filter(question => !answeredQestionIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
   return {
      unAansweredQuestions,
      answeredQuestions,
    }
}
export default connect(mapStateToProps)(Panel)