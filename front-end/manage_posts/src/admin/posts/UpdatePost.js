import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// import SERVER_URL from '../../api/AxiosConnect';
// import { notify_success, notify_fail } from "../../common/Notification";

const UpdatePost = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category_id, setCategoryId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`tilte: ${title}, 
                    content: ${content},
                    category_id: ${category_id}`);
        // SERVER_URL.put(`/putPost`, {
        //     title: title,
        //     content: content,
        //     category_id: category_id,
        //     // account_id: '1',
        // })
        //     .then((res) => {
        //         if (res.data.status === 200) {
        //             notify_success("sign-up");
        //         }
        //         else {
        //             notify_fail("sign-up");
        //         }
        //     })
        //     .catch(error => {
        //         notify_fail("sign-up");
        //     });
    }

    return (
        <>
            <div style={{ textAlign: 'left' }}>
                <a href="/dashboard">Dashboard</a>
                <br />
                <a href="/list-post">List Post</a>
            </div><br />
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <td>
                            <h2>Update Post</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={`title${id}`}
                                onChange={(event) => setTitle(event.target.value)}
                                placeholder='Title enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={`content ${id}`}
                                onChange={(event) => setContent(event.target.value)}
                                placeholder='Content enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select style={{ width: '100%' }} value={category_id} onChange={(e) => { setCategoryId(e.target.value) }}>
                                <option value="">-- Choose an option --</option>
                                <option value="option1">category1</option>
                                <option value="option2">category2</option>
                            </select>
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

export default UpdatePost;
