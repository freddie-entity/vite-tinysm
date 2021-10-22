import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { postDefault } from '../../helpers/default/post';
import { namespace } from '../user/ns';
const baseURL = 'http://localhost:8000';

export const GetUserPosts = createAsyncThunk(
  `${namespace}/getUserPost`,
  async (username: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseURL}/post/?username=${username}`);
      return data ? data : [postDefault];
    } catch (error) {
      return rejectWithValue(error) || '';
    }
  }
);
