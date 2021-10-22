import React from 'react';
import { Button, Form, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

export const Test = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  const variant = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 70,
      },
    },
    whileHover: {
      scale: 1.1,
      textShadow: '0px 0px 8px 0px rgb(255,255,255)',
      boxShadow: '0px 0px 8px 0px rgb(255,255,255)',
      originX: 0,
      transition: {
        yoyo: Infinity,
      },
    },
  };
  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name='upload'
        label='Upload'
        valuePropName='fileList'
        extra='Share us your moment'
      >
        <Upload name='logo' action='/upload.do' listType='picture' multiple>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <motion.button
          type='submit'
          variants={variant}
          initial='hidden'
          animate='visible'
          whileHover='whileHover'
        >
          Submit
        </motion.button>
      </Form.Item>
    </Form>
  );
};
