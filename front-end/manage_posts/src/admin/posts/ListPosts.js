import React from 'react'

function ListPosts() {
    return (
        <>
            <div style={{ textAlign: 'left' }}><a href="/dashboard">Dashboard</a></div><br />
            <table border='1'>
                <thead>
                    <tr>
                        <th>title</th>
                        <th>content</th>
                        <th>amount_view</th>
                        <th>submit_date</th>
                        <th>update_last_date</th>
                        <th>category</th>
                        <th colSpan='2'>action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>title1</td>
                        <td>post 1</td>
                        <td>10</td>
                        <td>11/04/2023</td>
                        <td>11/04/2023</td>
                        <td>category1</td>
                        <td><a href="/update-post?id=1">Edit</a></td>
                        <td><a href="/delete-post">Delete</a></td>
                    </tr>
                    <tr>
                        <td>title2</td>
                        <td>post 2</td>
                        <td>3</td>
                        <td>11/04/2023</td>
                        <td>11/04/2023</td>
                        <td>category2</td>
                        <td><a href="/update-post?id=2">Edit</a></td>
                        <td><a href="/delete-post">Delete</a></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default ListPosts