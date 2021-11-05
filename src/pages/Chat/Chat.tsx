import React from 'react';
import './Chat.css';
import { ChatBox } from './ChatBox';
import { UserChatList } from './UserChatList';

export const Chat = () => {
  return (
    <div className='center'>
      <UserChatList />
      <ChatBox />
    </div>
  );
};
