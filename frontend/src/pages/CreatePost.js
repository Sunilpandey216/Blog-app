import React, { useState } from 'react';
import axios from '../axios';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  const [post, setPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/', post);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea name="content" className="form-control" rows="5" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-success"> Create</button>
      </form>
    </div>
  );
}

export default CreatePost;
