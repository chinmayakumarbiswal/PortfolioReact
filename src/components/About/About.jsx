import React from 'react'
import chinmayaimg from './chi.jpg'

const About = () => {
  return (
    <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-4" data-aos="zoom-in">
                    <div class="about-me">
                        <div class="img">
                            <img src={chinmayaimg} alt="" />
                        </div>
                        <div class="nav social-icons justify-content-center">
                            <a href="https://www.facebook.com/situ.chinmaya"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/chinmaya-kumar-biswal-16045"><i class="fa fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/chinmaya.situ/"><i class="fa fa-instagram"></i></a>
                            <a href="https://github.com/chinmayakumarbiswal"><i class="fa fa-github"></i></a>
                            <a href="https://twitter.com/Chinmaya_situ?s=09"><i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
                    <div class="info">
                        <p>Full-stack Devloper || Gamer || Student</p>
                        <h3>Chinmaya Kumar Biswal</h3>
                    </div>
                </div>
                <div class="col-lg-7 ml-auto" data-aos="zoom-in">
                    <div class="about-info">
                        <div class="title text-white">
                            <h3>Biography</h3>
                        </div>
                        <div class="text-white">
                            <p>A 3rd yr IT-Cloud Technology And Information Security student at Centurion University of Technology and Management with an interest in System Admin and Web development.</p>
                            <p> I am looking for growth. Currently, I’m looking for for internships and research projects in the field of Cloud Computing and to build up my career and skills.</p>
                        </div>
                        <div class="info-list">
                            <div class="row">
                                <div class="col-sm-6">
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
                                            <span>20 Years</span>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
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
        <div class="container">
            <div class="separated"></div>
            <div class="title text-white">
                <h3>What i do</h3>
            </div>
            <div class="row">
                <div class="col-lg-4" data-aos="zoom-in">
                    <div class="box1">
                        <i class="fa fa-desktop"></i>
                        <div class="content text-white">
                            <h5>Web Development</h5>
                            <p>A Full Stack Web Developer who can build stellar looking websites from scratch and improve an existing website.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" data-aos="zoom-in">
                    <div class="box1">
                        <i class="fa fa-bug"></i>
                        <div class="content text-white">
                            <h5>Penetration Testing</h5>
                            <p>A bug bounty hunter who test your web application, Find vulnerability and give the soluation how to fixed it.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" data-aos="zoom-in">
                    <div class="box1">
                        <i class="fa fa-wpexplorer"></i>
                        <div class="content text-white">
                            <h5>Student</h5>
                            <p>A 3rd yr IT-Cloud Technology And Information Security student at Centurion University of Technology and Management.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separated"></div>
        </div>
    </section>   
  )
}

export default About