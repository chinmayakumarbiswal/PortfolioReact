import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
            <div class="container-fluid p-0">
                <div class="row text-left">
                    <div class="col-md-8 col-sm-5">
                        <h4 class="text-light">About Me</h4>
                        <p class="text-muted">A diligent cloud technology enthusiast with the knowledge of AWS and GCP. looking for opportunity as solution architect to define the architecture, combine information from business, design and implement to solve business need and problems .</p>
                        <p class="pt-4 text-muted">©2023 WarriorTM | By 
                            <a href="https://chinmayakumarbiswal.in">
                                <span> Chinmaya Kumar Biswal</span>
                            </a>
                        </p>
                    </div>
                    
                    <div class="col-md-4 col-sm-12">
                        <h4 class="text-light">Follow Us</h4>
                        <p class="text-muted">Let us be social</p>
                        <div class="column text-light">
                            <a href="https://www.facebook.com/situ.chinmaya">
                                <i class="fa fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/chinmaya.situ/">
                                <i class="fa fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/Chinmaya_situ?s=09">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/chinmaya-kumar-biswal-16045">
                                <i class="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/chinmayakumarbiswal">
                                <i class="fa fa-github"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=919556328216&text=hey">
                                <i class="fa fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer