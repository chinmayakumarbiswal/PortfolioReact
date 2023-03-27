import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <main>
        <section className="banner">
            <div className="top-fixed d-flex">
                <div className="info">
                    <label>+91 6370183009</label>
                    <label>situ@chinmayakumarbiswal.in</label>
                </div>
                <div className="social">
                    <a href="#/">
                        <a href="https://www.facebook.com/situ.chinmaya"><i className="fa fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/chinmaya-kumar-biswal-16045"><i className="fa fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/chinmaya.situ/"><i className="fa fa-instagram"></i></a>
                        <a href="https://github.com/chinmayakumarbiswal"><i className="fa fa-github"></i></a>
                        <a href="https://twitter.com/Chinmaya_situ?s=09"><i className="fa fa-twitter"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=919556328216&text=hey"><i className="fa fa-whatsapp"></i></a>
                    </a>
                </div>
            </div>
            <div className="container">
                <div className="row full-screen align-items-center">
                    <div className="col-lg-7">
                        <div className="box">
                            <h6>Hello, My Name is</h6>
                            <h1>Chinmaya Kumar Biswal</h1>
                            <p className="lead">Full-stack Devloper || Gamer || Student

                            </p>
                            <p className="desc">
                                Hello! i'm Chinmaya Kumar Biswal a student and a fontend web developer. Studies MCA at Centurion University of Technology and Management with an interest in System Admin and Web development. 
                            </p>
                            <div className="btn-bar">
                                <a href="cv/cvchinmaya.pdf">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="me"></div>
        </section>
    </main>
  )
}

export default Hero