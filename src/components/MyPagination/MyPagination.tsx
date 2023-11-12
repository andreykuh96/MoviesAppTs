import React from 'react';
import { ConfigProvider, Pagination } from 'antd';

interface MyPaginationProps {
  changePage: (page: number) => void;
}

const MyPagination: React.FC<MyPaginationProps> = ({ changePage }) => {
  const [current, setCurrent] = React.useState(1);

  const changeCurrent = (page: number) => {
    setCurrent(page);
    changePage(page);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0 0 0' }}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#fff',
          },
          components: {
            Pagination: {
              itemActiveBg: '#1677ff',
            },
          },
        }}
      >
        <Pagination current={current} onChange={changeCurrent} defaultCurrent={1} total={50} />
      </ConfigProvider>
    </div>
  );
};

export default MyPagination;
