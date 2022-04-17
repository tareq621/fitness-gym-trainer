import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='text-center services-title fw-bolder my-4'>Reviews</h1>
                <div className='reviews-container'>
                    {
                        reviews.map(review => <Review
                            key={review.id}
                            review={review}
                        ></Review>
                        )}
                </div>
            </div>

        </div>
    );
};

export default Reviews;