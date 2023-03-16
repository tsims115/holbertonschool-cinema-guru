import { useState } from "react";
import "./auth.css";
import PropTypes from 'prop-types';
import Button from '../../components/general/Button';
import Login from './Login.js';
import Register from './Register.js';
import axios from 'axios';
import ls from 'local-storage';

export default function Authentication({setIsLoggedIn, setUserUsername}) {
  const [state, setState] = useState({_switch: true, username: "", password: "false"});
  function handleSubmit(e) {
    e.preventDefault();
    const options = {
      headers: {'Content-Type': `application/json`}
    };
    let url;
    if (state._switch) {
      url = 'login';
    } else {
      url = 'register'
    }
    url = 'http://54.157.183.35:8000/api/auth/' + url;
    axios.post(
      url,
      {username: state.username, password: state.password},
      options
    )
    .then((res) => {
      ls.set('accessToken', res.data.accessToken)
    })
    .catch((error) => {
      console.log(error);
    });
    return false;
  }
  function setUsername(e) {
    setState({username: e.target.value, password: state.password, _switch: state._switch});
  }
  function setPassword(e) {
    setState({password: e.target.value, username: state.username,_switch: state._switch});
  }
  return (
    <form id='signOnForm' onSubmit={(e) => {
      e.preventDefault();
      handleSubmit(e);
    }} className="Authentification" style={{display: "flex", flexDirection: 'column'}}>
      <div style={{display: "flex"}}>
        <Button label='Sign In' className='SignIn' onClick={(e) => {
          e.preventDefault();
          setState({_switch: true});
        }}/>
        <Button label='Sign Up' className='SignUp' onClick={(e) => {
          e.preventDefault();
          setState({_switch: false});
        }}/>
      </div>
      { state._switch && <Login setUsername={setUsername} setPassword={setPassword}/>}
      { !state._switch && <Register setUsername={setUsername} setPassword={setPassword}/>}
    </form>
  );
}

Authentication.propTypes = {
  setIsLoggedIn: PropTypes.func,
  setUserUsername: PropTypes.func,
}

Authentication.defaultProps = {
  setIsLoggedIn: () => {},
  setUserUsername: () => {},
}
