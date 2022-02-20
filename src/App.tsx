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

// function AboutDuong() {
//   return <div>Hello Duong</div>;
// }

// function AboutTu() {
//   return <div>Hello Tu</div>;
// }

// function About() {
//   let navigate = useNavigate();

//   return (
//     <>
//       <Button
//         onClick={() => {
//           navigate('/');
//         }}
//       >
//         Go to home
//       </Button>
//       <Link to="/about/duong">Duong</Link>
//       <Link to="/about/tu">Tu</Link>
//       <Routes>
//         <Route path="duong" element={<AboutDuong />} />
//         <Route path="tu" element={<AboutTu />} />
//         <Route path="*" element={<Page404 />} />
//       </Routes>
//     </>
//   );
// }

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
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderRadius: 20,

              marginTop: 10,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/manage/*" element={<Manage />} />
              <Route path="/control/*" element={<Control />} />
              <Route path="/setting/*" element={<Setting />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
