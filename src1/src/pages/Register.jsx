import React from 'react';
import {useRef} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';
function Register() {
  const userName = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity('Passwords do not match!');
    } else {
      const user = {
        userName: userName.current.value,
        pw: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleLogin = () => {
    history.push('/login');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="username" ref={userName} />
        <input type="password" placeholder="password" ref={password} />
        <input
          type="password"
          placeholder="type the password again"
          ref={passwordAgain}
        />
        <button type="submit">Signup</button>
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
}

export default Register;
