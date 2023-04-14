import React, { useState } from 'react';
import { METHOD_POST } from '../utils/api/methodAxios';
import { notify_success, notify_fail } from "../utils/common/Notification";

const SignUp = () => {
    const [input, setInput] = useState({
        userName: '',
        password: '',
        verifyPassword: '',
        name: '',
        dateOfBirth: '',
        numberPhone: '',
        email: '',
    })
    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.password !== input.verifyPassword) {
            notify_fail('verify password does not match!')
        } else {
            try {
                async function fetchData() {
                    const data = await METHOD_POST({
                        url: 'account/',
                        param: {
                            user_name: input.userName,
                            password: input.password,
                            name: input.name,
                            birth_date: input.dateOfBirth,
                            phone_number: input.numberPhone,
                            email: input.email
                        }
                    })
                    console.log(!data === null)
                    if (data && data.res.status === 201) {
                        notify_success('Sign-up success!')
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
        <div>
            <form onSubmit={handleSubmit} method='post'>
                <table>
                    <thead>
                        <tr>
                            <th><h2>Sign-up</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input
                                type="text"
                                value={input.userName}
                                onChange={(e) => setInput({ ...input, userName: e.target.value })}
                                placeholder='username enter'
                            /></td>
                        </tr>
                        <tr>
                            <td><input
                                type="password"
                                value={input.password}
                                onChange={(e) => setInput({ ...input, password: e.target.value })}
                                placeholder='password enter'
                            /></td>
                        </tr>
                        <tr>
                            <td><input
                                type="password"
                                value={input.verifyPassword}
                                onChange={(e) => setInput({ ...input, verifyPassword: e.target.value })}
                                placeholder='Verify password enter'
                            /></td>
                        </tr>
                        <tr>
                            <td><input
                                type="text"
                                value={input.name}
                                onChange={(e) => setInput({ ...input, name: e.target.value })}
                                placeholder='Name enter'
                            /></td>
                        </tr>
                        <tr>
                            <td><input
                                style={{ width: '95%' }}
                                type="date"
                                value={input.dateOfBirth}
                                onChange={(e) => setInput({ ...input, dateOfBirth: e.target.value })}
                                placeholder='Date of birth enter'
                            /></td>
                        </tr>
                        <tr>
                            <td><input
                                type="text"
                                value={input.numberPhone}
                                onChange={(e) => setInput({ ...input, numberPhone: e.target.value })}
                                placeholder='Number phone enter'
                            /> </td>
                        </tr>
                        <tr>
                            <td><input
                                type="email"
                                value={input.email}
                                onChange={(e) => setInput({ ...input, email: e.target.value })}
                                placeholder='Email enter'
                            /></td>
                        </tr>
                        <tr style={{ textAlign: 'right' }}>
                            <td><button type="submit">Sign-up</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default SignUp;
