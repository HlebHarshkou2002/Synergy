import React from "react";
import { NavLink } from "react-router-dom";
import MainLogo from "../../assets/images/logos/main-logo.png";
import s from "./Header.module.css";
import { Navbar, Nav } from "react-bootstrap";

import { Button, Space } from 'antd';
import { LoginOutlined, LogoutOutlined, HomeOutlined} from '@ant-design/icons';

const Header = (props) => {
  return (
    <header className={s.header}>
        <div className={s.main__logo}>
          <img src={MainLogo} alt="" />
        </div> 

        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">

          <Nav>

          <Space wrap className={s.buttons__wrapper}>       
            
              {props.isFetching ? (
                <div className={s.btns}>
                 <Button type="primary" loading className={s.btn}>Loading</Button>
                </div>
              ) : (
                <div className={s.register__item}>
                   
                  {props.isAuth ? (
                    <div className={s.btns}>
                      <Button type="primary" className={s.btn}>
                      <NavLink to={`/profile/` + props.id} style={{color: "white"}}  className={s.btn__link}>
                        <span>{props.login} </span>
                      </NavLink>
                      <HomeOutlined />
                      </Button>

                      <Button onClick={props.logout} type="primary" className={s.btn}>
                        Sign Out
                        <LogoutOutlined />
                      </Button>
                    </div>
                  ) : (
                    <div className={s.btn}>
                      <Button type="primary" className={s.btn}>
                        <NavLink to={"/login"} style={{color: "white"}} className={s.btn__link}>
                          <span>Login </span>
                        </NavLink>
                        <LoginOutlined />
                      </Button>
                    </div>
                  )}
                  
                </div>
              )}

          </Space>
          </Nav>
          </Navbar.Collapse>

        </Navbar>
    </header>
  );
};

export default Header;
