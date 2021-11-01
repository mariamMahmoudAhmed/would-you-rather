import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'


export class QuestionResult extends Component {

  render() {
    return (
      <div>

      </div>
    )
  }
}

function mapStateToProps({ users, authedUser }) {
  const user = users[authedUser];
  return {
    user
  };
}

export default withRouter(connect(mapStateToProps)(QuestionResult));


