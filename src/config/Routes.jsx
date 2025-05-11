import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog'; // Ensure the case matches the file name
import Detail from '../pages/Detail'; // Ensure the case matches the file name

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/:category/search/:keyword" element={<Catalog />} />
            <Route path="/:category/:id" element={<Detail />} />
            <Route path="/:category" element={<Catalog />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default AppRoutes;