import { Button } from 'antd';
import {
  HomeOutlined,
  BookOutlined,
  AuditOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Fragment } from 'react';

const Sidebar = () => {
  const menuItems = [
    { icon: <HomeOutlined />, title: 'Trang chủ' },
    { icon: <BookOutlined />, title: 'Quản lý vé' },
    { icon: <AuditOutlined />, title: 'Đổi soát vé' },
    { icon: <SettingOutlined />, title: 'Cài đặt', subtitle: 'Gói dịch vụ' },
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
            <Button
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
              type="text"
            >
              {menuItem.icon} {menuItem.title}
            </Button>
            {menuItem.subtitle && (
              <div style={{ fontSize: 18, marginLeft: 50 }}>
                {menuItem.subtitle}
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
