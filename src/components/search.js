import { Link } from 'react-router-dom';
import { debounce } from '../utils';
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
    this.setState(() => ({
      query,
    }));
    this.onSearch(query);
  };

  onSearch = debounce(this.props.onSearch, 200);

  render() {
    const { query } = this.state;
    const { books, onBookChange, searchError } = this.props;
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
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className='search-books-results'>
          {!searchError && (
            <ol className='books-grid'>
              {books.map(book => {
                return (
                  <li key={book.id}>
                    <Book book={book} onBookChange={onBookChange} />
                  </li>
                );
              })}
            </ol>
          )}
          {searchError &&
            (query === '' ? (
              <p></p>
            ) : (
              <p className='search-books-error'>
                Sorry, we couldn't find any items for your current query.
              </p>
            ))}
        </div>
      </div>
    );
  }
}
export default Search;
