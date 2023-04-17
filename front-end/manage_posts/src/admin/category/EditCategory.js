import React, { useEffect, useState } from 'react';
import { METHOD_GET, METHOD_PUT } from '../../utils/api/methodAxios';
import styles from './category.module.css';
import { notify_success, notify_fail } from "../../utils/common/Notification";
import { useNavigate, useLocation, Link  } from 'react-router-dom';


function EditCategory() {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const category_id = searchParams.get('id');
    const [categoryName, setCategoryName] = useState('')

    useEffect(() => {
        async function fetchData() {
            const data = await METHOD_GET(`category-search-by-id/${category_id}/`);
            // console.log("categoryName: " + data.res.data.category_name)
            if (data.res.status === 200) {
                setCategoryName(data.res.data.category_name)
            } else {
                notify_fail("category_id not exists")
                navigate('/list-category')
            }
        }
        fetchData()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            async function fetchData() {
                const data = await METHOD_PUT({
                    url: `category-update/${category_id}/`,
                    param: {
                        category_name: categoryName,
                    }
                })
                console.log(data)
                if (data.res.status === 202) {
                    notify_success('Update category success!')
                    setCategoryName(data.res.data.category_name)
                    // navigate('/list-category');
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
            <h1>Edit Categories</h1>
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
                            Edit
                        </button>
                        <Link to={`/list-category`} style={{marginLeft: "5px"}}>
                            <button
                                style={{maxHeight: "40px", width: "100px", margin: "auto"}}
                                type="submit" className={styles.form_submit}>
                                Back
                            </button>
                        </Link>
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

export default EditCategory;