import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { MailOutlined, BellOutlined, SearchOutlined } from '@ant-design/icons';

import './Header.css';
import { Link } from 'react-router-dom';

const { Search } = Input;
const Header = () => {
  const onSearch = (value: any) => console.log(value);
  const suffix = <SearchOutlined style={{ fontSize: 24 }} />;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <div>
        <Input
          placeholder="Search"
          size="large"
          bordered={false}
          suffix={suffix}
          style={{
            width: 400,
            backgroundColor: '#EDE6E6',
            borderRadius: 10,
          }}
        />
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 70,
          marginTop: 17,
        }}
      >
        <div className="icon-header">
          <MailOutlined />
        </div>
        <div className="icon-header">
          <BellOutlined />
        </div>
        <img src="/imgs/Frame 54.png" />
      </div>
    </div>
  );
};
export default Header;
