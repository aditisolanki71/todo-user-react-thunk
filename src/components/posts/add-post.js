import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { addPostAsync } from '../../actions/post-action';
import { useSelector, useDispatch } from 'react-redux';
const AddPost = () => {
  let history = useHistory();
  const [post, setPost] = useState({
    userId: '',
    title: '',
    body: '',
  });
  const dispatch = useDispatch();
  //destruction
  const { userId, title, body } = post;
  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(addPostAsync(post));
    history.push('/');
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">
          Add A Post
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                className="form-control from-control-lg"
                placeholder="enter your userId"
                name="userId"
                value={userId}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control from-control-lg"
                placeholder="enter your title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control from-control-lg"
                placeholder="enter your Body"
                name="body"
                value={body}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add Post</button>
          </form>
        </h2>
      </div>
    </div>
  );
};
export default AddPost;
