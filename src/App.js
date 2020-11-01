import './App.css';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import List from './components/list';
import React from 'react';
import Search from './components/search';

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
