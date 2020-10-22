import React from 'react';
import qs from 'qs';

const Login = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix : true // 문자열 맨 앞의 ? 생략
    });
    const showDetail = query.detail === 'true';
    return(
        <div>
            <h1>로그인창</h1>
            <p>로그인</p>
            {showDetail && <p>이거 보이면 빡빡이</p>}
        </div>
        
    )
}

export default Login;