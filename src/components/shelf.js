import Book from './book';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelfType: PropTypes.exact({
      shelf: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
    onBookChange: PropTypes.func.isRequired,
  };

  render() {
    const {
      books,
      shelfType: { shelf, title },
    } = this.props;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{title}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {books
              .filter(book => book.shelf === shelf)
              .map(book => {
                return (
                  <li key={book.id}>
                    <Book book={book} onBookChange={this.props.onBookChange} />
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    );
  }
}
export default Shelf;
