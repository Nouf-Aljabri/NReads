import React, { Component } from "react";
import "./App.css";
import bookCover from "./icons/bookcover.png";

export default function BookCard(props) {
  const { book, onChangeHandler } = props;
  var author = "";
  var img = bookCover;
  // default auther
  if (book.hasOwnProperty("authors")) {
    author = book.authors[0];
  }
  // default book cover
  if (book.hasOwnProperty("imageLinks")) {
    img = book.imageLinks.thumbnail;
  }


  return (
    <li>
      <div className="book">
        <div className="book-position">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <div className="shelf-shfiter">
            <select
              value={book.shelf}
              onChange={(e) => {
                onChangeHandler(e, book.id);
              }}
            >
              <option value="move" disabled>
                {" "}
                Move to...
              </option>
              <option value="currentlyReading"> Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-author"> {author}</div>
      </div>
    </li>
  );
}
