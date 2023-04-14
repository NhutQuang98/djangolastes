import React, { useEffect, useState } from 'react';
import { METHOD_GET } from '../../utils/api/methodAxios';

function ListUser() {

    const [account, setAccount] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await METHOD_GET("account/");
            setAccount(data)
        }
        fetchData()
    }, []);

    if (!account) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div style={{ textAlign: 'left' }}><a href="/dashboard">Dashboard</a></div><br />
            <table border='1' style={{width: '90%', margin: '0 auto'}}>
                <thead style={{background: '#eac276'}}>
                    <tr>
                        <th>username</th>
                        <th>nameUser</th>
                        <th>dateOfBirth</th>
                        <th>numberPhone</th>
                        <th>email</th>
                        <th>dateCreate</th>
                        <th>dateUpdate</th>
                        <th colSpan='2'>action</th>
                    </tr>
                </thead>
                <tbody>
                    {account.map((item) => (
                        <tr key={item.account_id}>
                            <td>{item.user_name}</td>
                            <td>{item.name}</td>
                            <td>{item.birth_date}</td>
                            <td>{item.phone_number}</td>
                            <td>{item.email}</td>
                            <td>{item.create_date}</td>
                            <td>{item.update_date}</td>
                            <td><a href={`/update-user?id=${item.account_id}`}>Edit</a></td>
                            <td><a href={`/delete-user?id=${item.account_id}`}>Delete</a></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;