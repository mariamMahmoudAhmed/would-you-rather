import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'


const ProtectedRoute = ({ component: Component, exact, path, authedUser  }) => (
  <Route
    exact={exact}
    path={path}
    render={(props) =>
     authedUser ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/Login',
            from: { next: props.location.pathname },
          }}
        />
      )
    }
  />
)
const mapStateToProps = ({ authedUser }) => ({
  authedUser
})
export default connect(mapStateToProps)(ProtectedRoute)