import React from 'react';
import axios from 'axios';
export const fetchpost = (post) => ({
  type: 'FETCH_POST',
  post,
});
export const addpost = (post) => ({
  type: 'ADD_POST',
  payload: post,
});
export const editpost = (post) => ({
  type: 'EDIT_POST',
  payload: post,
});
export const deletepost = (id) => ({
  type: 'DELETE_POST',
  payload: id,
});
export const fetchPostAsync = () => {
  return async (dispatch) => {
    try {
      const result = await axios.get('http://localhost:3003/posts');
      dispatch(fetchpost(result.data));
    } catch (err) {
      console.log('err');
    }
  };
};
export const addPostAsync = (post) => {
  return async (dispatch) => {
    try {
      const result = await axios.post('http://localhost:3003/posts', post);
      dispatch(addpost(result.data));
    } catch (err) {
      console.log('err');
    }
  };
};
export const editPostAsync = (post) => {
  return async (dispatch) => {
    try {
      const result = await axios.put(
        `http://localhost:3003/posts/${post.id}`,
        post
      );
      dispatch(editpost(result.data));
    } catch (err) {
      console.log('err');
    }
  };
};
export const deletePostAsync = (id) => {
  return async (dispatch) => {
    try {
      const result = await axios.delete(`http://localhost:3003/posts/${id}`);
      dispatch(deletepost(id));
    } catch (err) {
      console.log('err');
    }
  };
};
