import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { BookmarkBorder, Home, ListAlt, MailOutline, MoreHoriz, NotificationsNone, PermIdentity, Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className="sidebar__twitterIcon"></TwitterIcon>
            <SidebarOption active text='Home' Icon={Home}></SidebarOption>
            <SidebarOption text="Explore" Icon={Search}></SidebarOption>
            <SidebarOption text='Notifications' Icon={NotificationsNone}></SidebarOption>
            <SidebarOption text='Messages' Icon={MailOutline}></SidebarOption>
            <SidebarOption text='Bookmarks' Icon={BookmarkBorder}></SidebarOption>
            <SidebarOption text='Lists' Icon={ListAlt}></SidebarOption>
            <SidebarOption text='Profile' Icon={PermIdentity}></SidebarOption>
            <SidebarOption text='More' Icon={MoreHoriz}></SidebarOption>

            <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;
