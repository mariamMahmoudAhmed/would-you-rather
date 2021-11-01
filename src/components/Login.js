import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'
import { setAuthedUser } from '../actions/AuthedUser'
import { connect } from 'react-redux'
import styled from 'styled-components'

const BtnLogIn = styled.button`
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

class Login extends Component {
  state = {
    authedUser: ''
  }
   handleOnChange = (e) => { 
    this.setState({ authedUser: e.target.value })
    this.props.dispatch(setAuthedUser(e.target.value))
  }
   interClickedPage = (e) => {
   e.preventDefault()
   this.handleOnChange()
   if (this.state.authedUser) {
   this.props.history.push('/')
   } else {
   alert('Please Select a User')
    }
  }

render() {

    const {users } = this.props
    const { authedUser } = this.state
    const {history, location:{from}} = this.props
    return (
    
    <div> 
    <br/><br/><br/>
    <form className='center' >
    <label ><b>Choose User Name To Sign In</b></label>
  <div >
    <br/><br/><br/>
    <select className='select-css' value={authedUser} onChange={this.handleOnChange}>
     <option value="" disabled>
        --Select a User--
      </option>
    {users &&Object.keys(users).map((id) => ({
     id: users[id].id,
     name: users[id].name
     })) 
     .map((user) => ( 
   <option  key={user.id} value={user.id } >
   {user.name}
   </option> 
     ))}

</select>
<br/><br/><br/>
    <BtnLogIn type="submit"
     onClick={(e) => {
     e.preventDefault()
  if (!this.state.authedUser) {
     alert('Please Select a User')
   } else {
   if(from){
   history.push(from.next)
   }else{
   history.push('/')
   }  
    }
    }}
    >Login</BtnLogIn>
    </div>
    </form> 
  </div>
   
    )
  }
}
const mapStateToProps = ({ users }) => ({
  users

})

export default connect(mapStateToProps)(withRouter(Login))