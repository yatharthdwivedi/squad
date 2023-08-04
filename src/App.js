import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import ShowUsers from './components/users/ShowUsers';
import UserDetail from './components/users/UserDetail';
import Posts from './components/posts/Posts';
import Post from './components/posts/Post';
import NewPost from './components/posts/NewPost';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element ={<ShowUsers/>} />
        <Route path='/users/:id' element = {<UserDetail/>}/>
        <Route path='/posts' element = {<Posts/>}/>
        <Route path='/posts/:id' element = {<Post/>} />
        <Route path='/new-post' element = {<NewPost/>} />
      </Routes>
    </div>
  );
}

export default App;
