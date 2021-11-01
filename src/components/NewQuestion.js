import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {handleAddQuestion} from'../actions/Questions'
import styled from 'styled-components'

const BtnAdd = styled.button`
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
class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
  }
    handleOnChange = (e) => {
      this.setState({ [e.target.id]: e.target.value })
      
  }

  handleSubmit  = (e) => {
    e.preventDefault()
    const {  optionOne, optionTwo} = this.state
    const { authedUser, dispatch } = this.props
    dispatch(handleAddQuestion(optionOne,optionTwo,authedUser))
    alert('The Question Have Been added Successfully')
    this.props.history.push('/')
  }

  render() {
    return (

     <form>
     <div className='center' >
     <br/>
    <p ><b>Add New Question</b></p>
    <br/>
    <h5>Would You Rather ?</h5>
    <input className='select-css' type="text" id="optionOne" placeholder="First Option" required
            value={this.state.optionOne}
            onChange={this.handleOnChange} />
    <br/>
    <h5>Or</h5>
    <input className='select-css' type="text" id="optionTwo" placeholder="Second Option" required
            value={this.state.optionTwo}
            onChange={this.handleOnChange}/>
    <br/><br/>
    <BtnAdd type="submit" onClick={this.handleSubmit}>Add Question</BtnAdd>
    </div>
    </form>
    
    )
  }
}

function mapStateToProps({ users, authedUser}) {
   return {
   users,
   authedUser
  }
}

export default connect(mapStateToProps)(withRouter(NewQuestion))
