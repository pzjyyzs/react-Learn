import React from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router';
import AppHeader from './components/app-header/app-header';
import Appfooter from './components/app-footer/app-footer';

function App() {
  return (
   <HashRouter>
     <AppHeader></AppHeader>
       { renderRoutes(routes)}
     <Appfooter></Appfooter>
   </HashRouter>
  );
}

export default App;
