import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, img, price, description } = props.service;
    return (
        <div>
            <Card className="border-0 text-center service-container">
                <Card.Img variant="top" className='p-2' src={img} />
                <Card.Body>
                    <Card.Title>
                        <h3>{name}</h3>
                    </Card.Title>
                    <p style={{ color: 'orange' }}>${price}</p>
                    <Card.Text style={{ color: 'gray' }}>
                        {description}
                    </Card.Text>
                    <Nav.Link as={Link} to="/checkout" className='text-decoration-none fw-bold text-primary '>Book Now
                        <FontAwesomeIcon icon={faArrowRight} className="px-1"></FontAwesomeIcon>
                    </Nav.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;