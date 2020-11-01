import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onBookChange: PropTypes.func.isRequired,
  };
  state = {
    shelf: this.props.book.shelf,
  };

  handleSelectChange = event => {
    event.preventDefault();
    const shelf = event.target.value;
    this.setState({
      shelf,
    });
    this.props.onBookChange({ book: this.props.book, shelf });
  };

  render() {
    const title = this.props.book.title ? this.props.book.title : 'Missing Title';
    const thumbnail =
      this.props.book.imageLinks && this.props.book.imageLinks.smallThumbnail
        ? this.props.book.imageLinks.smallThumbnail
        : undefined;
    const authors = this.props.book.authors ? this.props.book.authors : 'Missing Author';

    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              ...(thumbnail && { backgroundImage: `url("${thumbnail}"` }),
            }}></div>
          <div className='book-shelf-changer'>
            <select onChange={this.handleSelectChange} value={this.state.shelf}>
              <option value='move' disabled>
                Move to...
              </option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{authors}</div>
      </div>
    );
  }
}

export default Book;
