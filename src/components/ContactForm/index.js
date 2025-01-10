import React from 'react'
import './index.css'
import Swal from 'sweetalert2'

function ContactForm() {
 
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e00b9f11-944e-497d-a9b7-6017ea7918b1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };


  return (
    <section className='contact'>
        <form onSubmit={onSubmit}>
            <h2> Contact Form </h2>
            <div className='input-box'>
                 <label>Full Name</label>
                 <input type='text' className='field' placeholder='Enter your name' name='name' required />
            </div>
            <div className='input-box'>
                 <label>Email Address</label>
                 <input type='email' className='field' placeholder='Enter your email' name='email' required />
            </div>
            <div className='input-box'>
                 <label>Your Message</label>
                 <textarea className='field mess' placeholder='Enter your message' name='message' required ></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
        <div className='desc-section'>
          <img src="https://res.cloudinary.com/di3u22t0w/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1732531640/20220419_143215-01.jpeg_tnqgx2.jpg" className='profile-img' />
          <p>Hello! You can reach out to me via contact form <br />
             I will be happy to help you.
          </p>
        </div>
    </section>
  )
}

export default ContactForm
