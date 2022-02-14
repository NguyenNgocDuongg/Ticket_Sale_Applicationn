import './App.css';
import XinChao from './components/Sidebar';
import { Component, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Input, Button, Menu, message, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons/lib/icons';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';

function App() {
  return (
    <div style={{ backgroundColor: '#F9F6F4' }}>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Header />
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderRadius: 20,
              marginTop: 10,
            }}
          >
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
