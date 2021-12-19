import React from 'react';
import './PriceDetails.css';

const PriceDetails = () => {
    return (
        <div className='priceDetails'>
            <p className='priceDetails__title'>
                Price Details
            </p>
            <div className='priceDetails__expirePriceDetails'>
                <div className='priceDetails__expirePriceTitle'>
                    <p>Maximum Retail Price</p>
                    <small>(Inc. of all taxes)</small>
                </div>
                <p className='priceDetails__expirePrice'>
                    ৳ 738.00
                </p>
            </div>
            <div className='priceDetails__sellingPriceDetails'>
                <p className='priceDetails__sellingPriceTitle'>
                    Selling Price
                </p>
                <p className='priceDetails__sellingPrice'>
                    ৳ 720.00
                </p>
            </div>
            <p className='priceDetails__savings'>
                Overall you saved ৳ {738 - 720} on this product
            </p>
        </div>
    )
}
export default PriceDetails;