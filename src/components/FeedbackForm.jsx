import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const FeedbackForm = ( ) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('Suggestions');
  const [comment, setComment] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    const res= await axios.post('https://headstarter-feedback-backend.vercel.app/api/comments', {
      title,
      type,
      comment,
    });

    if(res.status === 200){
     toast.success('Feedback submitted successfully');
      setTitle('');
      setType('Suggestions');
      setComment('');
    }else{
      console.log(res);
      toast.error('Failed to submit feedback');
    }

  };

  return (
    <main className="feedback-form-container">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Feedback Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="Suggestions">Suggestions</option>
            <option value="Complain">Complain</option>
            <option value="Issues">Issues</option>
            <option value="Appreciation">Appreciation</option>
          </select>
        </label>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default FeedbackForm;
