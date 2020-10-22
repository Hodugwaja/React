import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Profiles from './Pages/Profiles';
import History from './History';
import Talmo from './Pages/Talmo'

function App() {
  return(

    <div>
      <ul>
      <li> <Link to = "/">홈</Link> </li>
      <li> <Link to = "/Login">로그인</Link> </li>
      <li> <Link to = "/Profiles">프로필</Link> </li>
    </ul>
    <hr />
      <Switch>
        <Route path = "/" component = {Main} exact = {true} />
        <Route path = "/Login" component = {Login}/>
        <Route path = "/Profiles" component = {Profiles}/>
        <Route path = "/history" component = {History}/>
        <Route path = "/Talmo" component = {Talmo}/>
        <Route render = {({location}) => (
          <div>
            <h2>이 페이지는 존재하지 않습니다</h2>
            <p>감히 존재하지 않는 이 페이지에 돌아오다니 너는 탈모빔을 맞아야 한다</p>
            <p>{location.pathname}</p>
            <strong>404 Not Found</strong>
          </div>
        )}/>
      </Switch>
    </div>
  );
}

export default App;
