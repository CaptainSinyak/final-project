import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.less';
import Main from './main/Main';

const App = () => {  
  const dispatch = useDispatch();
  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  )
}

export default App;

