import React from 'react';
import Album_styles from "../Components/styles/Services_styles.css";
import { Carousel, Row } from 'react-bootstrap';
import img_01 from '../Assets/img_01.jpg';
import img_02 from '../Assets/img_02.jpg';
import img_03 from '../Assets/img_03.jpg';
import img_04 from '../Assets/img_04.jpg';
import img_05 from '../Assets/img_05.jpg';
const Album = () => {
    return (
        <>
  
        <Carousel>
           
        <Carousel.Item>
          <img
        
            className="d-block w-100 h-50"
            src={img_01}
           alt='first slide'
          />
        </Carousel.Item>
        
  
      </Carousel>
   
    
        </>
    );
};

export default Album;
