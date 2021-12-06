import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'js-cookie';
import { RootState } from '../../app/store';
import { userDefault, namespace } from './default';
import { getFormData } from '../../helpers/function';
import { UserLoginType } from './interface';
const baseURL = 'http://localhost:8000';

export const UserLogin = createAsyncThunk(
  `${namespace}/auth/token`,
  async (object: UserLoginType, { rejectWithValue }) => {
    try {
      const formdata = getFormData(object);
      const { data } = await axios.post(`${baseURL}/auth/token`, formdata);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetRecommendation = createAsyncThunk(
  `${namespace}/recommendation`,
  async (username: string, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.get(
        `${baseURL}/auth/recommendation?username=${username}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetMe = createAsyncThunk(
  `${namespace}/auth/me`,
  async (_, { rejectWithValue }) => {
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookie.get('token'),
      },
    };
    try {
      const { data } = await axios.get(`${baseURL}/auth/me`, requestOptions);
      return data ? data : userDefault;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const GetProfile = createAsyncThunk(
  `${namespace}/user/profile`,
  async (username: string, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${baseURL}/auth/users?username=${username}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
