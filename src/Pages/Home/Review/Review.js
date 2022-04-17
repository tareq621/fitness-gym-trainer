import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';

const Review = (props) => {
    const { name, description } = props.review;
    return (
        <div className='container text-center'>
            <Card style={{ width: '18rem' }} className="border-0">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} style={{ color: '#F4BE2C' }}></FontAwesomeIcon>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Review;