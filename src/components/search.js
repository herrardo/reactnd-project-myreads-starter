import * as BooksAPI from '../BooksAPI';
import { Link } from 'react-router-dom';
import Book from './book';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Search extends Component {
  static propTypes = {
    onBookChange: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    searchError: PropTypes.bool,
    onSearch: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };
  handleInput = event => {
    const query = event.target.value;
    this.setState({
      query,
    });
    this.props.onSearch(query);
  };

  render() {
    const { query } = this.state;
    const { books } = this.props;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to={'/'}>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={query}
              onInput={this.handleInput}
            />
          </div>
        </div>
        <div className='search-books-results'>
          {!this.props.searchError && (
            <ol className='books-grid'>
              {books.map(book => {
                return (
                  <li key={book.id}>
                    <Book book={book} onBookChange={this.props.onBookChange} />
                  </li>
                );
              })}
            </ol>
          )}
          {this.props.searchError &&
            (this.state.query === '' ? (
              <p></p>
            ) : (
              <p>Sorry, we couldn't find any items with your current query.</p>
            ))}
        </div>
      </div>
    );
  }
}
export default Search;
