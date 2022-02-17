import { Button } from 'antd';
import { useState } from 'react';
import {
  HomeOutlined,
  BookOutlined,
  AuditOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: <HomeOutlined />, title: 'Trang chủ' },
    { path: '/manage', icon: <BookOutlined />, title: 'Quản lý vé' },
    { path: '/control', icon: <AuditOutlined />, title: 'Đổi soát vé' },
    {
      path: '/setting',
      icon: <SettingOutlined />,
      title: 'Cài đặt',
      subtitle: 'Gói dịch vụ',
    },
  ];

  return (
    <div
      style={{
        marginTop: 10,
        marginLeft: 20,
        width: 252,
        height: 572,
      }}
    >
      <img
        style={{ width: 133, height: 58, marginBottom: 60 }}
        src="/imgs/insight-05 1.png"
      />
      <div>
        {menuItems.map((menuItem) => (
          <Fragment key={menuItem.title}>
            <Link to={menuItem.path}>
              <Button
                type="text"
                style={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  width: 252,
                  height: 56,
                  borderRadius: 8,
                  paddingTop: 15,
                  paddingBottom: 15,
                  paddingRight: 24,
                  fontSize: 18,
                }}
              >
                <div style={{ paddingLeft: 5, paddingRight: 10 }}>
                  {menuItem.icon}
                </div>
                <div>{menuItem.title}</div>
              </Button>
            </Link>
            {menuItem.subtitle && (
              <Button style={{ fontSize: 18, marginLeft: 50 }} type="text">
                {menuItem.subtitle}
              </Button>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
