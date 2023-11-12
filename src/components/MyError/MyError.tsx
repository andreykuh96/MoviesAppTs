import { Alert, ConfigProvider } from 'antd';
import React from 'react';

interface MyErrorProps {
  msg: string;
}

const MyError: React.FC<MyErrorProps> = ({ msg }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontSize: 24,
        },
      }}
    >
      <Alert message={msg} type="error" />
    </ConfigProvider>
  );
};

export default MyError;
