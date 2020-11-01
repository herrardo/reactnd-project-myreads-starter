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

  onBookChange = ({ book, shelf }) => {
    BooksAPI.update(book, shelf).then(() => {
      let newBooks = [...this.state.books];
      const bookIndex = this.state.books.findIndex(eachBook => eachBook.id === book.id);
      let newBook = { ...newBooks[bookIndex] };
      newBook.shelf = shelf;
      newBooks[bookIndex] = newBook;
      this.setState({ books: newBooks });
    });
  };

  render() {
    return (
      <div className='app'>
        <Route exact path={'/search'} render={() => <Search onBookChange={this.onBookChange} />} />
        <Route
          exact
          path={'/'}
          render={() => <List books={this.state.books} onBookChange={this.onBookChange} />}
        />
      </div>
    );
  }
}

export default BooksApp;
