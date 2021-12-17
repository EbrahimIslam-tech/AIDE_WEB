import React from 'react';
import { CustomTooltip } from '../../customs';
import PriceDetails from '../../components/PriceDetails/PriceDetails';
import './ProductDetailsScreen.css';

const ProductDetailsScreen = () => {
    const productGenres = [
        {
            genre: 'Product Of',
            genreName: 'Bangladesh Edible Oil Limited (BEOL)'
        },
        {
            genre: 'Brand',
            genreName: 'Rupchanda'
        },
        {
            genre: 'Place of Origin',
            genreName: 'Bangladesh'
        },
        {
            genre: 'Manufactured In',
            genreName: 'Bangladesh'
        },
        {
            genre: 'Type',
            genreName: 'Soyabean Oil'
        },
        {
            genre: 'Model',
            genreName: 'Fortified'
        },
        {
            genre: 'Weight',
            genreName: '1000 mililitres'
        },
        {
            genre: 'Item From',
            genreName: 'Liquid'
        },
        {
            genre: 'Maximum Shelf Life',
            genreName: '18 months'
        },
        {
            genre: 'Packing or Container Type',
            genreName: 'Screw Cap - PET Bottle'
        },
        {
            genre: 'Recommended Uses For',
            genreName: 'Cooking, Frying, Baking'
        },
        {
            genre: 'Available in',
            genreName: '8 Liter, 5 liter, 3 liter, 2 liter, 1 liter & 1 Liter (Poly)'
        },
        {
            genre: 'Flavour',
            genreName: 'Orange, Apple, Strawberry'
        }
    ]
    return (
        <div className='productDetailsScreen'>
            <div className='productDetailsScreen__imageContainer'>
                <div className='productDetailsScreen__previewImages'>
                    <img 
                        src='../../../images/Rectangle 43.jpg' 
                        alt='Soyabean Oil Preview'
                        className='productDetailsScreen__previewImage'
                    />
                    <img 
                        src='../../../images/Rectangle 43.jpg' 
                        alt='Soyabean Oil Preview'
                        className='productDetailsScreen__previewImage'
                    />
                    <img 
                        src='../../../images/Rectangle 43.jpg' 
                        alt='Soyabean Oil Preview'
                        className='productDetailsScreen__previewImage'
                    />
                    <img 
                        src='../../../images/Rectangle 43.jpg' 
                        alt='Soyabean Oil Preview'
                        className='productDetailsScreen__previewImage'
                    />
                    <img 
                        src='../../../images/Rectangle 43.jpg' 
                        alt='Soyabean Oil Preview'
                        className='productDetailsScreen__previewImage'
                    />
                </div>
                <div className='productDeatilsScreen__image'>
                    <img src='../../../images/Rupchanda 5 Litre.jpg' />
                </div>
            </div>
            <div className='productDetailsScreen__productInfoContainer'>
                <p className='productDetailsScreen__productTitle'>
                    Rupchanda Fortified Soyabean Oil - 1 Litre
                </p>
                <p className='productDetailsScreen__productInStock'>
                    In Stock
                </p>
                {
                    [...Array(5)].map(star => (
                        <img 
                            src='../../../icons/Star.png' 
                            className='productDetailsScreen__productRating'
                        />
                    ))
                }
                <div className='productDetailsScreen__productDealings'>
                    <p className='productDetailsScreen__productDealingsTitle'>
                        Deal of the Day
                    </p>
                    <p className='productDetailsScreen__productDealingsSpecialDeal'>
                        Special price ends in
                    </p>
                    <p className='productDetailsScreen__productDealingsDeadline'>
                        23:46:57
                    </p>
                </div>
                <div className='productDetailsScreen__priceContainer'>
                    <div className='productDetailsScreen__productPricing'>
                        <p className='productDetailsScreen__basePrice'>
                            ৳ 720.00
                        </p>
                        <p className='productDetailsScreen__expirePrice'>
                            ৳ 738.00
                        </p>
                        <p className='productDetailsScreen__offPercentage'>
                            18% off
                        </p>
                    </div>
                    <CustomTooltip title={<PriceDetails/>} arrow>
                        <img src='../../../icons/vector.png' />
                    </CustomTooltip>
                </div>
                <div className='productDetailsScreen__availableOffers'>
                    <p className='productDetailsScreen__availableOffersTitle'>
                        Available Offers
                    </p>
                    <div className='productDetailsScreen__Offer'>
                        <p className='productDetailsScreen__OfferTitle'>
                            Bank Offer
                        </p>
                        <p className='productDetailsScreen__creditCardOffer'>
                            5% Unlimited Cashback on Eastern Bank Credit Card
                        </p>
                        <p className='productDetailsScreen__tC'>
                            T&C
                        </p>
                    </div>
                    <div className='productDetailsScreen__Offer'>
                        <p className='productDetailsScreen__OfferTitle'>
                            bkash Offer
                        </p>
                        <p className='productDetailsScreen__creditCardOffer'>
                            5% Unlimited Cashback on bkash payment
                        </p>
                        <p className='productDetailsScreen__tC'>
                            T&C
                        </p>
                    </div>
                    <div className='productDetailsScreen__Offer'>
                        <p className='productDetailsScreen__OfferTitle'>
                            Offer by aide
                        </p>
                        <p className='productDetailsScreen__creditCardOffer'>
                            Deal of the day 5% discount only for toda
                        </p>
                        <p className='productDetailsScreen__tC'>
                            T&C
                        </p>
                    </div>
                    <p className='productDetailsScreen__moreOffer'>
                        2 more offer
                    </p>
                    <div className='productDetailsScreen__aboutProductDetails'>
                        <p className='productDetailsScreen__aboutTitle'>
                            About This Item
                        </p>
                        {
                            productGenres.map(productGenre => (
                                <div className='productDetailsScreen__aboutProductHeading'>
                                    <p className='productDetailsScreen__productGenre'>
                                        {productGenre.genre}:
                                    </p>
                                    <p className='productDetailsScreen__productGenreName'>
                                        {productGenre.genreName}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='productDetailsScreen__deliveryDetails'>
                <div className='productDetailsScreen__aideMembership'>
                    <div className='productDetailsScreen__aideLogoImages'>
                        <img 
                            src='../../../icons/AIDE LOGO.png' 
                            className='productDetailsScreen__aideLogo'
                        />
                        <img 
                            src='../../../icons/aide+.png'
                            className='productDetailsScreen__aide+'
                        />
                    </div>
                    <div className='productDetailsScreen__aideMembershipForm'>
                        <p className='productDetailsScreen__aideTitle'>
                            aide+
                        </p>
                        <p className='productDetailsScreen__aideMembershipTitle'>
                            membership helps you save <br/> more time & money.
                        </p>
                    </div>
                </div>
                <div className='productDetailsScreen__officeLocation'>
                    <img 
                        src='../../../icons/locationIcon.png' 
                    />
                    <p className='productDetailsScreen__officeAddress'>
                        Deliver to: Flat#B2, House#20/A "Altamira"
                        building,<br/>
                        Jamtola-bou bazar, Bindu Britto Goli,
                        East <br/>
                        Shewrapara, Dhaka.
                        <p className='productDetailsScreen__officeMobile'>Mobile: 01777753204 </p>
                    </p>
                </div>
                <div className='productDetailsScreen__cartButtonGroup'>
                    <button
                        type='button'
                        className='productDetailsScreen__basketOutline'
                    >
                        Buy Now
                    </button>
                    <button
                        type='button'
                        className='productDetailsScreen__basketOutline'
                    >
                        Buy Now
                    </button>
                </div>
                <div className='productDetailsScreen__cartButtonGroup'>
                    <button
                        type='button'
                        className='productDetailsScreen__basketOutline'
                    >
                        Buy Now
                    </button>
                    <button
                        type='button'
                        className='productDetailsScreen__basketOutline'
                    >
                        Buy Now
                    </button>
                </div>
                <div className='productDetailsScreen__regUser'>
                    <p className='productDetailsScreen__regUserTitle'>
                        For registered user, No order minimu 
                    </p>
                    <a href='?/'>
                        Sign Up
                    </a>
                </div>
                <div className='productDetailsScreen__homeDelivery'>
                    <p className='productDetailsScreen__deliveryTitle'>
                        Home Delivery <br/>
                        <p className='productDetailsScreen__deliveryTime'>
                            30 minutes
                        </p>
                    </p>
                    <p className='productDetailsScreen__homeDeliveryCharge'>
                        BDT 10
                    </p>
                </div>
                <div className='productDetailsScreen__freeDelivery'>
                    <p className='productDetailsScreen__deliveryTitle'>
                        Free Delivery <br/>
                        <p className='productDetailsScreen__deliveryTime'>
                            Delivery time 48-72 hours
                        </p>
                    </p>
                </div>
                <p 
                    className='productDetailsScreen__deliveryTitle'
                    style={{ marginTop: '10px' }}
                >
                    Cash on Delivery Available
                </p>
                <p 
                    className='productDetailsScreen__deliveryTitle'
                    style={{ marginTop: '10px' }}
                >
                    Pick up from nearest aide store Available
                </p>
                <div className='productDetailsScreen__deliveryOptions'>
                    <div style={{ 
                        display: 'flex',
                        alignItems: 'center' 
                    }}>
                        <img 
                            src='../../../icons/checkout.png'
                            alt='Delivery Icon'
                        />
                        <p className='productDetailsScreen__deliveryOptionsTitle'>
                            See all delivery options
                        </p>
                    </div>
                    <img 
                        src='../../../icons/Vector 19.png'
                        style={{ paddingRight: '5px' }}
                    />
                </div>
                <div className='productDetailsScreen__homeDelivery'>
                    <p className='productDetailsScreen__deliveryTitle'>
                        3 Days return available 
                        <br/>
                        <p className='productDetailsScreen__deliveryTime'>
                            Change of mind is not acceptable
                        </p>
                    </p>
                    <a 
                        href='?/'
                    >
                        Return Policy
                    </a>
                </div>
                <div 
                    className='productDetailsScreen__homeDelivery'
                    style={{ paddingBottom: '10px' }}
                >
                    <p className='productDetailsScreen__deliveryTitle'>
                        Warrenty - Not Available
                    </p>
                    <a href='?/'>
                        Warranty Policy
                    </a>
                </div>
                <div className='productDetailsScreen__secureTransaction'>
                    <img
                        src='../../../icons/privacyIcon.png'
                        style={{ paddingRight: '10px' }}
                    />
                    <p className='productDetailsScreen__secureTransactionTitle'>
                        Secure Transaction
                    </p>
                </div>
                <div className='productDetailsScreen__soldDelivered'>
                    <img 
                        src='../../../icons/AIDE LOGO.png'
                        style={{ width: '23px', height: '22px' }}
                    />
                    <p className='productDetailsScreen__soldDeliveredTitle'>
                        Sold and Delivered by aide
                    </p>
                </div>
                <div style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: '10px',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <img
                            src='../../../icons/giftOutline.png'
                        />
                        <p className='productDetailsScreen__giftOutlineTitle'>
                            This Item is gift eligible
                        </p>
                    </div>
                    <a href='?/'>
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsScreen;