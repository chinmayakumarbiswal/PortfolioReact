import React from 'react'
import chinmayaimg from './chi.jpg'
import './About.css'

const About = () => {
  return (
    <section id="about">
        <div className="container">
        <div className="separated"></div>
            <div className="row">
                <div className="col-lg-4" data-aos="zoom-in">
                    <div className="about-me">
                        <div className="img">
                            <img src={chinmayaimg} alt="" />
                        </div>
                        <div className="nav social-icons justify-content-center">
                            <a href="https://www.facebook.com/situ.chinmaya"><i className="fa fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/chinmaya-kumar-biswal-16045"><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/chinmaya.situ/"><i className="fa fa-instagram"></i></a>
                            <a href="https://github.com/chinmayakumarbiswal"><i className="fa fa-github"></i></a>
                            <a href="https://twitter.com/Chinmaya_situ?s=09"><i className="fa fa-twitter"></i></a>
                        </div>
                    </div>
                    <div className="info">
                        <p>Full-stack Devloper || Gamer || Student</p>
                        <h3>Chinmaya Kumar Biswal</h3>
                    </div>
                </div>
                <div className="col-lg-7 ml-auto" data-aos="zoom-in">
                    <div className="about-info">
                        <div className="title text-white">
                            <h3>Biography</h3>
                        </div>
                        <div className="text-white">
                            <p>A diligent cloud technology enthusiast with the knowledge of AWS and GCP. looking for opportunity as solution architect to define the architecture, combine information from business, design and implement to solve business need and problems .</p>
                            <p> I am looking for growth. Currently, I’m looking for for internships and research projects in the field of Cloud Computing and to build up my career and skills.</p>
                        </div>
                        <div className="info-list">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul>
                                        <li>
                                            <label>Name :</label>
                                            <span>Chinmaya Kumar Biswal</span>
                                        </li>
                                        <li>
                                            <label>Birthday :</label>
                                            <span>17th september 2000</span>
                                        </li>
                                        <li>
                                            <label>Age :</label>
                                            <span>22 Years</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul>
                                        <li>
                                            <label>Phone :</label>
                                            <span>+91 6370183009</span>
                                        </li>
                                        <li>
                                            <label>Email :</label>
                                            <span>situ@chinmayakumarbiswal.in</span>
                                        </li>
                                        <li>
                                            <label>Skype :</label>
                                            <span>chinmayakumarbiswal_1</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="separated"></div>
            <div className="title text-white">
                <h3>What i do</h3>
            </div>
            <div className="row">
                <div className="col-lg-4" data-aos="zoom-in">
                    <div className="box1">
                        <i className="fa fa-desktop"></i>
                        <div className="content text-white">
                            <h5>Web Development</h5>
                            <p>A Full Stack Web Developer who can build stellar looking websites from scratch and improve an existing website.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" data-aos="zoom-in">
                    <div className="box1">
                        <i className="fa fa-bug"></i>
                        <div className="content text-white">
                            <h5>Penetration Testing</h5>
                            <p>A bug bounty hunter who test your web application, Find vulnerability and give the soluation how to fixed it.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4" data-aos="zoom-in">
                    <div className="box1">
                        <i className="fa fa-cloud-upload"></i>
                        <div className="content text-white">
                            <h5>Solution Architect</h5>
                            <p>A cloud Solution Architect who helps to built a secure cloud architect and helps user to migrate their infrastructure to AWS .</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separated"></div>
        </div>
    </section>   
  )
}

export default About