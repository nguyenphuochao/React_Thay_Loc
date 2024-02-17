import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import Product from './Product';
import Recruitment from './Recruitment';
import Introduction from './Introduction';
import Service from './Service';
class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* Gom nhóm routes */}
                <Routes>
                    {/* Route cha */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />}></Route>
                        <Route path="contact" element={<Contact />}></Route>
                        <Route path="recruitment" element={<Recruitment />}></Route>
                        <Route path="product" element={<Product />}></Route>
                        <Route path="introduction" element={<Introduction />}></Route>
                        <Route path="service" element={<Service />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Main;