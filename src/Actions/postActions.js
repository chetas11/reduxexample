import { Fetch_Posts, New_Posts } from "./types";

export function fetchPosts() {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) =>
        dispatch({
          type: Fetch_Posts,
          payload: posts,
        })
      );
  };
}

export function createPosts(postData) {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: {
        body: JSON.stringify(postData),
      },
    })
      .then((res) => res.json())
      .then((post) =>
        dispatch({
          type: New_Posts,
          payload: post,
        })
      );
  };
}
