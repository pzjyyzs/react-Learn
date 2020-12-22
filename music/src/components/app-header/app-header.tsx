import React from 'react';
import { NavLink } from 'react-router-dom';


const AppHeader = () => {
    return (
        <div className='top'>
            <NavLink to='/discover'>发现音乐</NavLink>
            <NavLink to='/mine'>我的音乐</NavLink>
            <NavLink to='/friend'>我的朋友</NavLink>
        </div>
    );
}

export default AppHeader;
