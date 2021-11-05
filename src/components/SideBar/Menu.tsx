import React, { useState } from 'react';
import { menuData } from './menuData';
import './SideBar.css';

export const Menu = () => {
  const [selectedKey, setSelectedKey] = useState(-1);
  return (
    <div className='menu'>
      {menuData.map((item, i) => (
        <a
          href={item.link}
          key={i}
          className={selectedKey === i ? 'active' : ''}
          onClick={() => setSelectedKey(i)}
        >
          <span className='icon'>
            <i className={item.icon}></i>
          </span>
          {item.dest}
        </a>
      ))}
    </div>
  );
};
