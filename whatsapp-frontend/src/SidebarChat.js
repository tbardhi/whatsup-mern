import React from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />
            <div className="siderChat__info">
                <h2>Room name</h2>
                <p>Message</p>
            </div>
        </div>
    );
}

export default SidebarChat;