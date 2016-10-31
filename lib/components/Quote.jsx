import React, { Component } from 'react';


export default class Quote extends Component {
  constructor() {
    super();
    this.state = {
      quote: 'The lack of money is the root of all evil',
      author: 'Mark Twain',
    };
  }

  render() {


    return (
        <h4 className='quote-text'>
          {this.state.quote}< br/>
          <span className='author-text'>
          &ndash; {this.state.author}
          </span>
        </h4>
    )
  }
}
