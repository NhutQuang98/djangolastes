import React, { useState } from 'react';
import { METHOD_POST_NOT_HEADER } from '../utils/api/methodAxios';
import { notify_success, notify_fail } from "../utils/common/Notification";
import Cookies from 'js-cookie';
import styles from './account.module.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        username: 'username1',
        password: '123456',
        verifyPassword: '123456',
        name: 'member 1',
        email: 'member1@gmail.com',
        phone_number: '0927266219',
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.password !== input.verifyPassword) {
            notify_fail('verify password does not match!')
        } else {
            try {
                async function fetchData() {
                    const data = await METHOD_POST_NOT_HEADER({
                        url: 'sign-up/',
                        param: {
                            username: input.username,
                            password: input.password,
                            name: input.name,
                            email: input.email,
                            phone_number: input.phone_number,
                        }
                    })
                    if (data && data.res.status === 201) {
                        Cookies.set('access_token', data.res.data.access_token);
                        Cookies.set('refresh_token', data.res.data.refresh_token);
                        notify_success('Sign-up success!')
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
    }

    return (
        <form onSubmit={handleSubmit} method='post'>
            <div className={styles.container}>
                <h2>Sign-Up</h2><br />
                <label htmlFor="username">UserName</label>
                <input type="text" id="username" name="username" placeholder="Username Enter" value={input.username}
                    onChange={(e) => setInput({ ...input, username: e.target.value })}
                />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Password Enter" value={input.password}
                    onChange={(e) => setInput({ ...input, password: e.target.value })}
                />

                <label htmlFor="verifypassword">Verify Password</label>
                <input type="password" id="verifypassword" name="verifypassword" placeholder="Verify Password Enter" value={input.verifyPassword}
                    onChange={(e) => setInput({ ...input, verifyPassword: e.target.value })}
                />

                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name Enter" value={input.name}
                    onChange={(e) => setInput({ ...input, name: e.target.value })}
                />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email Enter" value={input.email}
                    onChange={(e) => setInput({ ...input, email: e.target.value })}
                />

                <label htmlFor="numberphone">Number Phone</label>
                <input type="text" id="numberphone" name="numberphone" placeholder="Number Phone Enter" value={input.phone_number}
                    onChange={(e) => setInput({ ...input, phone_number: e.target.value })}
                />

                <button type="submit">Sign-up</button>
            </div>
        </form>
    );
};

export default SignUp;
