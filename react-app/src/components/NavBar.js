import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../store/session"

const NavBar = () => {

  const sessionUser=useSelector(state=>state.session.user)
  const dispatch=useDispatch()
  const onClick = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login('demo@aa.io', 'password'))

  }


  return (
   
    <nav >
        <div className='navContainer'>
        <div className='logo'><NavLink to='/'style={{textDecoration:'none', color:'rgb(0, 168, 126)'}}>OfferGram</NavLink></div>
        <div className='searchContainer'>
        <div><input placeholder='search'></input><button type="submit" style={{backgroundColor:'#00a87e', border: 'none', borderRadius:'10%'}}><i className="fa fa-search" style={{color: 'white'}}></i></button></div>
        <div><select> <option   value=''> -- select a city -- </option><option value='Los Angels'>Los Angels</option><option value="New York City">New York City</option></select></div>
        </div>
        {/* <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div> */}
        {/* <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
        {sessionUser ? (
        <>
        <div className='sellNav'>
        <i className="fas fa-funnel-dollar"></i>
        <NavLink to='/selling'style={{textDecoration:'none',fontSize:'10px'}}>Selling</NavLink>
        </div>
        <div>welcome {sessionUser?.username}</div>
        <img src={(sessionUser?.profilePic)} style={{height:"10px"}} />
        <div>
          <LogoutButton />
        </div>
        </>) : (
          
          <div className='rightContainer'>
            <button onClick={onClick} className='demoword'>Demo</button>
            <div><NavLink to='/login' exact={true} activeClassName='active' className='loginword'>Login</NavLink></div>
            <div><NavLink to='/sign-up' exact={true} activeClassName='active' className='signupword'>Sign Up</NavLink></div>
            
          </div>
          
        )}
        </div>
    </nav>
    
  );
}

export default NavBar;
