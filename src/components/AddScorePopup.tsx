import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/scoresSlice';
import './AddScorePopup.css';

const AddScorePopup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const validateTimeFormat = (time: string) => {
    const timeRegex = /^\d{2}:\d{2}:\d{2}$/;
    return timeRegex.test(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateTimeFormat(time)) {
      setError('Incorrect time format. Please use MM:SS:MS.');
      return;
    }
    setError('');
    dispatch(addScore({ username, time }));
    setUsername('');
    setTime('');

    // Add animation class
    const recentScore = document.querySelector('.recent-score');
    if (recentScore) {
      recentScore.classList.add('animate');
      setTimeout(() => {
        recentScore.classList.remove('animate');
      }, 1000);
    }
  };

  return (
    <div className="add-score-popup">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Time (MM:SS:MS):</label>
          <input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="button-group">
          <button type="submit">Add Score</button>
          <button type="button" onClick={() => { /* handle cancel or close */ }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddScorePopup;
