import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from "./Header.module.css";
import { Navbar, Nav } from "react-bootstrap";

import Navibar from "./Nav/Nav";

import { Button, Space } from 'antd';
import { LoginOutlined, LogoutOutlined, HomeOutlined} from '@ant-design/icons';

const Header = (props) => {
  return (
    <header className={s.header}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Synergy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <NavLink to="/Profile">Profile</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>Messages</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/News" className = { navData => navData.isActive ? s.active : s.item }>News</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Music" className = { navData => navData.isActive ? s.active : s.item }>Music</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Users" className = { navData => navData.isActive ? s.active : s.item }>Users</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/Settings" className = { navData => navData.isActive ? s.active : s.item }>Settings</NavLink>
            </Nav.Link>
            {/* <Navibar /> */}
          </Nav>
          <Nav className="mr-auto">
            
          <Space wrap>       
            
              {props.isFetching ? (
                <Button type="primary" loading>Loading</Button>
                // <div className={s.preloader__wrapper}>
                //   <Preloader />
                // </div>
              ) : (
                <div className={s.register__item}>
                  <Button type="primary" > 
                  {props.isAuth ? (
                    <div className={s.btn}>
                      <NavLink to={`/profile/` + props.id} style={{color: "white"}}  className={s.btn__link}>
                        <span>{props.login}</span>
                      </NavLink>
                     <HomeOutlined />
                    </div>
                  ) : (
                    <div className={s.btn}>
                      <NavLink to={"/login"}>
                       <span>Login</span>
                      </NavLink>
                      <LoginOutlined />
                    </div>
                  )}
                  </Button>
                </div>
              )}
            <Button type="primary" className={s.btn}>
              Sign Out
              <LogoutOutlined />
            </Button>
            </Space>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
