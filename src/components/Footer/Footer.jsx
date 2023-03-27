import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
            <div className="container-fluid p-0">
                <div className="row text-left">
                    <div className="col-md-8 col-sm-5">
                        <h4 className="text-light">About Me</h4>
                        <p className="text-muted">A diligent cloud technology enthusiast with the knowledge of AWS and GCP. looking for opportunity as solution architect to define the architecture, combine information from business, design and implement to solve business need and problems .</p>
                        <p className="pt-4 text-muted">©2023 WarriorTM | By 
                            <a href="https://chinmayakumarbiswal.in">
                                <span> Chinmaya Kumar Biswal</span>
                            </a>
                        </p>
                    </div>
                    
                    <div className="col-md-4 col-sm-12">
                        <h4 className="text-light">Follow Us</h4>
                        <p className="text-muted">Let us be social</p>
                        <div className="column text-light">
                            <a href="https://www.facebook.com/situ.chinmaya">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/chinmaya.situ/">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/Chinmaya_situ?s=09">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/chinmaya-kumar-biswal-16045">
                                <i className="fa fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/chinmayakumarbiswal">
                                <i className="fa fa-github"></i>
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=919556328216&text=hey">
                                <i className="fa fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer