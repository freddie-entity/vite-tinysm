import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { namespace } from './default';

const baseURL = 'http://localhost:8000';

export const GetRoomsByUsername = createAsyncThunk(
  `${namespace}/GetRoomsByUsername`,
  async ({ username }: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseURL}/room/?username=${username}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
