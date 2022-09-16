import React, {useRef, useContext, useEffect} from 'react';
import {loginCall} from '../apiCalls';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';
function Login() {
  let userName = useRef();
  let password = useRef();
  const history = useHistory();

  const {isFetching, user, dispatch} = useContext(AuthContext);

  const handleClick = e => {
    e.preventDefault();
    loginCall(
      {userName: userName.current.value, pw: password.current.value},
      dispatch,
    );
  };
  const handleRegister = () => {
    history.push('/register');
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" placeholder="username" ref={userName} />
        <input type="password" placeholder="password" ref={password} />
        <button type="submit">Login</button>
        <button onClick={handleRegister} className="loginRegisterButton">
          Create a new Account{/* need to add new uder register logic */}
        </button>
      </form>
    </div>
  );
}

export default Login;
