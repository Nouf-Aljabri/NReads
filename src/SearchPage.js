import React, { Component } from "react";
import { Link } from "react-router-dom";
import { searchBook, updateBook } from "./Api";
import BookCard from "./BookCard";

export default class SearchPage extends Component {
  state = {
    showSearchPage: true,
    books: [],
  };

  // handle search result 
  changeSearchInput = (e) => {
    console.log(e.target.value, "e.target.value!!!!!");
    searchBook(e.target.value).then((data) => {
      if (data.length) {
        this.setState({ books: data });
      } else {
        this.setState({ books: [] });
      }
    });
  };

  // update shelf 
  onChangeHandler = (e, id) => {
    updateBook(id, e.target.value);
  };

  render() {
    console.log(this.state.books, "books in render !");
    return (
      <div className="main">
        <div className="search-container">
          <div className="search-container-bar">
            <Link to="/">
              <button
                className="close-btn-bar"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
            </Link>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => {
                  this.changeSearchInput(e);
                }}
              />
              <div className="search-results">
                <ol className="books-box">
                  {this.state.books.map((book) => {
                    return (
                      <BookCard
                        key={book.id}
                        book={book}
                        onChangeHandler={this.onChangeHandler}
                      />
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
