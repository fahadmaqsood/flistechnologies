import React, { useState } from 'react'
import { Container, Card } from 'react-bootstrap'
import '../../css/Services.css'

// Importing images
import mobileAppImage from '../../imgs/Mobile_app_perspective_matte.png'
import webDesignImage from '../../imgs/Code_perspective_matte.png'
import aiSolutionImage from '../../imgs/Dashboard_perspective_matte.png'
import softwareTestingImage from '../../imgs/Developer.png'

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const services = [
    {
      title: 'Mobile App Development',
      description:
        'Building intuitive and engaging mobile apps that cater to your business needs. We specialize in creating apps that offer seamless user experiences.',
      image: mobileAppImage,
    },
    {
      title: 'Web Design & Development',
      description:
        'Crafting beautiful and functional websites tailored to your needs. Our team ensures your online presence stands out.',
      image: webDesignImage,
    },
    {
      title: 'AI Solutions',
      description:
        'Transform your business with cutting-edge AI solutions. We provide tailored AI services that optimize processes, enhance decision-making,',
      image: aiSolutionImage,
    },
    {
      title: 'Software Testing',
      description:
        'Empowering innovation with AI-driven solutions, ensuring flawless performance, robust system reliability, seamless scalability, enhanced security, ',
      image: softwareTestingImage,
    },
    {
      title: 'Custom Solutions',
      description:
        'Delivering innovative, bespoke software solutions tailored to your unique business needs, driving efficiency, scalability, and seamless integration',
      image: softwareTestingImage,
    },
  ]

  // Handle card click
  const handleCardClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index) // Toggle active state
  }

  // Handle circle click
  const handleCircleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index) // Toggle active state
  }

  return (
    <div>
      <div className='box'>
        <div className='half-circle'></div>
        <Container className='py-5'>
          <h2 className='text-center mb-4' style={{ color: '#000' }}>
            Services We Offer
          </h2>

          {/* Single Row for All Cards */}
          <div className='services-row'>
            {services.map((service, index) => (
              <Card
                key={index}
                className={`shadow-sm service-card ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => handleCardClick(index)} // Card click
              >
                <Card.Body>
                  <div className='circle-container'>
                    <img
                      src={service.image}
                      alt={service.title}
                      className='circle-img'
                    />
                  </div>
                  <Card.Title className='title'>{service.title}</Card.Title>
                  <Card.Text className='discribtion'>
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>

          <div className='down-box'>
            <div className='circle-row d-flex justify-content-center mt-4'>
              {services.map((_, index) => (
                <div
                  key={index}
                  className={`circle mx-2 ${
                    activeIndex === index ? 'bg-primary' : 'bg-secondary'
                  }`}
                  onClick={() => handleCircleClick(index)} // Circle click to activate the corresponding card
                ></div>
              ))}
            </div>
            <div className='boders'>
              <div className='grey-txt'>01</div>
              <div class='line-container position-relative mx-3'>
                <div class='line-filled'></div>
                <div class='line-unfilled'></div>
              </div>
              <div className='purple-txt'>05</div>
            </div>
          </div>
        </Container>
        <div className='down-circle'></div>
      </div>
    </div>
  )
}

export default Services
