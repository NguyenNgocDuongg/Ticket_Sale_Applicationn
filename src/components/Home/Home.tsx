import { DatePicker, Space } from 'antd';
import React from 'react';
import { Line } from '@ant-design/charts';
const { RangePicker } = DatePicker;
const Home = () => {
  return (
    <div style={{ marginLeft: 15, marginRight: 30 }}>
      <h1>Thống kê</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: '18',
        }}
      >
        <p>Doanh thu</p>
        <div
          style={{
            marginRight: '50',
          }}
        >
          <DatePicker picker="month" bordered={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
