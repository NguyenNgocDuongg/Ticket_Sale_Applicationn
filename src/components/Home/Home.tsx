import { useState, useEffect, useRef } from 'react';
import { DatePicker, Space } from 'antd';
import React from 'react';
import { Line } from '@ant-design/charts';

import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
const { RangePicker } = DatePicker;
const Home = () => {
  const DemoArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      asyncFetch();
    }, []);

    const asyncFetch = () => {
      fetch(
        'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
      )
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    const config = {
      data,
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        range: [0, 1],
        tickCount: 5,
      },
      areaStyle: () => {
        return {
          fill: 'l(270) 0:#ffffff 1:#FAA05F ',
        };
      },
    };

    return <Area {...config} />;
  };
  return (
    <div style={{ marginLeft: 15, marginRight: 30, marginTop: 20 }}>
      <h1 style={{ fontWeight: 'bold' }}>Thống kê</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          fontSize: '18',
        }}
      >
        <p style={{ fontWeight: 'bold' }}>Doanh thu</p>
        <div
          style={{
            marginRight: '50',
          }}
        >
          <DatePicker picker="week" bordered={true} />
        </div>
      </div>
      <div style={{ height: '200' }}>
        <DemoArea />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '10' }}
      >
        <h5 style={{ opacity: 0.6 }}>Tổng doanh thu theo tuần</h5>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ fontWeight: 'bold', marginRight: 5 }}> 525.145.000</p>
          <p>đồng</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
