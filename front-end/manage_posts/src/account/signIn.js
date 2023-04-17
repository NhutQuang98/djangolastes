import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { METHOD_POST_NOT_HEADER } from '../utils/api/methodAxios';
import { notify_success, notify_fail } from "../utils/common/Notification";
import Cookies from 'js-cookie';

import styles from './account.module.css';

const SignIn = () => {
  const [input, setInput] = useState({
    username: 'username1',
    password: '123456',
  })
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      async function fetchData() {
        const data = await METHOD_POST_NOT_HEADER({
          url: 'sign-in/',
          param: {
            username: input.username,
            password: input.password
          }
        })
        if (data && data.res.status === 200) {
          Cookies.set('access_token', data.res.data.access_token);
          Cookies.set('refresh_token', data.res.data.refresh_token);
          Cookies.set('sessionid', data.res.data.sessionid);
          notify_success('Sign-up success!');
          navigate('/list-category');
        } else {
          notify_fail('Sign-up fail!')
        }
      }
      fetchData()
    } catch (error) {
      notify_fail(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} method='POST'>
      <div className={styles.container}>
        <h2>Sign-In</h2><br />
        {/* <form onSubmit={handleSubit}> */}
          <label htmlFor="username">UserName</label>
          <input type="text" id="username" name="username" placeholder="Username Enter" value={input.username}
            onChange={(e) => setInput({...input, username: e.target.value})}
          />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Password Enter" value={input.password}
            onChange={(e) => setInput({...input, password: e.target.value})}
          />
          <br />
          <button type="submit">Sign-in</button>
      </div>
    </form>
  );
};

export default SignIn;
