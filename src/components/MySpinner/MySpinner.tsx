import { ConfigProvider, Spin } from 'antd';
import React from 'react';

const MySpinner: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ConfigProvider
        theme={{
          token: {
            controlHeight: 150,
          },
        }}
      >
        <Spin />
      </ConfigProvider>
    </div>
  );
};

export default MySpinner;
