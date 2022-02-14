import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { MailOutlined, BellOutlined } from '@ant-design/icons';
import './Header.css';

const { Search } = Input;
const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <img
        style={{ width: 437, height: 48, marginRight: 600 }}
        src="/imgs/search.jpg"
      />
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
