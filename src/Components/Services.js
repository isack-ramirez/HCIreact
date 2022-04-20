import React from "react";
import Services_styles from "../Components/styles/Services_styles.css";
import Card from 'react-bootstrap/Card'
const Services = () => {
  return (
    <>
      <div className="wrapper">
        <h1 className="heading">What can we do for you?</h1>
      </div>

      <div className="wrapper2">
        <Card className='card mb-2' >
          <Card.Body>
              <Card.Title>Title</Card.Title>
              Here is some holder text to describe a service

          </Card.Body>
        </Card>
        <Card className='card mb-2' >
          <Card.Body>
              <Card.Title>Title</Card.Title>
              Here is some holder text to describe a service

          </Card.Body>
        </Card>
        <Card className='card mb-2' >
          <Card.Body>
              <Card.Title>Title</Card.Title>
              Here is some holder text to describe a service

          </Card.Body>
        </Card>        
      </div>
    </>
  );
};

export default Services;
