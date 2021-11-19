import React, { useEffect } from 'react';
import { Gallery } from './Gallery/Gallery';
import { Info } from './Info/Info';
import { useParams } from 'react-router-dom';
import './Profile.css';
import { useAppDispatch } from '../../app/hooks';
import { GetProfile } from '../../features/user/userAction';

export const Profile = () => {
  const params: any = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(GetProfile(params.username));
  }, [params.username]);
  return (
    <div>
      <header>
        <div className='container'>
          <Info />
        </div>
      </header>

      <main>
        <div className='container'>
          <Gallery />
        </div>
      </main>
    </div>
  );
};
