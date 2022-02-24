import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Component, Fragment, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Input, Button, Menu, message, Dropdown } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons/lib/icons';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import './App.css';
import Manage from 'components/Manage';
import Control from './components/Control';
import Setting from './components/Setting';

function App() {
  return (
    <div style={{ backgroundColor: '#F9F6F4' }}>
      <div style={{ display: 'flex', height: '1000' }}>
        <Sidebar />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginRight: 40,
            width: '100%',
          }}
        >
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manage/*" element={<Manage />} />
            <Route path="/control/*" element={<Control />} />

            <Route path="/setting/*" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
