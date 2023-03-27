import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [values, setValues] = useState({
        name: '',email:'',subject:'',message:''
    });
    
    
    const setName = name => {
        return ({ target: { value } }) => {
          setValues(oldValues => ({...oldValues, [name]: value }));
        }
    };

    const setEmail = email => {
        return ({ target: { value } }) => {
          setValues(oldValues => ({...oldValues, [email]: value }));
        }
    };

    const setSubject = subject => {
        return ({ target: { value } }) => {
          setValues(oldValues => ({...oldValues, [subject]: value }));
        }
    };

    const setMessage = message => {
        return ({ target: { value } }) => {
          setValues(oldValues => ({...oldValues, [message]: value }));
        }
    };
    // alert(values.name+values.email+values.message);

    const sendData = async () => {
        const response = await fetch('http://localhost:3001/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        });

        if (response.status !== 200) {
          throw new Error(`Request failed: ${response.status}`); 
        }
    }

    const onSubmit = async (event) => {
        event.preventDefault(); // Prevent default submission
        try {
          await sendData();
          alert('Mail Send successfully !');
          setValues({
            name: '',email:'',subject:'',message:''
          });
        } catch (e) {
          alert(`Mail send failed! ${e.message}`);
        }
      }

  return (
    <section id="messageme">
      <div className="container">
          <div className="row">
              <div className="col-lg-5" data-aos="zoom-in">
                  <div className="contact-info">
                      <h4>Get in touch</h4>
                      <p className="text-white">
                          Always available for freelancing if the right project comes along feel to
                          contact me.
                      </p>
                      <ul>
                          <li className="media">
                              <i className="fa fa-map"></i>
                              <span className="media-body">
                                    Chilika 
                              </span>
                          </li>
                          <li className="media">
                              <i className="fa fa-envelope"></i>
                              <span className="media-body">
                                  situ@chinmayakumarbiswal.in
                              </span>
                          </li>
                          <li className="media">
                              <i className="fa fa-phone-square"></i>
                              <span className="media-phone">
                                  +91 6370183009
                              </span>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="col-lg-7" data-aos="zoom-in">
                  <div className="contact-form">
                      <h4>Say something</h4>
                      <form onSubmit={onSubmit}>
                      {/* <form action="http://localhost:3000/sendmail" id="contact-form" method="POST"> */}
                      {/* <form action="https://scaleexam.tech/api/contactmailChinmaya" id="contact-form" method="GET"> */}
                          <div className="row">
                              <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" name="name" placeholder="Name" className="form-control" value={values.name} onChange={setName('name')}/>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-group">
                                    <input type="text" name="email" placeholder="Email*" className="form-control" value={values.email} onChange={setEmail('email')}/>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="form-group">
                                    <input type="text" name="subject" placeholder="subject*" className="form-control" value={values.subject} onChange={setSubject('subject')}/>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="form-group">
                                    <textarea name="Message" id="message" placeholder="Write Your Message*" rows="5" className="form-control" value={values.message} onChange={setMessage('message')}>

                                    </textarea>
                                  </div>
                              </div>
                              <div className="col-md-12">
                                  <div className="send">
                                      <button className="btn btn-primary" type="submit" value="send" name="sendMail">Send Message</button>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <div className="separated"></div>
      </div>

    </section>
  )
}

export default Contact