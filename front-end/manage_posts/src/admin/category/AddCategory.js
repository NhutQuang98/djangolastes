import React, { useState } from 'react';
import { METHOD_POST } from '../../utils/api/methodAxios';
import styles from './category.module.css';
import { notify_success, notify_fail } from "../../utils/common/Notification";
import { useNavigate } from 'react-router-dom';


function AddCategory() {
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            async function fetchData() {
                const data = await METHOD_POST({
                    url: 'category-add/',
                    param: {
                        category_name: categoryName,
                    }
                })
                if (data && data.res.status === 201) {
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

    return (
        <div className={styles.container}>
            <h1>Add Categories</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.form_group}>
                    <label className={styles.form_label}>Category Name:</label>
                    <div style={{display: "flex"}}>
                        <input style={{marginRight: "5px", maxHeight: "40px"}} 
                            value={categoryName}
                            placeholder='Enter Category Name'
                            type="text" name="name" className={styles.form_control} required 
                            onChange={e => setCategoryName(e.target.value)}
                        />
                        <button
                            style={{maxHeight: "40px", width: "100px", margin: "0"}}
                            type="submit" className={styles.form_submit}>
                            + add
                        </button>
                    </div>
                </div>
                {/* <div className={styles.form_group}>
                    <label className={styles.form_label}>Mô tả:</label>
                    <textarea name="description" className={styles.form_textarea}></textarea>
                </div> */}
            </form>
        </div>
    );
    // }
}

export default AddCategory;