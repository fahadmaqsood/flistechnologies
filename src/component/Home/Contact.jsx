import React from 'react'
import icon1 from '../../imgs/Vector.png'
import icon2 from '../../imgs/Vector (1).png'
import icon3 from '../../imgs/bi_clock-fill.png'
import '../../css/Contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='container my-5 '>
        <h2 className='text-center mb-4 tech-heading'>Get In Touch With Us</h2>
        <div className='contactdiv'>
          <p className='text-center mb-5 top-para'>
            For more information about our products and services, please feel
            free to drop us an email. Our staff is always here to help you out.
            Do not hesitate!
          </p>
        </div>
        <div className='row'>
          {/* Left Side */}
          <div className='col-md-6 mb-4 address'>
            <div className='mb-4 address-col'>
              {' '}
              <div className='img-title'>
                <div className='icon-imgs d-inline-block'>
                  <img
                    src={icon1}
                    alt='Address Icon'
                    className='me-2 iconimgs'
                  />
                </div>
                <h5 className='heading5 d-inline-block'>Address</h5>
              </div>
              <div className='para '>
                <p>123 Street, Qasimabad, Hyderabad</p>
              </div>
            </div>
            <div className='mb-4 address-col'>
              <div className='img-title'>
                <div className='icon-imgs d-inline-block'>
                  <img src={icon2} alt='Phone Icon' className='me-2 iconimgs' />
                </div>
                <h5 className='heading5 d-inline-block'>Phone</h5>
              </div>
              <div className='para'>
                <p>Mobile: +92 123 456789 Hotline: +92 123 456789</p>
              </div>
            </div>
            <div className='mb-4 address-col'>
              {' '}
              <div className='img-title'>
                <div className='icon-imgs d-inline-block'>
                  <img
                    src={icon3}
                    alt='Working Time Icon'
                    className='me-2 iconimgs'
                  />
                </div>
                <h5 className='heading5 d-inline-block'>Working Time</h5>
              </div>
              <div className='para'>
                <p>
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className='col-md-6'>
            <form>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                  Your Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='name'
                  placeholder='Enter your name'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                  Email Address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='email'
                  placeholder='Enter your email'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='subject' className='form-label'>
                  Subject
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='subject'
                  placeholder='Enter subject'
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='message' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  rows='4'
                  placeholder='Enter your message'
                ></textarea>
              </div>
              <button type='submit' className='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
