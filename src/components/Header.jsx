import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [updatesCount, setUpdatesCount] = React.useState(0);
  const [feedbacksCount, setFeedbacksCount] = React.useState(0);


  React.useEffect(() => {
    const fetchUpdates = async () => {
      const res = await fetch('https://headstarter-feedback-backend.vercel.app/api/updates');
      const data = await res.json();
      setUpdatesCount(data.length);
    };

    const fetchFeedbacks = async () => {
      const res = await fetch('https://headstarter-feedback-backend.vercel.app/api/comments');
      const data = await res.json();
      setFeedbacksCount(data.length);
    };

    fetchUpdates();
    fetchFeedbacks();

  }, []);




  return (
    <header className="header-container">
      <h1>
       Anonymous Feedback
       </h1>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">
        Dashboard
        {
          feedbacksCount > 0 && (
            <div className="counter">
              <span>{feedbacksCount}</span>
            </div>
          )
        }
        </Link>
        <Link to="/notifications">Notifications
        {
          updatesCount > 0 && (
            <div className="counter">
              <span>{updatesCount}</span>
            </div>
          )
        }
        </Link>
      </nav>
    </header>
  );
};

export default Header;
