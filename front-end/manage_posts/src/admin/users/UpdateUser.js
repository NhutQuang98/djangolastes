import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const UpdateUser = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [userName, setUsername] = useState('');
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('02/12/1998');
    const [numberPhone, setNumberPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Email: ${userName}, 
                    Name: ${name},
                    Date of birth: ${dateOfBirth},
                    Number phone: ${numberPhone},
                    Email: ${email}`);
    }

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <a href="/dashboard">Dashboard</a>
                <br />
                <a href="/list-user">List User</a>
            </div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <h2>Update User</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={`user${id}`}
                                onChange={(event) => setUsername(event.target.value)}
                                placeholder='username enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={`member ${id}`}
                                onChange={(event) => setName(event.target.value)}
                                placeholder='Name enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                style={{ width: '95%' }}
                                type="date"
                                value={dateOfBirth}
                                onChange={(event) => setDateOfBirth(event.target.value)}
                                placeholder='Date of birth enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value='123456789'
                                onChange={(event) => setNumberPhone(event.target.value)}
                                placeholder='Number phone enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="email"
                                value={`user${id}@gmail.com`}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder='Email enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={{ textAlign: 'right' }}>
                            <button type="submit">Update</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    );
};

export default UpdateUser;
