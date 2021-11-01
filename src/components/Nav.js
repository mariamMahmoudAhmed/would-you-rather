import React from 'react'
import { FaBars } from 'react-icons/fa'
import { connect } from 'react-redux'
import { NavLink as Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import { removeAuthedUser } from '../actions/AuthedUser'

 const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

`;

 const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;
 const NavSpan = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  
  &.active {
    color: #15cdfc;
  }
`;


 const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

 const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

 const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

 const NavBtnLink = styled.a`
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
    background: #fff;
    color: #010606;
  }
`;


const Navbar = ({ users, authedUser, dispatch, history }) => {
   
   const userDetails = users[authedUser] 
  return (
      <Nav>
       
        <Bars />    
        <NavMenu>
          <NavLink to='/Leaderboard' >
            Leaderboard
          </NavLink>
          <NavLink to='/add' >
            NewQuestion
          </NavLink>
          <NavLink to='/' >
            Home
          </NavLink>
        </NavMenu>
        {authedUser && (
        <NavBtn>
         <div> <NavSpan>Hello,{userDetails.name}</NavSpan></div>
          <div><img src={userDetails.avatarURL} alt="" className="photo"/></div>
          <NavBtnLink  onClick={() => {
          dispatch(removeAuthedUser())
             history.push('/Login')
              }} >Log out</NavBtnLink>
        </NavBtn>
        )}
      </Nav>
  )
}

function mapStateToProps({authedUser, users}) {
   return {
   authedUser,
   users
  }
}
export default withRouter(connect(mapStateToProps)(Navbar))