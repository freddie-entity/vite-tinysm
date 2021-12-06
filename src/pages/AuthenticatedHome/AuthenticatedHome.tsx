import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { GalleryABC } from '../../components/GalleryABC/GalleryABC';
import { NavBar } from '../../components/NavBar/NavBar';
import { Profile } from '../Profile/Profile';
import { TestP } from '../../components/Test/TestP';
import { Chat } from '../Chat/Chat';
import { Home } from '../Home/Home';
import './AuthenticatedHome.css';
import { DetailPost } from '../../components/DetailPost/DetailPost';

export const AuthenticatedHome = () => {
  return (
    <>
      <NavBar />
      <section className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/:username' component={Profile} />
          <Route exact path='/inbox/:username' component={Chat} />
          <Route exact path='/test/test' component={TestP} />
          <Route exact path='/p/:post_id' component={DetailPost} />
        </Switch>
      </section>
    </>
  );
};
