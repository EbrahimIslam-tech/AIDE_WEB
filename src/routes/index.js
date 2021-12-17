import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomeScreen from '../screens/Home/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetails/ProductDetailsScreen';

const RoutesContainer = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeScreen/>} />
            <Route path='productDetails' element={<ProductDetailsScreen/>} />
        </Routes>
    )
}

export default RoutesContainer;