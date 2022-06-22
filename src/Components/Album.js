import React from "react";
import Album_styles from "../Components/styles/Album_styles.css";
import { Carousel, Row } from "react-bootstrap";
import img_01 from "../Assets/img_01.jpg";
import img_02 from "../Assets/img_02.jpg";
import img_03 from "../Assets/img_03.jpg";
import img_04 from "../Assets/img_04.jpg";
import img_05 from "../Assets/img_05.jpg";
const Album = () => {
  return (
    <>
    <Row>
      <Carousel id='album'>
        <Carousel.Item>
          <img className="d-block w-100" src={img_01} alt="first slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img_02} alt="first slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img_03} alt="first slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img_04} alt="first slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={img_05} alt="first slide" />
        </Carousel.Item>
      </Carousel>
      </Row>
    </>
  );
};

export default Album;
