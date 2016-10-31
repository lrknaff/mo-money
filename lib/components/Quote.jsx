import React, { Component } from 'react';
import $ from 'jquery';

export default class Quote extends Component {
  constructor() {
    super();
    this.state = {
      source: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      randomQuote: '',
      quote: 'The lack of money is the root of all evil',
      author: 'Mark Twain',
    };
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote() {
    $.getJSON(this.state.source, function(result) {
      this.setState({ randomQuote: result });
    }.bind(this));
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
