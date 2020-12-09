import Discover from "@/pages/discover/Discover";
import Friend from "@/pages/friend/Friend";
import Mine from "@/pages/mine/Mine";
import NotFound  from '@/pages/NotFound/NotFound';
import React from "react";
import { Redirect } from "react-router-dom";


const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to={"/discover"} />,
    },
    {
        path: '/mine',
        component: Mine
    },
    {
        path: '/friend',
        component: Friend
    },
    {   path: '/discover',
        component:Discover
    },
    {
        path: '*',
        component:NotFound
    }
]

export default routes;

