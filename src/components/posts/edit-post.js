import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { editPostAsync } from '../../actions/post-action';
const EditPost = () => {
  let history = useHistory();
  const { id } = useParams();
  const [post, setPost] = useState({
    userId: '',
    title: '',
    body: '',
  });
  //destruction
  const dispatch = useDispatch();
  const { userId, title, body } = post;
  const onInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    // await axios.put(`http://localhost:3003/posts/${id}`, post);
    //history.push('/');
    dispatch(editPostAsync(post));
    history.push('/');
  };
  useEffect(() => {
    loadPost();
  }, []);
  const loadPost = async () => {
    const result = await axios.get(`http://localhost:3003/posts/${id}`);
    setPost(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">
          Edit A Post
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
            <button className="btn btn-warning btn-block">Update Post</button>
          </form>
        </h2>
      </div>
    </div>
  );
};
export default EditPost;
