// import React, { useState } from "react";
// React

import React, { useState } from "react";
import Input from "./Input";
import PostDisplay from "./PostDisplay";

function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);

  const createPostHandler = () => {
    if (title.length && description.length) {
      setPosts([...posts, { title, description, id: posts.length }]);
      setDescription("");
      setTitle("");
    }
  };

  const onDeleteHandler = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="text-center ma-20">
      <div className="mb-20">
        <Input {...{ title, setTitle, description, setDescription }} />
        <button
          data-testid="create-button"
          className="mt-10"
          onClick={createPostHandler}
        >
          Create Post
        </button>
      </div>
      <div className="posts-section">
        <PostDisplay posts={posts} onDelete={onDeleteHandler} />
      </div>
    </div>
  );
}

export default Home;
