import './App.css';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import { ShelfType } from './utils';
import List from './components/list';
import React from 'react';
import Search from './components/search';

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    searchError: false,
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    BooksAPI.getAll().then(response => {
      this.setState({
        books: response,
      });
    });
  };

  onBookChange = ({ book, shelf }) => {
    BooksAPI.update(book, shelf).then(() => {
      this.loadBooks();
    });
  };

  onSearch = query => {
    BooksAPI.search(query)
      .then(searchedBooks => {
        if (searchedBooks.error) {
          this.setSearchError();
        } else {
          this.updateSearchedBooksShelves(searchedBooks);
        }
      })
      .catch(error => {
        this.setSearchError();
      });
  };

  setSearchError = () => {
    this.setState({
      searchError: true,
      searchedBooks: [],
    });
  };

  updateSearchedBooksShelves = searchedBooks => {
    searchedBooks.forEach(searchedBook => {
      const bookIndex = this.state.books.findIndex(eachBook => eachBook.id === searchedBook.id);
      searchedBook.shelf =
        bookIndex !== -1 ? this.state.books[bookIndex].shelf : ShelfType.NONE.shelf;
    });
    this.setState({ searchedBooks, searchError: false });
  };

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path={'/search'}
          render={() => (
            <Search
              onBookChange={this.onBookChange}
              onSearch={this.onSearch}
              books={this.state.searchedBooks}
              searchError={this.state.searchError}
            />
          )}
        />
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
