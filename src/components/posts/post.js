import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState({
    userId: '',
    title: '',
    body: '',
  });
  const { id } = useParams();

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const result = await axios.get(`http://localhost:3003/posts/${id}`);
    setPost(result.data);
  };

  return (
    <div className="container">
      <Link className="btn btn-primary" to="/">
        Back to Home
      </Link>
      <h1 className="display-4">Post ID: {post.userId}</h1>
      <hr />
      <ul container="list-group w-50">
        <li className="list-group-item"> name: {post.id}</li>
        <li className="list-group-item"> Title: {post.title}</li>
        <li className="list-group-item"> Body: {post.body}</li>
      </ul>
    </div>
  );
};
export default Post;
