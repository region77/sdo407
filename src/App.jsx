import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Friends from './components/Friends';
import './App.css';

const Messages = () => {
  return <h1>Это страница с сообщениями</h1>
}
const Settings = () => {
  return <h1>Это страница с настройками</h1>
}

const Menu = () => {
  return (
    <div>
      <div className='nav flex-column nav-pills' aria-orientation='vertical'>
        <NavLink className='nav-link' to='/profile'>
          Профиль
        </NavLink>
        <NavLink className='nav-link' to='/messages'>
          Сообщения
        </NavLink>
        <NavLink className='nav-link' to='/settings'>
          Настройки
        </NavLink>
        <NavLink className='nav-link' to='/friends'>
          Мои друзья
        </NavLink>
      </div>
    </div>
  )
}

function App(props) {
  return (
    <div className='container-fluid mt-5'>
    <BrowserRouter>
      <div className='row'>
        <div className='col-sm-3'>
          <Menu/>
        </div>
        <div className='col-sm-9'>
            <Route path='/profile' render={() => <Profile function={props.functions.key_getUser}/>} />
            <Route path='/messages' component={Messages}/>
            <Route path='/settings' component={Settings}/>
            <Route path='/friends' render={()=><Friends function={props.functions.key_getUsers}/>}/>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
