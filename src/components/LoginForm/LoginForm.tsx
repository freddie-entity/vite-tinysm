import React from 'react';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { UserLogin } from '../../features/user/userAction';
import { selectCurrentUser } from '../../features/user/userSelector';

export const LoginForm = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { loading, isAuth } = useAppSelector(selectCurrentUser);
  const onFinish = (values: any) => {
    dispatch(UserLogin(values));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
  };

  if (isAuth) history.push('/');

  return (
    <Form
      name='basic'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete='off'
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type='primary' htmlType='submit' loading={loading}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
