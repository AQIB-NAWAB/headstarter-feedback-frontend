import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Notifications = ({  }) => {

  const [updates, setUpdates] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUpdates = async () => {
    setLoading(true);
    const res = await axios.get('https://headstarter-feedback-backend.vercel.app/api/updates');
    setUpdates(res.data);
    setLoading(false);
  };

  useEffect(() => {
    
    fetchUpdates();
  }, []);

  if (loading) {
    return <p style={{marginTop:"100px"}}>Loading...</p>;
  }



  return (
    <main className="notifications-container">
      <h2>Company Responses</h2>
      <div className="notification-cards">
        {updates.map((update, index) => (
          <div key={index} className="card">
          <div className="time">
            <span>
            {
              new Date(update.createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
            
            }
            </span>
          </div>
            <h3>{update.heading}</h3>
            <p>{update.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Notifications;
