import React, { Component } from 'react'
import { handleSaveQuestionAnswer } from '../actions/User'
import { connect } from 'react-redux'
import { withRouter ,Link} from 'react-router-dom'
import styled from 'styled-components'
import { Redirect } from 'react-router'

const BtnBack = styled(Link)`
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
const BtnPoll = styled.button`
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

class questions extends Component {
  state = {
    value: ''
  }
   handleOnChange = (e) => {
    this.setState({ value: e.target.value })
    
  }
    handleSubmit = (e)=> {
    e.preventDefault()
    let answer =this.state.value
    const { authedUser, dispatch } = this.props
    const {id} =this.props.location.state
    if (answer!== '') {
      
      dispatch(handleSaveQuestionAnswer(authedUser, id, answer))
       alert('Question Answerd Successfully')
      this.props.history.push('/')
    }else{
        alert('Please Choose a Value !')

    }
  }

   renderSwitch = () => {
   const{Answered}=this.props.location.state
   const {name} =this.props.location.state
   const {avatar} =this.props.location.state
   const {optionOne} =this.props.location.state
   const {optionTwo} =this.props.location.state
   const {optionOneLength} =this.props.location.state
   const {optionTwoLength} =this.props.location.state
   const {votes} =this.props.location.state
   const {userSelected} =this.props.location.state
    switch (Answered) {
    case true :
     return (
      <div className='card'>
    <div> <h4>{name} Asks </h4>
    <img alt='' src={avatar} /></div>
    <div className='card right'>
    <div>
    <h2>Results : </h2> 
    <h4>Would you rather {optionOne}?</h4>
    <p>{optionOneLength} out of {votes} votes </p>
    <progress id="file" value={optionOneLength} max="5" ></progress>
    <h4>Would you rather {optionTwo}?</h4>
    <p>{optionOneLength} out of {votes} votes </p>
    <progress id="file" value={optionTwoLength} max="5"></progress> 
    {userSelected === 'optionOne' && <p className='active'>Your Have Chosen {optionOne}</p>}
    {userSelected === 'optionTwo' && <p className='active'>Your Have Chosen {optionTwo}</p>}    
        </div>
     <div className='center'><BtnBack to='/'>Back</BtnBack></div>  
    </div></div>
   )
    case false:
     return (
     <div className='card'>
       <div > <h4>{name} Asks </h4>
        <img alt='' src={avatar} /></div>
        <div className='card right'><div> <h3>Would You Rather ..</h3>
        <form >
        <label>
        <input type="radio"  name="question" onChange={this.handleOnChange}value="optionOne"/>
        {optionOne}</label><br/>
        <label>
        <input type="radio"  name="question" onChange={this.handleOnChange}value="optionTwo"/>
        {optionTwo}</label><br/>
        <br/> 
       <BtnPoll type="submit" onClick={this.handleSubmit}
      >Submit Answer</BtnPoll>
    </form>
    </div></div>
    </div>
    )
  default:
   return (
     <Redirect to='/NotFound'/>
     )
    }
  }
  renderNotExiest = () => {
   return  <Redirect to='/NotFound'/>
  }

  render() {
  const {question_id} =this.props.match.params
    return (
        <div>{(this.props.questions.includes(question_id.substring(1))?
        this.renderSwitch() : 
        this.renderNotExiest())
        }</div>
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
    authedUser,
    questions:Object.keys(questions)
  }
}
export default connect(mapStateToProps)(withRouter(questions))

