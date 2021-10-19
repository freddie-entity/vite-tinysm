import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

import './Searchbar.css';

interface Props {
  searchValue: string;
  onSearchValueChange: Function;
}

export default function Searchbar({ searchValue, onSearchValueChange }: Props) {
  return (
    <div className='searchbar-container'>
      <input
        onChange={(e) => {
          onSearchValueChange(e.target.value);
        }}
        id='searchbar'
      />
      {searchValue === '' && (
        <div
          onClick={(e) => {
            document.getElementById('searchbar')?.focus();
          }}
          className='searchbar-placeholder'
        >
          <SearchOutlined id='searchbar-placeholder-icon' />
          <span>Search</span>
        </div>
      )}
    </div>
  );
}
