import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
    return(
        <div>
            <h3>사용자 목록 : </h3>
            <ul>
                <li> <Link to = "/Profiles/makerzip">맥심놈</Link></li>
                <li> <Link to = "/Profiles/hamman">함멘</Link></li>
                <li> <Link to = "/Profiles/Marca">마르카</Link></li>
            </ul>
            <Route path = "/Profiles" exact render={() => <div>사용자를 선택해주세요 </div>} />
            <Route path = "/Profiles/:username" component = {Profile}/>
        </div>
    )
}
export default Profiles