import React, { Component } from 'react';
import logo from '../images/photo.png';
class Profile extends Component {
    render(){
        return (
            <div class="profileBlk">
                <img src={logo} alt='logo' class="profileimg" />
                <h1>Profile</h1>
            </div>
        );
    }
}

export default Profile;