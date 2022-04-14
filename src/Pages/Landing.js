import { getAllByPlaceholderText } from "@testing-library/react";
import React from "react";
import { Container } from "react-bootstrap";
import image from '../Assets/TEST.jpg';


const Landing = () => {
  return (
    <>
        <div
        style={{
        minHeight:"100vh",
        minWidth:'100vw',
        
      
          backgroundImage:
          
            `url(${image})`,
            backgroundSize: 'cover'
           , 
        }}
        className="page-header"
        data-parallax={true}
      >
      <Container>
       
      </Container>
      </div>
    </>
  );
};

export default Landing;
