import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { namespace } from './default';

const baseURL = 'http://localhost:8000';

export const GetPostsByUsername = createAsyncThunk(
  `${namespace}/GetPostsByUsername`,
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

export const GetPostById = createAsyncThunk(
  `${namespace}/GetPostsById`,
  async (post_id: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseURL}/post/?id=${post_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetPosts = createAsyncThunk(
  `${namespace}/GetPosts`,
  async (turn: number, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseURL}/post/?turn=${turn}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UserLikesPost = createAsyncThunk(
  `${namespace}/UserLikesPost`,
  async (postlike: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseURL}/relationship/likepost?username=${postlike.username}&post_id=${postlike.post_id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
