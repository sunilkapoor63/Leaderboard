import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './Leaderboard.css';

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.scores.scores);

  return (
    <div className="leaderboard">
      <h1>Fastest of Today</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => {
            let className = '';
            if (index === 0) className = 'gold';
            else if (index === 1) className = 'silver';
            else if (index === 2) className = 'bronze';

            return (
              <tr key={index} className={className}>
                <td>{index + 1}</td>
                <td>{score.username}</td>
                <td>{score.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="recent-entry">
        <h2>Recent Entry</h2>
        {scores.length > 0 && (
          <p>
            {scores[scores.length - 1].username} -{' '}
            {scores[scores.length - 1].time}
          </p>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
