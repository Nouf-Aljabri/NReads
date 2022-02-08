import React from "react";

export default function SearchPage() {
  return (
    <div className="main">
      <div className="search-container">
        <div className="search-container-bar">
          <button
            className="close-btn-bar"
            onClick={() => this.setState({ showSearchPage: false })}
          >
            Close
          </button>
          <div className="input-wrapper">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="search-results">
          <ol className="books-box"></ol>
        </div>
      </div>
    </div>
  );
}
