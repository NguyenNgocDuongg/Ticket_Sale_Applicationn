import { useState } from 'react';

import { Input, Modal, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './Setting.css';
import AddTicket from '../AddTicket';
const Setting = () => {
  const suffix = <SearchOutlined style={{ fontSize: 24 }} />;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="body">
      <h1 style={{ fontWeight: 'bold' }}>Danh sách gói vé </h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Input
          placeholder="Tìm bằng số vé"
          size="large"
          bordered={false}
          suffix={suffix}
          style={{
            width: 380,
            backgroundColor: '#F7F7F8',
            borderRadius: 10,
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <button className="custom_button">Xuất file (.csv)</button>
          <Button
            type="primary"
            onClick={showModal}
            style={{
              borderRadius: 5,
              color: '#fff',
              fontWeight: 'bold',
              marginLeft: 5,
              backgroundColor: '#ff993c',
              border: '1px solid #ff993c',
              width: 130,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Thêm gói vé
          </Button>
        </div>
      </div>
      <Modal
        footer={null}
        centered={true}
        visible={isModalVisible}
        onCancel={handleCancel}
        width={650}
      >
        <AddTicket />
      </Modal>
    </div>
  );
};

export default Setting;
