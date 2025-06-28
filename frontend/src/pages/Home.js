import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await axios.get('/');
    setPosts(res.data);
  };

  const deletePost = async (id) => {
    await axios.delete(`/${id}`);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2> Blog Posts</h2>
        <Link to="/create" className="btn btn-primary"> Create Post</Link>
      </div>

      <div className="row">
        {posts.map((post) => (
          <div key={post._id} className="col-md-6 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.content}</p>
                <Link to={`/edit/${post._id}`} className="btn btn-sm btn-outline-primary me-2"> Edit</Link>
                <button onClick={() => deletePost(post._id)} className="btn btn-sm btn-outline-danger"> Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
