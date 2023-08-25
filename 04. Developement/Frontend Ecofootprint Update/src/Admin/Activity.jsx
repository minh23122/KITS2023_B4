import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import {
  DashboardOutlined,
  HeartOutlined,
  FileWordOutlined,
  IdcardOutlined,
  PieChartOutlined,
  LogoutOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Image, theme, Table, Button, Modal, Form,Input, Space } from 'antd';
const { Sider, Header } = Layout;
const { Search } = Input;
import logo from '../Home/assets/logo.png';
import axios from 'axios';
const App = () => {
  const [listActivity, setListActivity]=useState([]);
  const [currentTime, setCurrentTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'));
  const getListUser = async () => {
    const response = await axios({
      method: "GET",
      url: "http://localhost:8080/api/activity/all",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setListActivity(response.data);
  };
  getListUser();
   // Sử dụng useEffect để cập nhật thời gian mỗi giây
   useEffect(() => {
     const interval = setInterval(() => {
       setCurrentTime(moment().format('YYYY-MM-DD HH:mm:ss'));
     }, 1000);
 
     return () => {
       clearInterval(interval);
     };
   }, []);
    const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();

  const columns = [
    {
      title: 'Activity',
      dataIndex: 'name',
    },
    {
        title: 'Emission',
        dataIndex: 'emission',
      },
      {
        title: 'Unit',
        dataIndex: 'unit',
      },
      {
        title: "Category",
        dataIndex: "category",
        key: "category",
        render: (category)=>category.name,
      },
    {
      title: 'Actions',
      render: (text, record) => (
        <Space>
          <Button type="primary" onClick={() => showEditModal(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    { key: '1',activity:'Fish', category: 'Food', CO2e:'25'},
    { key: '2', activity:'PLASTIC',category: 'Trash',CO2e:'12' },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const showEditModal = (record) => {
    setEditingUser(record);
    form.setFieldsValue({
      username: record.username,
      email: record.email,
    });
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log('Received values of form: ', values);
      if (editingUser) {
        // Perform edit logic here
        console.log('Editing activity:', editingActivity);
      } else {
        // Perform add logic here
        console.log('Adding activity:', values);
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingUser(null);
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingUser(null);
  };

  const handleDelete = (record) => {
    // Handle delete logic here
    console.log('Delete activity:', record);
  };
    //Bắt đầu form mẫu
    const {
        token: { colorBgContainer },
      } = theme.useToken();
  const iconList = [
    { icon: DashboardOutlined, label: 'Dashboard', path: '/admin' },
    { icon: IdcardOutlined, label: 'Account', path: '/admin/account' },
    { icon: AppstoreOutlined, label: 'Category', path: '/admin/category' },
    { icon: HeartOutlined, label: 'Activity', path: '/admin/activity' },
    { icon: PieChartOutlined, label: 'Analysis', path: '/admin/analysis' },
    { icon: FileWordOutlined, label: 'Article', path: '/admin/article' },
    ];

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Link to="/">
            <Image width="90%" preview={false} src={logo} />
          </Link>
          <div className="demo-logo-vertical" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
            {iconList.map((item, index) => (
              <Menu.Item key={String(index + 1)} icon={React.createElement(item.icon)}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
                style={{
                padding: 0,
                background: colorBgContainer,
                }}
            >
              <div style={{ textAlign: 'right', marginRight: '20px', fontSize: '18px' }}>
                {currentTime}
              </div>
          </Header>
            <div className='Content2'>
            <div className='chart-container'>
            <Button type="primary" onClick={showModal} style={{marginTop:'20px', marginBottom:'10px',marginRight:'20%'}}>
                Add Activity
            </Button>
            <Search placeholder="Search" style={{ width: 200 , marginTop:'20px', marginBottom:'10px' }} />
            <Table
                columns={columns}
                dataSource={listActivity}
            />

            <Modal
                title={editingUser ? 'Edit Activity' : 'Add Activity'}
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                <Form.Item
                    name="activity"
                    label="Activity"
                    rules={[{ required: true, message: 'Please enter a activity' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category"
                    rules={[{ required: true, message: 'Please enter a category' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="CO2e"
                    label="CO2e"
                    rules={[{ required: true, message: 'Please enter CO2e' }]}
                >
                    <Input />
                </Form.Item>
                </Form>
            </Modal>
            </div>
            </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
