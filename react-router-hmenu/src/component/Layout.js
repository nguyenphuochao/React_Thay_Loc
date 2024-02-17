import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <h1>Reta</h1>
                <nav>
                    <ul className="header">
                        <li>
                            <NavLink to="/">Trang chủ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Liên hệ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/introduction">Giới thiệu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/product">Sản phẩm</NavLink>
                        </li>
                        <li>
                            <NavLink to="/service">Dịch vụ</NavLink>
                        </li>
                        <li>
                            <NavLink to="/recruitment">Tuyển dụng</NavLink>
                        </li>
                    </ul>
                </nav>
                 <Outlet/>
            </div>
        );
    }
}

export default Layout;