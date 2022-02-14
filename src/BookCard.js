import React, { Component } from "react";
import "./App.css";
import bookCover from "./icons/bookcover.png";

export default function BookCard(props) {
  const { book, changeShelf } = props;

  return (
    <li>
      <div className="book">
        <div className="book-position">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks? book.imageLinks.thumbnail: bookCover})`,
            }}
          ></div>
          <div className="shelf-shfiter">
            <select
              value={book.shelf}
              onChange={(e) => {
                changeShelf(e.target.value, book);
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
        <div className="book-author"> { book.authors?  book.authors[0] : " No Author"}</div>
      </div>
    </li>
  );
}
