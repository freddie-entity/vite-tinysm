import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import cookie from 'js-cookie';
import { RootState } from '../../app/store';
import { userDefault } from '../../helpers/default/user';
import { getFormData } from '../../helpers/function';
import { UserLoginType } from '../../helpers/interfaces';
import { namespace } from './ns';
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

export const GetMe = createAsyncThunk(
  `${namespace}/auth/me`,
  async (_, { getState }) => {
    const state = getState() as RootState;
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + cookie.get('token'),
      },
    };
    const { data } = await axios.get(`${baseURL}/auth/me`, requestOptions);
    return data ? data : userDefault;
  }
);
