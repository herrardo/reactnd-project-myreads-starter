import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './components/search';
import List from './components/list';

class BooksApp extends React.Component {
  state = {};
  componentDidMount() {
    BooksAPI.getAll().then(response => console.log(response));
  }
  render() {
    return (
      <div className='app'>
        <Route exact path={'/search'} render={() => <Search />}></Route>
        <Route exact path={'/'} render={() => <List />}></Route>
      </div>
    );
  }
}

export default BooksApp;
