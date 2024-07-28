import React from 'react';
import './FeedbackList.css'; // Import the CSS file

const FeedbackList = ({ feedbacks }) => {
  return (
    <div className="feedback-list">
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <div key={index} className="card">
          <div className="time">
            <span>{
              new Date(feedback.createdAt).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })
            
            }</span>
          </div>
            <div className="card-header">
              <h3 className="feedback-title">{feedback.title}</h3>
              <span className="feedback-type">{feedback.type}</span>
            </div>
            <p className="feedback-comment">{feedback.comment}</p>
          </div>
        ))
      ) : (
        <p>No feedback available.</p>
      )}
    </div>
  );
};

export default FeedbackList;
