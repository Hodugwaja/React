import React from 'react';
import {withRouter} from 'react-router-dom';

const WithRouter = ({history}) => {
    return(
        <div>
            
            <button onClick = {() => history.goBack(' ')}>뒤로가기</button>
            <button onClick = {() => history.push('/')}>메이커집으로</button>
        </div>
    )
}

export default withRouter(WithRouter);