import React from 'react'
import { Provider } from 'react-redux';
import { Store } from './redux/store'
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
      <Header/>
      <Routes/>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
