import React from 'react'
import img1 from '../../imgs/Rectangle35.png'
import img2 from '../../imgs/Rectangle36.png'
import '../../css/AboutUs.css' // Import the external CSS file

const AboutUs = () => {
  return (
    <div className='container about-us'>
      <div className='row align-items-center'>
        {/* Text Section */}
        <div className='col-lg-6'>
          <h2 className='text-white heading'>About Us</h2>
          <h3 className='mb-4 bold-heading'>
            We Are Elevating Business Success Through Innovative Technology
          </h3>
          <p className=' heading-top-padding'>
            At <strong style={{ color: '#5550bc' }}> Flis Technologies</strong>,
            our mission is to drive your business forward with cutting-edge
            technological solutions. We specialize in helping businesses
            optimize their operations, enhance their digital presence, and
            achieve their goals efficiently.
          </p>

          <div className='info-boxes d-flex justify-content-between mt-4'>
            <div className='info-box text-center'>
              <h4>200+</h4>
              <p className='ab-para'>Projects</p>
            </div>
            <div className='grey-color'></div>
            <div className='info-box text-center'>
              <h4>20+</h4>
              <p className='ab-para'>Clients</p>
            </div>
            <div className='grey-color'></div>
            <div className='info-box text-center'>
              <h4>150+</h4>
              <p className='ab-para'>Hours of Support</p>
            </div>
          </div>
          <button className='btn  mt-4'>Read More</button>
        </div>

        {/* Images Section */}
        <div className='col-lg-6 image-section'>
          <img src={img2} alt='Discussion' className='img-bottom-left' />
          <div className='half-circle'></div>
          <div className='right-circle'></div>
          <img src={img1} alt='Team' className='img-top-right' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
