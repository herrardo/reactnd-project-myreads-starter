import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  };

  render() {
    const title = this.props.title ? this.props.title : 'Missing Title';
    const thumbnail = this.props.thumbnail ? this.props.thumbnail : undefined;
    const author = this.props.author ? this.props.author : 'Missing Author';

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
        <div className='book-authors'>{author}</div>
      </div>
    );
  }
}

export default Book;
