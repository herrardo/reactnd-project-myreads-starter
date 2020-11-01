import React, { Component } from 'react';
import Book from './book';
import PropTypes from 'prop-types';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfType: PropTypes.exact({
      shelf: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  };
  render() {
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>Currently Reading</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            <li>
              <Book />
            </li>
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
