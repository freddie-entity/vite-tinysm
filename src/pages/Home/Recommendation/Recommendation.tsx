import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useAuth } from '../../../components/PrivateRoute/useAuth';
import { GetRecommendation } from '../../../features/user/userAction';
import { selectUserRecommendation } from '../../../features/user/userSelector';
import { UserLogout } from '../../../features/user/userSlice';
import './Recommendation.css';

export const Recommendation = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const recs = useAppSelector(selectUserRecommendation);
  useEffect(() => {
    dispatch(GetRecommendation());
  }, []);
  return (
    <div>
      <div className='profile-card'>
        <div className='profile-pic'>
          <img src={`http://localhost:8000${user.user.avatar}`} alt='' />
        </div>
        <div>
          <p className='username'>{user.user.username}</p>
          <p className='sub-text'>{user.user.name}</p>
        </div>
        <button className='action-btn' onClick={() => dispatch(UserLogout())}>
          switch
        </button>
      </div>
      <p className='suggestion-text'>Suggestions for you</p>

      {recs.recommendation.map((user) => (
        <div className='profile-card'>
          <div className='profile-pic'>
            <img src={`http://localhost:8000${user.avatar}`} alt='' />
          </div>
          <div>
            <p className='username'>{user.username}</p>
            <p className='sub-text'>followed by user</p>
          </div>
          <button className='action-btn'>follow</button>
        </div>
      ))}
    </div>
  );
};
