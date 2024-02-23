'use client';

import React from 'react'
import Slider from 'react-slick';
import Slide from './Slide';
const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };

    const slideData = [
        {
            id: 0,
            img : '/banner-1.jpeg',
            title : 'Trending Item',
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20"
        },
        {
            id: 1,
            img : '/banner-2.jpeg',
            title : 'Trending Accessories',
            mainTitle: "MODERN SUNGLASSES",
            price: "$15"
        },
        {
            id: 2,
            img : '/banner-3.jpeg',
            title : 'Sale Offer',
            mainTitle: "NEW FASHION SUMMER SALE",
            price: "$30"
        },
    ];
  return (
    <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item) => (
                <Slide 
                key={item.id} img={item.img} title={item.title} mainTitle={item.mainTitle} price={item.price} />
            ))}
        </Slider>
    </div>
  )
}

export default Hero
