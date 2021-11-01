import React, { Component } from 'react'
import { connect } from 'react-redux'


class UserCard extends Component {

render(){
 
return (
          <div>
          <h3 className='center'> Users</h3>
        <ul>
          {this.props.Userdata.map((user) => (
            <li key={user.id} className='center card' >

              <div>{user.name}
              <br/><br/>
               <img  src= {user.avatarURL} alt='' style={{ width: 128, height: 193}}/></div>
                <br/><br/>
                <div className='card right'>
                <div >
              <div > Answered Questions: {user.answerQuestions}</div>
              <br/><br/>
              <div > Asked Questions: {user.askedQuestions}</div> 
              <br/><br/>
              <div className='card right'style={{ backgroundColor: '#e6f0ff'}}> 
              Score: {user.answerQuestions + user.askedQuestions}</div>
              </div>
              </div>
            </li> 
          ))
         }
        </ul>      
        </div>
   )
 }
}
function mapStateToProps({ users}) {
   const Userdata=Object.values(users).map(user => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerQuestions: Object.values(user.answers).length,
      askedQuestions: user.questions.length,
      score: Object.values(user.answers).length + user.questions.length
    }))
     .sort((a, b) => b.score - a.score  )
   return {
   Userdata
  }
}
export default connect(mapStateToProps)(UserCard)