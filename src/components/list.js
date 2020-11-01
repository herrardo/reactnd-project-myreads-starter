import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Shelf from './shelf';
import { ShelfType } from '../constants';

class List extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  };
  render() {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <Shelf books={this.props.books} shelfType={ShelfType.READING} />
            <Shelf books={this.props.books} shelfType={ShelfType.WANT_TO_READ} />
            <Shelf books={this.props.books} shelfType={ShelfType.READ} />
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
