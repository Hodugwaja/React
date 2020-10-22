import React from 'react';

const data = {
    makerzip : {
        name : "방주원",
        description : "당근보다 채찍을 좋아하는 유튜버"
    },
    hamman : {
        name : "함멘",
        description : "여자임"
    },
    Marca : {
        name : "마르카",
        description : "닌텐도"
    }
};


const Profile = ({ match }) => {
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return(
            <div>존재하지 않는 사용자입니다</div>
        )
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;