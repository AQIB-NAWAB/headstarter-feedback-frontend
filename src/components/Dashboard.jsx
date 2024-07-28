import React, { useEffect, useState } from 'react';
import FeedbackList from './FeedbackList';
import axios from 'axios';
const Dashboard = ( ) => {
  const [filter, setFilter] = useState('All');
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);


  const getFeedbacks = async () => {
    setLoading(true);
    const res=await axios.get('https://headstarter-feedback-backend.vercel.app/api/comments');
    setFeedbacks(res.data);
    setLoading(false);
  }

  useEffect(() => {
    getFeedbacks();
  }, []);
    

  const filteredFeedbacks =
    filter === 'All'
      ? feedbacks
      : feedbacks.filter((feedback) => feedback.type === filter);

  if (loading) {
    return <p style={{marginTop:"100px"}}>Loading...</p>;
  }

  return (
    <main className="dashboard-container">
      <h2>Dashboard</h2>
      <label className="filter-label">
        Filter by Type:
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="All">All</option>
          <option value="Suggestions">Suggestions</option>
          <option value="Complain">Complain</option>
          <option value="Issues">Issues</option>
          <option value="Appreciation">Appreciation</option>
        </select>
      </label>
      <FeedbackList feedbacks={filteredFeedbacks}  />
    </main>
  );
};

export default Dashboard;
