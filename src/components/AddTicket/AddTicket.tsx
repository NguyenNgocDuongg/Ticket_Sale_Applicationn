import { Input, DatePicker, TimePicker, Checkbox, Select } from 'antd';
import moment from 'moment';
import CalendarOutlined from '@ant-design/icons';
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const { Option } = Select;
const AddTicket = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', fontWeight: 'bold' }}>Thêm gói vé</h2>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <div style={{ fontWeight: 500, opacity: 0.8 }}>Tên gói Vé</div>
        <div style={{ color: 'red' }}>*</div>
      </div>
      <Input
        placeholder="Nhập tên gói vé"
        style={{ width: 300, borderRadius: 10, marginTop: 5 }}
      />
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 20 }}>
        <div style={{ marginRight: 30 }}>
          <div style={{ fontWeight: 500, opacity: 0.8 }}>Ngày áp dụng</div>
          <div>
            <DatePicker
              defaultValue={moment('01/01/2015', dateFormatList[1])}
              format={dateFormatList}
              style={{ borderRadius: 10, width: 120 }}
            />
            <TimePicker
              defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
              style={{ borderRadius: 10, width: 120, marginLeft: 5 }}
            />
          </div>
        </div>
        <div>
          <div style={{ fontWeight: 500, opacity: 0.8 }}>Ngày hết hạn</div>
          <div>
            <DatePicker
              defaultValue={moment('01/01/2015', dateFormatList[1])}
              format={dateFormatList}
              style={{ borderRadius: 10, width: 120 }}
            />
            <TimePicker
              defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
              style={{ borderRadius: 10, width: 120, marginLeft: 5 }}
            />
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={{ fontWeight: 500, opacity: 0.8 }}>Giá vé áp dụng</div>
        <div style={{ marginBottom: 10 }}>
          <Checkbox>
            Vé lẻ (vnđ/vé) với giá{' '}
            <Input
              bordered={false}
              placeholder="Giá vé"
              style={{
                borderRadius: 10,
                backgroundColor: '#F1F4F8',
                width: 100,
              }}
            />
            / vé
          </Checkbox>
        </div>
        <div>
          <Checkbox>
            Combo vé với giá{' '}
            <Input
              bordered={false}
              placeholder="Giá vé"
              style={{
                borderRadius: 10,
                backgroundColor: '#F1F4F8',
                width: 100,
              }}
            />
            /{' '}
            <Input
              bordered={false}
              placeholder="Giá vé"
              style={{
                borderRadius: 10,
                backgroundColor: '#F1F4F8',
                width: 70,
              }}
            />
            vé
          </Checkbox>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={{ fontWeight: 500, opacity: 0.8 }}>Tình trạng</div>
        <Select
          defaultValue="Đang áp dụng"
          style={{ width: 150, borderRadius: 10 }}
          allowClear
        >
          <Option value="Đang áp dụng">Đang áp dụng</Option>
        </Select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
        <h6 style={{ color: 'red', marginRight: 5, fontSize: 12 }}>*</h6>
        <h6 style={{ opacity: 0.4 }}>là thông tin bắt buộc</h6>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button
          style={{
            borderRadius: 5,
            color: '#ff993c',
            fontWeight: 'bold',

            backgroundColor: '#fff',
            border: '1px solid #ff993c',
            width: 120,
            height: 40,
            cursor: 'pointer',
          }}
        >
          Hủy
        </button>
        <button
          style={{
            borderRadius: 5,
            color: '#fff',
            fontWeight: 'bold',
            marginLeft: 20,
            backgroundColor: '#ff993c',
            border: '1px solid #ff993c',
            width: 120,
            height: 40,
            cursor: 'pointer',
          }}
        >
          Lưu
        </button>
      </div>
    </div>
  );
};

export default AddTicket;
