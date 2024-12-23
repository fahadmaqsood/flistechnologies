import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

import logo1 from '../../imgs/guru.png'
import logo2 from '../../imgs/fiver.png'
import logo3 from '../../imgs/peopleperhour1.png'
import logo4 from '../../imgs/simplyhired.png'
import logo5 from '../../imgs/Upwork.png'
import logo6 from '../../imgs/freelancer.png'
import proj1 from '../../imgs/Rectangle 40.png'
import proj2 from '../../imgs/Rectangle 41.png'
import proj3 from '../../imgs/Rectangle 42.png'
import proj4 from '../../imgs/Rectangle 43.png'
import proj5 from '../../imgs/Rectangle 44.png'
import proj6 from '../../imgs/Rectangle 45.png'
import proj7 from '../../imgs/Rectangle 46.png'
import proj8 from '../../imgs/Rectangle 47.png'
import proj9 from '../../imgs/Rectangle 48.png'
import '../../css/Project.css'

import p1 from '../../imgs/Rectangle 45.png'
import p2 from '../../imgs/Rectangle 46.png'
import p3 from '../../imgs/large.png'





import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';



const Projects = () => {
  return (
    <Container className="project-container">
      <div className="half-circle"></div>
      <Row className="mb-4 d-flex logoes">
        <Swiper
          slidesPerView={6}
          initialSlide={2.7}
          centeredSlides={true}
          spaceBetween={10}
          className={"mySwiper"}
        >
          {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, idx) => (
            <SwiperSlide>
              <Col
                key={idx}
                sm={2}
                className="d-flex justify-content-center logo-container align-items-center"
              >
                <img
                  src={logo}
                  alt={`Logo ${idx + 1}`}
                  className="img-fluid logos"
                />
              </Col>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <h3 className="project-heading">Projects</h3>
        </Col>
      </Row>
      {/* Responsive Layout */}
      <div className="d-sm-none">
        <Row className="d-flex row-img">
          <Col xs={12} sm={4} className="d-flex flex-column">
            <Row className="d-flex mb-3">
              <Col className="d-flex">
                <img
                  src={p1}
                  alt="Responsive Project 1"
                  className="img-fluid rounded img-fixed"
                  style={{ width: "109px", height: "106px" }}
                />
              </Col>
            </Row>
            <Row className="d-flex mb-3">
              <Col className="d-flex">
                <img
                  src={p2}
                  alt="Responsive Project 2"
                  className="img-fluid rounded img-fixed"
                  style={{ width: "109px", height: "106px" }}
                />
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={8} className="d-flex p-large">
            <img
              src={p3}
              alt="Responsive Project Large"
              className="img-fluid img-fixed"
              style={{ width: "120px", height: "228px" }}
            />
          </Col>
        </Row>
      </div>
      {/* Desktop Layout */}
      <div className="d-none d-sm-block px-5">
        <Row className="align-items-stretch mb-4 project-sec">
          <Col sm={4} className="d-flex flex-column">
            <Row>
              {[proj1, proj2, proj3, proj4].map((proj, idx) => (
                <Col key={idx} sm={6} className="d-flex p-1">
                  <img
                    src={proj}
                    alt={`Project ${idx + 1}`}
                    className="img-fluid rounded img-fixed"
                  />
                </Col>
              ))}
            </Row>
          </Col>
          <Col
            sm={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img src={proj5} alt="Project 5" className="img-fluid img-fixed" />
          </Col>
          <Col sm={4} className="d-flex flex-column">
            <Row>
              {[proj6, proj7, proj8, proj9].map((proj, idx) => (
                <Col key={idx} sm={6} className="d-flex p-1">
                  <img
                    src={proj}
                    alt={`Project ${idx + 6}`}
                    className="img-fluid rounded img-fixed"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <Row className="mb-4">
        <Col className="d-flex justify-content-center btn-pj">
          <Button variant="primary">View More</Button>
        </Col>
      </Row>
    </Container>
  );
};


export default Projects
