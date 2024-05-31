import React from 'react';

const Profile = () => {
    return (
        <div>
            <div><img src="" alt="img"/></div>
            <div>ava + desc</div>
            <div>
                My posts
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
};

const Post = () => {
   return <div> Post </div>
}


export default Profile;