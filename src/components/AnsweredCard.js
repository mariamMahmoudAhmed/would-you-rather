import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter ,Link} from 'react-router-dom'
import styled from 'styled-components'

const BtnPoll = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #e6f0ff;
    color: #010606;
  }
`;


class AnsweredCard extends Component {

  render() {
  const {author,question,user} = this.props
  //const question_id =question.id
  const userSelection = user.answers[this.props.question_id]
    return (
    
     <div className='card'>
     <div><h4>{author.name}</h4>
     <h4>Asked</h4>
     <img alt='' src={author.avatarURL} /></div>
     <div className='card right'><div>
     <p>Would you rather {question.optionOne.text} ? </p>
     <br/>
     <p> ... or </p> 
     <br/><br/>
     <BtnPoll to={{pathname:`/questions:${this.props.question_id}`,
     state :{
     id:`${this.props.question_id}`,
     Answered:true,
     name:`${author.name}`,
     avatar:`${author.avatarURL}`,
     optionOne:`${question.optionOne.text}`,
     optionOneLength:`${question.optionOne.votes.length}`,
     votes: `${question.optionOne.votes.length+question.optionTwo.votes.length}`,
     optionTwo:`${question.optionTwo.text}`,
     optionTwoLength:`${question.optionTwo.votes.length}`,
     userSelected :`${userSelection}`
     }
     }} >View Poll</BtnPoll>
     </div>
     </div>
     </div>             
    )
  }
}

function mapStateToProps({ users, questions, authedUser },{ match, question_id }){
 let question, author
 const user = users[authedUser]
 if (question_id !== undefined) {
    question = questions[question_id]
    author = users[question.author]
  } else {
    const { question_id } = match.params
    question = questions[question_id]
    }
     return {
    question,
    author,
    authedUser,
    user
  }
}
export default connect(mapStateToProps)(withRouter(AnsweredCard))
