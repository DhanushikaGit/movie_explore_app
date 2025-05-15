import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'swiper/css'; // Correct Swiper CSS import
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesConfig from './config/Routes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="*"
                    element={
                        <>
                            <Header />
                            <RoutesConfig />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;