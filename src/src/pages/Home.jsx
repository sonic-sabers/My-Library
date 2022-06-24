import React, {useRef, useContext, useEffect} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useHistory} from 'react-router-dom';

function Home() {
  const {isFetching, user, dispatch} = useContext(AuthContext);
  return (
    <div>
      <span>user token is:{user.token}</span>
      <h5>Good luck in converting to react native.. goodnight!</h5>
    </div>
  );
}

export default Home;
