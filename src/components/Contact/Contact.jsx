import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section id="messageme">
      <div class="container">
          <div class="row">
              <div class="col-lg-5" data-aos="zoom-in">
                  <div class="contact-info">
                      <h4>Get in touch</h4>
                      <p class="text-white">
                          Always available for freelancing if the right project comes along feel to
                          contact me.
                      </p>
                      <ul>
                          <li class="media">
                              <i class="fa fa-map"></i>
                              <span class="media-body">
                                  Maa Kalijai boat center, Hatabaradihi
                              </span>
                          </li>
                          <li class="media">
                              <i class="fa fa-envelope"></i>
                              <span class="media-body">
                                  situ@chinmayakumarbiswal.in
                              </span>
                          </li>
                          <li class="media">
                              <i class="fa fa-mobile"></i>
                              <span class="media-phone">
                                  +91 6370183009
                              </span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div class="col-lg-7" data-aos="zoom-in">
                  <div class="contact-form">
                      <h4>Say something</h4>
                      <form action="https://scaleexam.tech/api/contactmailChinmaya" id="contact-form" method="GET">
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                    <input type="text" name="Name" placeholder="Name" class="form-control" />
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-group">
                                    <input type="text" name="Email" placeholder="Email*" class="form-control" />
                                  </div>
                              </div>
                              <div class="col-md-12">
                                  <div class="form-group">
                                    <input type="text" name="Subject" placeholder="Subject*" class="form-control" />
                                  </div>
                              </div>
                              <div class="col-md-12">
                                  <div class="form-group">
                                    <textarea name="Message" id="message" placeholder="Write Your Message*" rows="5" class="form-control">

                                    </textarea>
                                  </div>
                              </div>
                              <div class="col-md-12">
                                  <div class="send">
                                      <button class="btn btn-primary" type="submit" value="send" name="sendMail">Send Message</button>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div class="separated"></div>
      </div>

    </section>
  )
}

export default Contact