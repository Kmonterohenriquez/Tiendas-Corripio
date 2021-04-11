import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddNewItem from './components/AddNewItem';
import Home from './Views/Home';
import ItemContainer from './Views/ItemContainer';

export default (
  <Switch>
    <Route component={Home} exact path='/' />
    <Route component={ItemContainer} exact path='/televitions' />
    <Route component={AddNewItem} exact path='/add-new-item' />
  </Switch>
);
