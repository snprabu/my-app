import React, { Component } from 'react';
import Profile from './Profile';

class Aside extends Component {
    render(){
        return (
            <div className="asideBlk">
                <h3>Aside</h3>
                <Profile />
            </div>
        );
    }
}

export default Aside;