import React from 'react';
import { renderRoutes } from 'react-router-config';

const Home = (props: any) => {
    const { route }  = props;
    console.log(props)
    return (
        <div>
            Home
            { renderRoutes(route.routes) }
        </div>
    );
}

export default React.memo(Home);
