import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <main>
        <section class="banner">
            <div class="top-fixed d-flex">
                <div class="info">
                    <label>+91 6370183009</label>
                    <label>situ@chinmayakumarbiswal.in</label>
                </div>
                <div class="social">
                    <a href="#/">
                        <a href="https://www.facebook.com/situ.chinmaya"><i class="fa fa-facebook"></i></a>
                        <a href="https://www.linkedin.com/in/chinmaya-kumar-biswal-16045"><i class="fa fa-linkedin"></i></a>
                        <a href="https://www.instagram.com/chinmaya.situ/"><i class="fa fa-instagram"></i></a>
                        <a href="https://github.com/chinmayakumarbiswal"><i class="fa fa-github"></i></a>
                        <a href="https://twitter.com/Chinmaya_situ?s=09"><i class="fa fa-twitter"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=919556328216&text=hey"><i class="fa fa-whatsapp"></i></a>
                    </a>
                </div>
            </div>
            <div class="container">
                <div class="row full-screen align-items-center">
                    <div class="col-lg-7">
                        <div class="box">
                            <h6>Hello, My Name is</h6>
                            <h1>Chinmaya Kumar Biswal</h1>
                            <p class="lead">Full-stack Devloper || Gamer || Student

                            </p>
                            <p class="desc">
                                Hello! i'm Chinmaya Kumar Biswal a student and a fontend web developer. Studies MCA at Centurion University of Technology and Management with an interest in System Admin and Web development. 
                            </p>
                            <div class="btn-bar">
                                <a href="cv/cvchinmaya.pdf">Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="me"></div>
        </section>
    </main>
  )
}

export default Hero