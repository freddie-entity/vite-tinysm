import React, { useEffect, useState } from 'react';
import { Room } from '../../features/room/inteface';
import { Link } from 'react-router-dom';
import './ChatItem.css';
import { useAuth } from '../../components/PrivateRoute/useAuth';

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
  const onMessageChange = (e: any) => {
    setMessage(e.target.value);
  };
  const onSubmitMessage = async (e: any) => {
    ws.send(JSON.stringify({ content: message, from: user.user.username }));
    setMessage('');
    e.preventDefault();
  };

  const ws = new WebSocket(`ws://127.0.0.1:8000/chat/stream/${userRoom.id}`);
  console.log(ws);

  useEffect(() => {
    ws.onmessage = async (event) => {
      setMessages((messages) => messages.concat(JSON.parse(event.data)));
    };
  }, []);
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
      <div className={toggle ? 'chat-room' : 'd-none'} id='stream-messages'>
        <div className='message message-left'>
          <div className='avatar-wrapper avatar-small'>
            <img
              src='https://znews-photo.zadn.vn/w660/Uploaded/pnbcuhbatgunb/2020_03_23/i13863960814_1.jpg'
              alt='avatar'
              className='chat-img'
            />
          </div>
          <div className='bubble bubble-light'>Hey anhat!</div>
        </div>
        {messages.map((m: any) => (
          <div className='message message-right'>
            <div className='avatar-wrapper avatar-small'>
              <img
                src='https://scontent-xsp1-1.xx.fbcdn.net/v/t1.0-9/s960x960/87853049_2481558942096235_8369025410146500608_o.jpg?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=0dU4W6nYBk0AX-ZHz-P&_nc_ht=scontent-xsp1-1.xx&_nc_tp=7&oh=20d12357dd09465c5ed2526555651580&oe=5EA2FF44'
                alt='avatar'
                className='chat-img'
              />
            </div>
            <div className='bubble bubble-dark'>{m.payload.content}</div>
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
        <button className='button-send' onClick={(e) => onSubmitMessage(e)}>
          Send
        </button>
      </div>
    </Link>
  );
};
