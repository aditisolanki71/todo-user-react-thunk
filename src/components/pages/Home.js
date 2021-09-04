import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPostAsync, deletePostAsync } from '../../actions/post-action';
import { useSelector, useDispatch } from 'react-redux';
const Home = (props) => {
  const posts = useSelector((state) => state.post.userPost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostAsync());
  }, []);

  const deletePost = async (id) => {
    dispatch(deletePostAsync(id));
  };
  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">user Id</th>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post, index) => (
                <tr>
                  <th scope="row">{post.userId}</th>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <Link class="btn btn-primary mr-2" to={`/posts/${post.id}`}>
                      view
                    </Link>
                    <Link
                      class="btn btn-outline-primary mr-2"
                      to={`/posts/edit/${post.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                      onClick={() => deletePost(post.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
