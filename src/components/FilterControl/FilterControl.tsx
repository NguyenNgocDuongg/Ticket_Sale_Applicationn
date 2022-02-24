import { Input, Button, Radio, Space, DatePicker } from 'antd';
import moment from 'moment';
import { SearchOutlined } from '@ant-design/icons';
import React from 'react';
const suffix = <SearchOutlined style={{ fontSize: 24 }} />;
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const FilterControl = () => {
  const [value, setValue] = React.useState(1);
  const onChange = (e: any) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div style={{ backgroundColor: '#fff' }}>
      <h2 style={{ fontWeight: 'bold' }}>Lọc vé</h2>
      <div>
        <b>Tình trạng đối soát</b>
        <Radio.Group
          onChange={onChange}
          value={value}
          style={{ marginLeft: 20 }}
        >
          <Space direction="vertical">
            <Radio value={1}>Tất cả</Radio>
            <Radio value={2}>Đã đối soát</Radio>
            <Radio value={3}>Chưa đối soát</Radio>
          </Space>
        </Radio.Group>
      </div>
      <div style={{ display: 'flex', marginTop: 10 }}>
        <b>Loại vé</b>
        <p style={{ marginLeft: 100 }}>Vé cổng</p>
      </div>
      <div style={{ marginTop: 10 }}>
        <b>Từ ngày</b>
        <DatePicker
          defaultValue={moment('01/05/2021', dateFormatList[0])}
          format={dateFormatList}
          disabled
          style={{ marginLeft: 90, borderRadius: 10 }}
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <b>Đến ngày</b>
        <DatePicker
          defaultValue={moment('01/05/2021', dateFormatList[0])}
          format={dateFormatList}
          style={{ marginLeft: 80, borderRadius: 10 }}
        />
      </div>
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
          width: 120,
          height: 40,
          marginTop: 20,
        }}
      >
        Lọc
      </Button>
    </div>
  );
};

export default FilterControl;
