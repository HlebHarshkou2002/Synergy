import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music";
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

import { NavLink } from "react-router-dom";
import React, { useState } from 'react';

import { 
  SettingOutlined, MessageOutlined, 
  UserOutlined, BarsOutlined, 
  CustomerServiceOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Switch } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem(<NavLink to="/Profile" style={{ textDecoration: "none"}}>Profile</NavLink>, '1', <UserOutlined />),
  getItem(<NavLink to="/Dialogs" style={{ textDecoration: "none"}}>Messages</NavLink>, '2', <MessageOutlined />),
  getItem(<NavLink to="/News" style={{ textDecoration: "none"}}>News</NavLink>, '3', <BarsOutlined />),
  getItem(<NavLink to="/Music" style={{ textDecoration: "none"}}>Music</NavLink>, '4', <CustomerServiceOutlined />),
  getItem(<NavLink to="/Users" style={{ textDecoration: "none"}}>Users</NavLink>, '5', <UsergroupAddOutlined />),
  getItem(<NavLink to="/Settings" style={{ textDecoration: "none"}}>Settings</NavLink>, '6', <SettingOutlined />),
];


const App = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState('dark');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <BrowserRouter>
    <Layout style={{ minHeight: '100vh',}}>
      <Sider collapsible collapsed={collapsed} theme={theme} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
        <Menu theme={theme} defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "white",}}>
          <HeaderContainer /> 
        </Header>
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb style={{margin: '16px 0',}}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: "white",
            }}
          >
            <div className='app-wrapper-content'>
             <Routes>
                 <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                 <Route path="/profile/*" element={<ProfileContainer store={props.store}/>}/>
                 <Route path="/news" element={<News/>}/>
                 <Route path="/music" element={<Music/>}/>
                 <Route path="/users" element={<UsersContainer/>}/>
                 <Route path="/login" element={<LoginPage />}/>
             </Routes>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
    </BrowserRouter>
  );
};

export default App;



    

