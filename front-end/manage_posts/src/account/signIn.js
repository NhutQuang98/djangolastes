import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { METHOD_POST } from '../utils/api/methodAxios';
import { notify_success, notify_fail } from "../utils/common/Notification";
import Cookies from 'js-cookie';

const SignIn = () => {
  const [input, setInput] = useState({
    username: 'admin',
    password: 'pbkdf2_sha256$600000$O8FI4lJ6vNJWFzO7tJIUYp$r9Cw0Q6Hwts9/jPfzydgKhp13e/f8c2UpfhHltOh/Do=',
  })
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      async function fetchData() {
        const data = await METHOD_POST({
          url: 'account-login/',
          param: {
            username: input.username,
            password: input.password
          }
        })
        // console.log(data.res.data)
        if (data && data.res.status === 200) {
          Cookies.set('access_token', data.res.data.access_token);
          notify_success('Sign-up success!');
          navigate('/dashboard');
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
    <form onSubmit={handleSubmit} method='post'>
      <table>
        <thead>
          <tr>
            <th>
              <h2>Sign-In</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={input.username}
                onChange={(e) => setInput({...input, username: e.target.value})}
                placeholder='username enter'
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                value={input.password}
                onChange={(e) => setInput({...input, password: e.target.value})}
                placeholder='password enter'
              />
            </td>
          </tr>
          <tr style={{ textAlign: 'right' }}>
            <td>
              <button type="submit">Sign-in</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default SignIn;
