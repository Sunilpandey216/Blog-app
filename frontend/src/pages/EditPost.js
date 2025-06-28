import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState({ title: '', content: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/${id}`).then(res => setPost(res.data));
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/${id}`, post);
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" value={post.title} className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea name="content" value={post.content} className="form-control" rows="5" onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-warning"> Update</button>
      </form>
    </div>
  );
}

export default EditPost;
