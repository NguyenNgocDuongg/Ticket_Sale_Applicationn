import React, { useState } from 'react';

import { Button, Checkbox, Col, DatePicker, Radio, Row, Space } from 'antd';
import 'antd/dist/antd.css';
import './FilterTicket.css';

const checkOptions = [
  'Tất cả',
  'Cổng 1',
  'Cổng 2',
  'Cổng 3',
  'Cổng 4',
  'Cổng 5',
];

const radioOptions = ['Tất cả', 'Đã sử dụng', 'Chưa sử dụng', 'Hết hạn'];

const defaultCheckedList = ['Tất cả'];
const style = { padding: '8px 0' };
const FilterTicket = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e: any) => {
    console.log('radio checked', e);
    setValue(e.target.value);
  };
  return (
    <div>
      <h2
        style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
      >
        Lọc vé
      </h2>
      <Space style={{ fontWeight: 'bold' }}>
        <div>
          Từ ngày
          <br />
          <DatePicker
            picker="date"
            format="DD/MM/YYYY"
            style={{ borderRadius: 10 }}
          />
        </div>
        <div style={{ marginLeft: 70 }}>
          Đến ngày
          <br />
          <DatePicker
            picker="date"
            format="DD/MM/YYYY"
            style={{ borderRadius: 10 }}
          />
        </div>
      </Space>

      <div style={{ marginTop: 20 }}>
        <b>Tình trạng sử dụng</b>
        <br />

        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>{radioOptions[0]}</Radio>
          <Radio value={2}>{radioOptions[1]}</Radio>
          <Radio value={3}>{radioOptions[2]}</Radio>
        </Radio.Group>
      </div>
      <div style={{ marginTop: 20 }}>
        <b>Cổng Check - in</b>
        <br />
        <Row>
          {checkOptions.map((checkOption) => {
            return (
              <Col className="gutter-row" span={8}>
                <div>
                  <Checkbox>{checkOption}</Checkbox>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="dashed"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            borderColor: '#FF993C',
            border: '1px solid',
            color: '#FF993C',
            fontWeight: 'bold',
            fontSize: 18,
            width: 100,
            marginTop: 20,
          }}
        >
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default FilterTicket;
