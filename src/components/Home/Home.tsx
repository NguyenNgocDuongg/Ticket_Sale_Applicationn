import { useState, useEffect, useRef } from 'react';
import { DatePicker, Space } from 'antd';
import React from 'react';
import { Line } from '@ant-design/charts';
import ReactDOM from 'react-dom';
import { Area, Pie, G2 } from '@ant-design/plots';
const { RangePicker } = DatePicker;
const Home = () => {
  const DemoPie = () => {
    const data = [
      {
        status: 'Vé chưa sử dụng',
        sold: 13568,
      },
      {
        status: 'Vé đã sử dụng',
        sold: 56024,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'sold',
      colorField: 'status',
      radius: 0.8,
      innerRadius: 0.45,
      label: {
        type: 'inner',
        offset: '-50%',
        style: {
          fill: '#fff',
          fontSize: 18,
          textAlign: 'center',
          innerRadius: 0.5,
        },
      },
      pieStyle: ({ status }: { status: any }) => {
        if (status === 'Vé chưa sử dụng') {
          return {
            fill: '#FF8A48',
          };
        }

        return {
          fill: '#4F75FF',
        };
      },
      // tooltip: false,
      interactions: [
        {
          type: 'element-single-selected',
        },
      ],
    };
    return <Pie {...config} legend={false} />;
  };

  const DemoPie1 = () => {
    const data = [
      {
        status: 'Vé chưa sử dụng',
        sold: 28320,
      },
      {
        status: 'Vé đã sử dụng',
        sold: 30256,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      angleField: 'sold',
      colorField: 'status',
      radius: 0.8,
      innerRadius: 0.45,
      label: {
        type: 'inner',
        offset: '-50%',
        style: {
          fill: '#fff',
          fontSize: 18,
          textAlign: 'center',
          innerRadius: 0.5,
        },
      },
      pieStyle: ({ status }: { status: any }) => {
        if (status === 'Vé chưa sử dụng') {
          return {
            fill: '#FF8A48',
          };
        }

        return {
          fill: '#4F75FF',
        };
      },
      // tooltip: false,
      interactions: [
        {
          type: 'element-single-selected',
        },
      ],
    };
    return <Pie {...config} legend={false} />;
  };

  const dataChart = [
    {
      Date: 'Thứ 2',
      scales: '140tr',
    },
    {
      Date: 'Thứ 3',
      scales: '180tr',
    },
    {
      Date: 'Thứ 4',
      scales: '220tr',
    },
    {
      Date: 'Thứ 5',
      scales: '260tr',
    },
    {
      Date: 'Thứ 6',
      scales: '150tr',
    },
    {
      Date: 'Thứ 7',
      scales: '260tr',
    },
    {
      Date: 'Chủ nhật',
      scales: '220tr',
    },
  ];

  const DemoArea = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // asyncFetch();
    }, []);

    // const asyncFetch = () => {
    //   fetch(dataChart)
    //     .then((response) => response.json())
    //     .then((json) => setData(json))
    //     .catch((error) => {
    //       console.log('fetch data failed', error);
    //     });
    // };
    const config = {
      data: dataChart,
      smooth: true,
      color: '#FF993C',
      xField: 'Date',
      yField: 'scales',
      xAxis: {
        range: [0, 1],
        tickCount: 7,
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
    <div className="body">
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
      <div>
        <DemoArea />
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '20' }}
      >
        <h5 style={{ opacity: 0.6 }}>Tổng doanh thu theo tuần</h5>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={{ fontWeight: 'bold', marginRight: 5, fontSize: 24 }}>
            525.145.000
          </p>
          <p style={{ fontSize: 14, marginTop: 11 }}>đồng</p>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <b>Gói gia đình</b>
          <div style={{ width: '246', height: '246' }}>
            <DemoPie />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <b>Gói sự kiện</b>
          <div style={{ width: '246', height: '246' }}>
            <DemoPie1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
