import React, { useEffect } from 'react';
import { ChatItem } from './ChatItem';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { GetRoomsByUsername } from '../../features/room/roomAction';
import { useAuth } from '../../components/PrivateRoute/useAuth';
import { selectUserRooms } from '../../features/room/roomSelector';

export const Chat = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();
  const userRoom = useAppSelector(selectUserRooms);

  useEffect(() => {
    dispatch(GetRoomsByUsername());
  }, [user.user.username]);
  return (
    <div className='chat-box'>
      {userRoom.userRooms.map((ur: any) => (
        <ChatItem userRoom={ur} key={ur.id} />
      ))}
    </div>
  );
};
