import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import FilterControl from '../FilterControl';
import { Fragment } from 'react';
const suffix = <SearchOutlined style={{ fontSize: 24 }} />;
const Control = () => {
  return (
    <div style={{ width: 1240, display: 'flex' }}>
      <div className="body" style={{ width: 'calc(100% - 400px)' }}>
        <h1 style={{ fontWeight: 'bold' }}>Đối soát vé </h1>

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
          <button
            style={{
              borderRadius: 5,
              color: '#fff',
              fontWeight: 'bold',
              marginLeft: 20,
              backgroundColor: '#ff993c',
              border: '1px solid #ff993c',
              width: 150,
              height: 40,
              cursor: 'pointer',
            }}
          >
            Chốt đối soát
          </button>
        </div>
      </div>
      <div
        style={{
          marginTop: 20,
          backgroundColor: '#fff',
          borderRadius: 20,
          width: 400,
          padding: 20,
          marginLeft: 20,
        }}
      >
        <FilterControl />
      </div>
    </div>
  );
};

export default Control;
