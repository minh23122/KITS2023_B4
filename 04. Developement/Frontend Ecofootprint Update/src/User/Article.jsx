import React from 'react';
import { Link } from 'react-router-dom';
import {
  UserOutlined,
  RadarChartOutlined,
  BarChartOutlined,
  SettingOutlined,
  FileWordOutlined,
  LogoutOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme, Image } from 'antd';
const { Header, Sider } = Layout;
import logo from '../Home/assets/logo.png';
import './App.css';
import CreatePostPage from './CreatePostPage';
const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const iconList = [
    { icon: UserOutlined, label: 'My Profile', path: '/user' },
    { icon: RadarChartOutlined, label: 'My Activity', path: '/user/activity' },
    { icon: CalendarOutlined, label: 'My Diary', path: '/user/diary' },
    { icon: BarChartOutlined, label: 'My Chart', path: '/user/chart' },
    { icon: SettingOutlined, label: 'Setting', path: '/user/setting' },
    { icon: FileWordOutlined, label: 'Article', path: '/user/article' },
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
          <Menu theme="light" mode="inline" defaultSelectedKeys={['6']}>
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
          />
          <div className="Content2">
            <div className="chart-container">
              <CreatePostPage />
            </div>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
