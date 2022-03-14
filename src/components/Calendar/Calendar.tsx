import React from 'react';
import 'antd/dist/antd.css';
import { Calendar, Col, Radio, Typography } from 'antd';
import 'moment/locale/vi';
import locale from 'antd/es/date-picker/locale/vi_VN';

const Calender = () => {
  const [value, setValue] = React.useState('week');

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Calendar
        fullscreen={false}
        locale={locale}
        headerRender={() => {
          return (
            <div style={{ padding: 8 }}>
              <Typography.Title level={4}></Typography.Title>
              <Col>
                <Radio.Group size="large" value={value} onChange={onChange}>
                  <Radio value="month">Theo ngày</Radio>
                  <Radio value="week">Theo tuần</Radio>
                </Radio.Group>
              </Col>
            </div>
          );
        }}
      />
    </div>
  );
};

export default Calendar;
