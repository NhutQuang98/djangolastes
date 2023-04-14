import React, { useState } from 'react';
// import SERVER_URL from '../../api/AxiosConnect';
// import { notify_success, notify_fail } from "../../common/Notification";

function AddPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category_id, setCategoryId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // SERVER_URL.post(`/postPost`, {
        //     title: title,
        //     content: content,
        //     category_id: category_id,
        //     account_id: '1',
        // })
        //     .then((res) => {
        //         if (res.data.status === 200) {
        //             notify_success("add-post");
        //         }
        //         else {
        //             notify_fail("add-post");
        //         }
        //     })
        //     .catch(error => {
        //         notify_fail("add-post");
        //     });
    }

    return (
        <>
            <div style={{ textAlign: 'left' }}><a href="/dashboard">Dashboard</a></div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tr>
                        <th>
                            <h2>Add-Post</h2>
                        </th>
                    </tr>
                    <tr>

                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                                placeholder='Title enter'
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <textarea
                                style={{ width: '95%' }}
                                placeholder='Content enter'
                                value={content}
                                onChange={(e) => { setContent(e.target.value) }} />
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
                    <tr style={{ textAlign: 'right' }}>
                        <td>
                            <button type="submit">Submit</button>
                        </td>
                    </tr>
                </table>
            </form>
        </>
    )
}

export default AddPost