import React, { useCallback, useEffect, useState } from 'react';
import { METHOD_GET, METHOD_DELETE } from '../../utils/api/methodAxios';
import styles from './category.module.css';
import { Link } from 'react-router-dom';
import { notify_success } from "../../utils/common/Notification";

function ListCategory() {

    const [category, setCategory] = useState([])
    const [valueSearch, setValueSearch] = useState('')
    // const [valueTemp, setValueTemp] = useState(valueSearch)

    useEffect(() => {
        async function fetchData() {
            // const data = await METHOD_GET("category-all/");
            const data = await METHOD_GET(`category-search/${valueSearch}`);
            // console.log("status: " + data.res.status)
            setCategory(data.res.data)
        }
        fetchData()
    }, [valueSearch]);

    const deleteCategory = (category_id) => {
        async function deleteData() {
            // const data = await METHOD_GET("category-all/");
            const data = await METHOD_DELETE({
                url: `category-delete/${category_id}`,
                param: {
                    category_id: category_id,
                }
            })
            async function fetchData() {
                // const data = await METHOD_GET("category-all/");
                const data = await METHOD_GET(`category-search/${valueSearch}`);
                setCategory(data.res.data)
                console.log("status: " + data.res.status)
                console.log("valueSearch: " + valueSearch)
                if (data.res.status === 204) {
                    setValueSearch('')
                }
            }
            fetchData()
            notify_success("Delete succes!")
        }
        deleteData()
    }
    
    return (
        <div className={styles.container}>
            <h1>List Categories</h1>
            <input type="search" id="SearchInput" name="search" placeholder="Search..." value={valueSearch}
                onChange={e => setValueSearch(e.target.value)}
            />
            <br />
            <div style={{width: "100%", textAlign: "right", margin: "auto"}}>
                <Link to="/add-category">
                    <button style={{width: "100px"}}
                        type="submit">
                        add
                    </button>
                </Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Name</th>
                        <th>Account submit</th>
                        <th>Date submit</th>
                        <th>Date update</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        category ? (
                                category.map((item, index) => (
                                    <tr key={item.category_id}>
                                        <td style={{ width: "6%", textAlign: "center" }}>{index + 1}</td>
                                        <td style={{ width: "23%"}}>{item.category_name}</td>
                                        <td>Account 1</td>
                                        <td style={{ width: "13%", textAlign: "center" }}>17/04/2023</td>
                                        <td style={{ width: "13%", textAlign: "center" }}>17/04/2023</td>
                                        <td style={{ width: "20%", textAlign: "center" }}>
                                            <div>
                                                <Link to={`/edit-category/?id=${item.category_id}`}>
                                                    <button style={{ marginRight: "7px" }} type="submit">Edit</button>
                                                </Link>
                                                <button type="submit" onClick={() => deleteCategory(item.category_id)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                        ):(
                            <tr>
                                <td colSpan="4" style={{textAlign: "center", color: "gray"}}>Not found</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
    // }
}

export default ListCategory;