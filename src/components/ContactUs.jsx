import React, { useState } from 'react'
import Swal from 'sweetalert2'
import Nav from './Nav'
import Footer from './Footer'

const ContactUs = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const contactUs = (e) =>{
    e.preventDefault();
    console.log(fullName, email, message);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Thank You ! We will try to reach you soon.'
    })
  }


  return (
    <div>
      <Nav />
      <div style={{
        display: 'flex',
        padding: 64,
        gap: 24

      }}>
        <img style={{
          width: "50%"
        }} src='./contact-us.svg' alt='Contact Us' />
        <div style={{
          width: '50%',
        }}>
          <form onSubmit={contactUs} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }}>
          {/* Name Input */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}>
              <label style={{
                fontSize: 18,
                fontWeight: 500
              }}>Fullname</label>
              <input style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
              }} type='text' 
              placeholder='Enter name here' 
              value={fullName}
              name='fullname'
              onChange={(e)=> setFullName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}>
              <label style={{
                fontSize: 18,
                fontWeight: 500
              }}>Email</label>
              <input style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
              }} type='email' 
              placeholder='Enter email here' 
              name='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
                required
              />
            </div>

            {/* Message Input */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 8
            }}>
              <label style={{
                fontSize: 18,
                fontWeight: 500
              }}>Message</label>
              <textarea style={{
                border: '1px solid #ccc',
                padding: 16,
                borderRadius: 4
              }} type='text' 
              placeholder='Enter message here' 
              name='message'
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
                required
              />
            </div>

            <button style={{
              padding: '14px 32px',
              width: 'fit-content',
              borderRadius: 4,
              border: 'none',
              color: 'white',
              background: "#6c63ff",
              fontWeight: 600
            }}>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ContactUs
