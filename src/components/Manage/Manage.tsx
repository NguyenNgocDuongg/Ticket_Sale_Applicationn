import { Input, Modal, Button } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { useState } from 'react';
import FilterTicket from '../FilterTicket';
import './Manage.css';
const Manage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const suffix = <SearchOutlined style={{ fontSize: 24 }} />;
  return (
    <div style={{ marginLeft: 15, marginRight: 30, marginTop: 20 }}>
      <h1 style={{ fontWeight: 'bold' }}>Danh sách vé </h1>
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
        <div style={{ display: 'flex' }}>
          <Button
            type="primary"
            onClick={showModal}
            style={{
              borderRadius: 5,
              color: '#ff993c',
              fontWeight: 'bold',
              marginLeft: 5,
              backgroundColor: '#fff',
              border: '1px solid #ff993c',
              width: '100px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FilterOutlined style={{ marginRight: 5, fontSize: 20 }} />
            Lọc vé
          </Button>

          <Modal
            centered={true}
            footer={null}
            visible={isModalVisible}
            onCancel={handleCancel}
          >
            <FilterTicket />
          </Modal>
          <button className="custom_button">Xuất file (.csv)</button>
        </div>
      </div>
    </div>
  );
};

export default Manage;
