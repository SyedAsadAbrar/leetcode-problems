// https://www.hackerrank.com/challenges/code-review-feedback/problem
// React

import React, { useState } from "react";

const ASPECTS = [
  "Readibility",
  "Performance",
  "Security",
  "Documentation",
  "Testing",
];

const FeedbackSystem = () => {
  const [votes, setVotes] = useState(
    ASPECTS.reduce((accumulated, curr) => {
      return { ...accumulated, [curr]: { upVotes: 0, downVotes: 0 } };
    }, {})
  );

  const voteChangeHandler = (key, isUpvote = true) => {
    setVotes({
      ...votes,
      [key]: {
        ...votes[key],
        ...(isUpvote
          ? { upVotes: votes[key].upVotes + 1 }
          : { downVotes: votes[key].downVotes + 1 }),
      },
    });
  };

  return (
    <div className="my-0 mx-auto text-center w-mx-1200">
      <div className="flex wrap justify-content-center mt-30 gap-30">
        {ASPECTS.map((aspect, index) => (
          <div className="pa-10 w-300 card">
            <h2>{aspect}</h2>
            <div className="flex my-30 mx-0 justify-content-around">
              <button
                className="py-10 px-15"
                data-testid={`upvote-btn-${index}`}
                onClick={() => voteChangeHandler(aspect)}
              >
                👍 Upvote
              </button>
              <button
                className="py-10 px-15 danger"
                data-testid={`downvote-btn-${index}`}
                onClick={() => voteChangeHandler(aspect, false)}
              >
                👎 Downvote
              </button>
            </div>
            <p className="my-10 mx-0" data-testid={`upvote-count-${index}`}>
              Upvotes: <strong>{votes[aspect].upVotes}</strong>
            </p>
            <p className="my-10 mx-0" data-testid={`downvote-count-${index}`}>
              Downvotes: <strong>{votes[aspect].downVotes}</strong>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSystem;
