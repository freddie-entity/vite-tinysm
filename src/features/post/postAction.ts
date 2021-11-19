import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { namespace } from './default';

const baseURL = 'http://localhost:8000';

export const GetPostsByUsername = createAsyncThunk(
  `${namespace}/username`,
  async ({ username, turn }: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${baseURL}/post/?username=${username}&turn=${turn}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetPosts = createAsyncThunk(
  `${namespace}/getall`,
  async (turn: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseURL}/post/?turn=${turn}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
