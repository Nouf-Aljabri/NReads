import React, { Component } from "react";
import BookCard from "./BookCard";

export default function BookList(props) {
  const { books, onChangeHandler } = props;

  return (
    <div className="shelf-books">
      <ol className="books-box">
        {
        // display the books for each shelf
        books.map((book) => {
          return (
            <BookCard
              key={book.id}
              book={book}
              onChangeHandler={onChangeHandler}
            />
          );
        })}
      </ol>
    </div>
  );
}
