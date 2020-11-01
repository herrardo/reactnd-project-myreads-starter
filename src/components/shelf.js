import React, { Component } from 'react';
import Book from './book';
import PropTypes from 'prop-types';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfType: PropTypes.exact({
      shelf: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  };
  render() {
    const {
      books,
      shelfType: { shelf: shelf, title: title },
    } = this.props;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books
              .filter(book => book.shelf === shelf)
              .map(book => (
                <li key={book.id}>
                  <Book
                    thumbnail={book.imageLinks.smallThumbnail}
                    authors={book.authors}
                    title={book.title}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
