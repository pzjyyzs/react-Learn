import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import AppHeader from './components/app-header/app-header';
import Appfooter from './components/app-footer/app-footer';

function App() {
  return (
   <BrowserRouter>
     <AppHeader></AppHeader>
     <Switch>
       { renderRoutes(routes)}
     </Switch>
     <Appfooter></Appfooter>
   </BrowserRouter>
  );
}

export default App;
