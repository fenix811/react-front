import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import { ProductList } from './components/ProductList.tsx/ProductList';
import { Header } from './layout/client/header';

function App() {
  return (
    <Switch>
      <Route path="/" component={ProductList} />
    </Switch>
    );
}

export default App;
