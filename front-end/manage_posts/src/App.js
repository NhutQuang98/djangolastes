import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './account/signIn';
import SignUp from './account/signUp';
import Dashboard from './admin/dashboard';
import ListUser from './admin/users/ListUser';
import UpdateUser from './admin/users/UpdateUser';
import ListPosts from './admin/posts/ListPosts';
import UpdatePost from './admin/posts/UpdatePost';
import AddPost from './admin/posts/AddPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/list-user' element={<ListUser />} />
          <Route path='/update-user' element={<UpdateUser />} />
          <Route path='/list-post' element={<ListPosts />} />
          <Route path='/update-post' element={<UpdatePost />} />
          <Route path='/add-post' element={<AddPost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
