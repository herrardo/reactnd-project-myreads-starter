import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
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
            <select>
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
