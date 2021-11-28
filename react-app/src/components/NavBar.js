import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css'
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../store/session"
import { useState } from 'react';

import { useEffect } from 'react';
import { getUsers } from '../store/user';
import { getMessages } from '../store/message';

const NavBar = () => {

  const sessionUser=useSelector(state=>state.session.user)
  const [msgList, setMsgList]=useState(false)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getUsers())
    
},[dispatch])

  const allUsers=useSelector(state=>Object.values(state.user))

  // const onClick = (e) => {
  //   e.preventDefault();
  //   return dispatch(sessionActions.login('demo@aa.io', 'password'))

  // }


  return (
   
    <nav >
        <div className='navContainer'>
        
        <div className='logo'><NavLink to='/'style={{textDecoration:'none', color:'rgb(0, 168, 126)'}}>OfferGram</NavLink></div>
        {/* <div className='searchContainer'>
        <div><input placeholder='search'></input><button type="submit" style={{backgroundColor:'#00a87e', border: 'none', borderRadius:'10%'}}><i className="fa fa-search" style={{color: 'white'}}></i></button></div>
        <div><select> <option   value=''> -- select a city -- </option><option value='Los Angels'>Los Angels</option><option value="New York City">New York City</option></select></div>
        </div> */}
       
        {sessionUser ? (
        <>
        
        <div className='sellNav'>
        <i className="fas fa-funnel-dollar"></i>
        <NavLink to='/selling'style={{textDecoration:'none',fontSize:'10px'}}>Selling</NavLink>
        </div>
        <div className='msgNav'>
        <i className="fas fa-envelope-open-text"></i>
        <span style={{fontSize:'10px'}}>inbox</span>
        <div style={{fontSize:'10px'}} className='dropdownContent'>
        {allUsers?.map(user=>(
          <div ><NavLink to={`/messages/sender/${sessionUser.id}/receiver/${user.id}`}>{user.username}</NavLink></div>
        ))}
        </div>
        </div>
        <div>welcome {sessionUser?.username}</div>
        <img src={(sessionUser?.profilePic)} style={{height:"10px"}} />
        <div>
          <LogoutButton />
        </div>
        
        </>) : (
          
          <div className='rightContainer'>
            {/* <button onClick={onClick} className='demoword'>Demo</button> */}
            <div><NavLink to='/login' exact={true} activeClassName='active' className='loginword'>Login</NavLink></div>
            <div><NavLink to='/sign-up' exact={true} activeClassName='active' className='signupword'>Sign Up</NavLink></div>
            
          </div>
          
        )}
        </div>
    </nav>
    
  );
}

export default NavBar;
