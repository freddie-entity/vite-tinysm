import React, { useEffect, useState } from 'react';
import { Room } from '../../features/room/inteface';
import { Link } from 'react-router-dom';
import './ChatItem.css';
import { useAuth } from '../../components/PrivateRoute/useAuth';
import { useAppDispatch } from '../../app/hooks';
import { SendMessageInRoomChat } from '../../features/room/roomAction';

interface Props {
  userRoom: Room;
}
export const ChatItem = ({ userRoom }: Props) => {
  const { user } = useAuth();
  const [toggle, setToggle] = useState(false);
  const [attach, setAttach] = useState(false);
  const [icon, setIcon] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const onMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const onSubmitMessage = async (e: any) => {
    const content = JSON.stringify({
      content: message,
      from: user.user.username,
    });
    const data = { data: content, stream: userRoom.id };
    dispatch(SendMessageInRoomChat(data));
    setMessage('');
    e.preventDefault();
  };

  useEffect(() => {
    const ws = new WebSocket(`ws://127.0.0.1:8000/chat/ws/${userRoom.id}`);

    ws.onmessage = onMessage;
    const interval = setInterval(() => ws.send('echo'), 1500);
    return () => clearInterval(interval);
  }, []);
  const onMessage = (ev: any) => {
    const recv = JSON.parse(ev.data);
    setMessages(recv.data);
  };
  return (
    <Link to={`/inbox/${userRoom.id}`}>
      <div className='header' onClick={() => setToggle(!toggle)}>
        <div className='avatar-wrapper avatar-big'>
          <img
            src='https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2020_03_23/i13863960814_1.jpg'
            alt='avatar'
            className='chat-img'
          />
        </div>
        <span className='name'>{userRoom.name}</span>
        <span className='options'>
          <i className='fas fa-ellipsis-h'></i>
        </span>
      </div>
      <div className={toggle ? 'chat-room' : 'd-none'}>
        {messages.map((m: any) => (
          <div
            className={`message message-${
              m.payload.from === user.user.username ? 'right' : 'left'
            }`}
          >
            <div className='avatar-wrapper avatar-small'>
              <img
                src={'http://localhost:8000' + user.user.avatar}
                alt='avatar'
                className='chat-img'
              />
            </div>

            <div
              className={`bubble bubble-${
                m.payload.from === user.user.username ? 'dark' : 'light'
              }`}
            >
              {m.payload.content}
            </div>
          </div>
        ))}
      </div>
      <div className={toggle ? 'type-area' : 'd-none'}>
        <div className='input-wrapper'>
          <input
            type='text'
            id='inputText'
            placeholder='Type messages here...'
            value={message}
            onChange={(e) => onMessageChange(e)}
          />
        </div>
        <span className='button-add' onClick={() => setAttach(!attach)}>
          <i className='fas fa-plus-circle'></i>
          <div className={attach ? 'others others-show' : 'others'}>
            <span className='emoji-button' onClick={() => setIcon(!icon)}>
              <i className='far fa-laugh'></i>
              <div className={icon ? 'emoji-box emoji-show' : 'emoji-box'}>
                <span>&#x1f604;</span>
                <span>😀</span>
                <span>😂</span>
                <span>😭</span>
                <span>😍</span>
                <span>🤮</span>
                <span>🤑</span>
                <span>😖</span>
                <span>😷</span>
              </div>
            </span>
            <span className='image-button'>
              <i className='far fa-image'></i>
            </span>
            <span>
              <i className='fas fa-paperclip'></i>
            </span>
          </div>
        </span>
        <button
          className='button-send'
          onClick={(e) => {
            onSubmitMessage(e);
          }}
        >
          Send
        </button>
      </div>
    </Link>
  );
};
