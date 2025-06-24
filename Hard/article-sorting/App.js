// https://www.hackerrank.com/challenges/react-article-sorting/problem
// React

import "h8k-components";

import Articles from "./components/Articles";

import "./App.css";
import { useState, useMemo } from "react";

function App({ articles }) {
  const [sortingOrder, setSortingOrder] = useState("upvotes");

  const handleMostUpvoted = () => {
    setSortingOrder("upvotes");
  };

  const handleMostRecent = () => {
    setSortingOrder("recent");
  };

  const sortedArticles = useMemo(() => {
    if (!sortingOrder) {
      return articles;
    } else {
      if (sortingOrder === "upvotes") {
        return articles.sort((a, b) => b.upvotes - a.upvotes);
      } else {
        return articles.sort((a, b) => new Date(b.date) - new Date(a.date));
      }
    }
  }, [sortingOrder]);

  return (
    <>
      <h8k-navbar header="Sorting Articles"></h8k-navbar>
      <div className="App">
        <div className="layout-row align-items-center justify-content-center my-20 navigation">
          <label className="form-hint mb-0 text-uppercase font-weight-light">
            Sort By
          </label>
          <button
            data-testid="most-upvoted-link"
            className="small"
            onClick={handleMostUpvoted}
          >
            Most Upvoted
          </button>
          <button
            data-testid="most-recent-link"
            className="small"
            onClick={handleMostRecent}
          >
            Most Recent
          </button>
        </div>
        <Articles articles={sortedArticles} />
      </div>
    </>
  );
}

export default App;
