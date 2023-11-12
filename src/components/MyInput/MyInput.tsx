import React from 'react';
import { Input } from 'antd';
import useDebounce from '../../hooks/useDebounce';

interface MyInputProps {
  changeQuery: (query: string) => void;
}

const MyInput: React.FC<MyInputProps> = ({ changeQuery }) => {
  const [value, setValue] = React.useState('');
  const debounced = useDebounce(changeQuery, 500);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    debounced(e.target.value);
  };

  return (
    <div style={{ margin: '0 0 20px 0' }}>
      <Input value={value} onChange={changeInputValue} placeholder="Type to search..." />
    </div>
  );
};

export default MyInput;
