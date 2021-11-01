import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link} from 'react-router-dom'
import styled from 'styled-components'
const BtnUPoll = styled(Link)`
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


class UnansweredCard extends Component {


  render() {
     const {author,question} = this.props
       const question_id =question.id
       console.log(question_id)
    return (

     <div className='card'>
       <div > <h4>{author.name} </h4>
       <h4>Asks</h4>
        <img alt='' src={author.avatarURL} /></div>
        <div className='card right'><div> <h3>Would You Rather ..</h3>
        <p>{question.optionOne.text}</p>
        <p>or</p>
        <p>{question.optionTwo.text}</p><br/>
        <br/> 
        <BtnUPoll  to={{pathname:`/questions:${question_id}`,
     state :{
     Answered:false,
     id:`${question_id}`,
     name:`${author.name}`,
     avatar:`${author.avatarURL}`,
     optionOne:`${question.optionOne.text}`,
     optionTwo:`${question.optionTwo.text}`
     }
     }}
    >View Poll</BtnUPoll>
    </div></div>
    </div>

    )
  }
}

function mapStateToProps({ users, questions, authedUser },{ match, question_id }){
 let question, author
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
    authedUser
  }
}
export default connect(mapStateToProps)(withRouter(UnansweredCard))