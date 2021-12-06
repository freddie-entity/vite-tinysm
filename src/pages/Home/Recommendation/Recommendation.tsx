import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { useAuth } from '../../../components/PrivateRoute/useAuth';
import { GetRecommendation } from '../../../features/user/userAction';
import { selectUserRecommendation } from '../../../features/user/userSelector';
import { UserLogout } from '../../../features/user/userSlice';
import './Recommendation.css';
import { RecommendationSkeleton } from './RecommendationSkeleton';

export const Recommendation = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const recs = useAppSelector(selectUserRecommendation);
  useEffect(() => {
    dispatch(GetRecommendation(user.user.username));
  }, [user.user.username]);
  return (
    <div>
      {user.loading ? (
        <RecommendationSkeleton />
      ) : (
        <div className='profile-card'>
          <Link to={`${user.user.username}`} className='profile-pic'>
            <img src={`http://localhost:8000${user.user.avatar}`} alt='' />
          </Link>
          <div>
            <p className='username'>{user.user.username}</p>
            <p className='sub-text'>{user.user.name}</p>
          </div>
          <button className='action-btn' onClick={() => dispatch(UserLogout())}>
            switch
          </button>
        </div>
      )}
      <p className='suggestion-text'>Suggestions for you</p>

      {recs.loading ? (
        <RecommendationSkeleton />
      ) : (
        recs.recommendation.map((user) => (
          <div className='profile-card'>
            <Link to={`${user.username}`} className='profile-pic'>
              <img src={`http://localhost:8000${user.avatar}`} alt='' />
            </Link>
            <div>
              <p className='username'>{user.username}</p>
              <p className='sub-text'>{user.name}</p>
            </div>
            <button className='action-btn'>follow</button>
          </div>
        ))
      )}
    </div>
  );
};
