import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.less';
import Main from './main/Main';

const App = () => {  
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  )
}

export default App;

