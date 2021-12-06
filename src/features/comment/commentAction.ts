import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { namespace } from '../user/default';
const baseURL = 'http://localhost:8000';

export const CreateComment = createAsyncThunk(
  `${namespace}/comment/createcomment`,
  async (comment: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${baseURL}/comment/`, comment);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetCommentByPostId = createAsyncThunk(
  `${namespace}/GetCommentByPostId`,
  async (post_id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${baseURL}/comment/?post_id=${post_id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
