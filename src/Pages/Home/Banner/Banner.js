import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/treadmill.jpg'
import banner2 from '../../../images/banner/yoga.jpg'
import banner3 from '../../../images/banner/hiit.jpg'
import './Banner.css'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='border-2'>
            <div className='title'>
                <h1 className='title-name'>Personal Gym Trainer</h1>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>TREADMILL WORKOUT FOR RUNNERS</h1>
                        <p className='text-light'>Everything to do with the treadmill. From exercising on them for beginners.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>YOGA FOR EVERYONE</h1>
                        <p className='text-light'>Yoga is a mind and body practice. Various styles of yoga combine physical postures, breathing techniques.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>HIIT WORKOUT</h1>
                        <p className='text-light'>HIIT stands for high-intensity interval training and it's one of the most popular forms of exercise.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;