import React from "react";
import { Redirect } from "react-router-dom";
import Home from "@/application/Home/Home";
import Recommend from "@/application/Recommend/Recommend";
import Singers from "@/application/Singers/Singers";
import Rank from "@/application/Rank/Rank";


const routes = [
    {
        path: '/',
        component: Home,
        routes: [
            {
                path: '/',
                exact: true,
                render: () => (
                    <Redirect to={"/recommemd"} />
                )
            },
            {
                path: '/recommemd',
                component: Recommend
            },
            {
                path: '/singers',
                component: Singers
            },
            {   
                path: '/rank',
                component:Rank
            }
       ]
    },
   
    
]

export default routes;

