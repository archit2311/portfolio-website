import React from 'react'
import './contact.css'

function Contact() {

  

  return (
    
    <div class="contact_us_6" id='contact'>
  <div class="responsive-container-block container">
    <form class="form-box" id='my-form'
    action="https://formspree.io/f/xjvqveye"
  method="POST">
      <div class="container-block form-wrapper">
        <div class="mob-text">
          <p class="text-blk contactus-head">
            Get in Touch
          </p>
          <p class="text-blk contactus-subhead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
          </p>
        </div>
        <div class="responsive-container-block" id="i2cbk">
          <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
            <p class="text-blk input-title">
              FIRST NAME
            </p>
            <input class="input" id="ijowk-3" name="FirstName" placeholder="Please enter first name..." />
          </div>
          <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
            <p class="text-blk input-title">
              EMAIL
            </p>
            <input type="email" name="email" class="input" id="ipmgh-3" placeholder="Please enter email..." />
          </div>
          <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
            <p class="text-blk input-title">
              PHONE NUMBER
            </p>
            <input class="input" id="imgis-3" name="PhoneNumber" placeholder="Please enter phone number..." />
          </div>
          <div class="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
            <p class="text-blk input-title">
              WHAT DO YOU HAVE IN MIND ?
            </p>
            <textarea type="message" name="message" class="textinput" id="i5vyy-3" placeholder="Please enter query..."></textarea>
          </div>
        </div>
        <button type='submit' class="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
          Submit
        </button>
      </div>
    </form>
    <div class="responsive-cell-block wk-desk-7 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
      <div class="map-part">
        <p class="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
          Reach me at
        </p>
        <p class="text-blk map-contactus-subhead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis diam lectus sapien.
        </p>
        <div class="social-media-links mob">
          <a class="social-icon-link" href="#" id="ix94i-2-2">
            <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
          </a>
          <a class="social-icon-link" href="#" id="itixd">
            <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
          </a>
          <a class="social-icon-link" href="#" id="izxvt">
            <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
          </a>
          <a class="social-icon-link" href="#" id="izldf-2-2">
            <img class="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
          </a>
        </div>
        <div class="map-box container-block">
        <iframe className='map-area' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.5358699645058!2d76.84871217518989!3d23.07747147913534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397ce9ceaaaaaaab%3A0xa224b6b82b421f83!2sVIT%20Bhopal%20University!5e0!3m2!1sen!2sin!4v1689007640533!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Contact
