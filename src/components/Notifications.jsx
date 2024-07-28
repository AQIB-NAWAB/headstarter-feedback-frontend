import React from 'react';

const Notifications = ({ feedbacks }) => {
  const respondedFeedbacks = feedbacks.filter((feedback) => feedback.response);

  return (
    <main className="notifications-container">
      <h2>Company Responses</h2>
      <div className="notification-cards">
        {respondedFeedbacks.map((feedback, index) => (
          <div key={index} className="card">
            <h3>{feedback.title}</h3>
            <p>{feedback.response}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Notifications;
