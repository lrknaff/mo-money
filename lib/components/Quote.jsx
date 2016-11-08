import React, { Component } from 'react'
import $ from 'jquery'

export default class Quote extends Component {
  constructor() {
    super()
    this.state = {
      // source: '',
      source: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      randomQuote: {
        quoteText: 'The lack of money is the root of all evil',
        quoteAuthor: 'Mark Twain',
      },
    }
    // this.defaultQuote()
    this.getRandomQuote()
  }

  getRandomQuote() {
    $.getJSON(this.state.source, (result) => {
      // if (result.quoteText.length > 1) {
        this.checkRandomQuoteLength(result)
      // } else {
        // this.defaultQuote()
      // }
    })
  }

  checkRandomQuoteLength(result) {
    if (result.quoteText.length > 65) {
      this.getRandomQuote()
    } else {
      this.setState({ randomQuote: result })
    }
  }

  // defaultQuote() {
  //   this.setState({
  //     randomQuote: {
  //       quoteText: 'The lack of money is the root of all evil',
  //       quoteAuthor: 'Mark Twain',
  //     },
  //   })
  // }

  render() {
    return (
      <h4 className="quote-text">
        {this.state.randomQuote.quoteText ?
          this.state.randomQuote.quoteText :
        '' }
        <span className="author-text">
          {this.state.randomQuote.quoteAuthor ?
            `- ${this.state.randomQuote.quoteAuthor ?
            this.state.randomQuote.quoteAuthor :
            '- unknown'}` :
          '' }
        </span>
      </h4>
    )
  }
}
