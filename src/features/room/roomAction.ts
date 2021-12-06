import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../../app/store';
import { namespace } from './default';

const baseURL = 'http://localhost:8000';

export const GetRoomsByUsername = createAsyncThunk(
  `${namespace}/GetRoomsByUsername`,
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState() as RootState;
      const { data } = await axios.get(
        `${baseURL}/room/?username=${state.user.authUser.user.username}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const SendMessageInRoomChat = createAsyncThunk(
  `${namespace}/SendMessageInRoomChat`,
  async (data: any, { rejectWithValue }) => {
    console.log(JSON.parse(data.data));
    try {
      await axios.post(
        `${baseURL}/chat/sendmessage?stream=${data.stream}`,
        JSON.stringify(data.data)
      );
      // return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
