import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './components/search';
import List from './components/list';

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then(response => {
      this.setState({
        books: response,
      });
    });
  }
  render() {
    console.log('App', this.state.books);
    return (
      <div className='app'>
        <Route exact path={'/search'} render={() => <Search />}></Route>
        <Route exact path={'/'} render={() => <List books={this.state.books} />}></Route>
      </div>
    );
  }
}

export default BooksApp;
