import React, { useEffect, useState } from 'react';
import Menu from './menu/Menu';
import TotalInfo from './totalInfo/TotalInfo';
// import Cookies from 'js-cookie';

// import { useNavigate } from 'react-router-dom';

import { METHOD_GET } from '../../utils/api/methodAxios';
// import { notify_fail } from "../../utils/common/Notification";

function Dashboard() {

  // const [account, setAccount] = useState([]);
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      // console.log(Cookies.get('access_token'))
      const data = await METHOD_GET('account-views/');
      // setAccount(data)
      console.log(data)
      // if (data && data.res.status === 200) {
      //   Cookies.set('access_token', data.res.data.access_token);
      //   setStatusLoign(true)
      //   // setSessionUsername(data.res.user_name)
      // }else{
      //   // setIsLogin(Cookies.get('access_token'))
      //   // notify_fail('Sign-in, please!')
      //   navigate('/sign-in');
      // }
    }
    fetchData()
  }, []);

  // if (!statusLogin) {
  //   return <div>Loading...</div>
  //   // notify_fail('You need login!')
  //   // navigate('/sign-in');
  // } else {
    return (
      <>
        {/* <div>
          <ul>
            {
              account.map(item => (
                <li key={item.id}>{item.email}</li>
              ))
            }
          </ul>
        </div> */}
        <div style={{ display: 'flex' }}>
          <Menu />
          <TotalInfo name="User" amount="5" />
          <TotalInfo name="Posts" amount="2" />
        </div>
      </>
    );
  // }
}

export default Dashboard;