import { Link } from 'react-router-dom';
import { ShelfType } from '../utils';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Shelf from './shelf';

class List extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onBookChange: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            {Object.entries(ShelfType).map(([key, value]) => (
              <Shelf
                key={key}
                books={this.props.books}
                shelfType={value}
                onBookChange={this.props.onBookChange}
              />
            ))}
          </div>
        </div>
        <div className='open-search'>
          <Link to={'/search'}>Add a book</Link>
        </div>
      </div>
    );
  }
}
export default List;
