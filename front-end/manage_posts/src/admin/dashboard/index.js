import React, { useEffect, useState } from 'react';
import Menu from './menu/Menu';
import TotalInfo from './totalInfo/TotalInfo';
import Cookies from 'js-cookie';

// import { useNavigate } from 'react-router-dom';

import { METHOD_POST } from '../../utils/api/methodAxios';
// import { notify_fail } from "../../utils/common/Notification";

function Dashboard() {

  const [statusLogin, setStatusLoign] = useState(false);
  // const [sessionUsername, setSessionUsername] = useState('');
  // const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      console.log(Cookies.get('access_token'))
      const data = await METHOD_POST({
        url: 'get-session/',
        param: {
          access_token: Cookies.get('access_token')
        }
      });
      // console.log(data)
      // console.log(data && data.res.status === 200)
      if (data && data.res.status === 200) {
        setStatusLoign(true)
        // setSessionUsername(data.res.user_name)
      }
    }
    fetchData()
  }, []);

  if (!statusLogin) {
    return <div>Loading...</div>
    // notify_fail('You need login!')
    // navigate('/sign-in');
  } else {
    return (
      <>
        <div style={{ display: 'flex' }}>
          <Menu />
          <TotalInfo name="User" amount="5" />
          <TotalInfo name="Posts" amount="2" />
        </div>
      </>
    );
  }
}

export default Dashboard;