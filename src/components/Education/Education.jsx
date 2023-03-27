import React, { useEffect, useState } from "react"
import './Education.css'

const Education = () => {

    const [education, setEdudation] = useState([])
    const [certificate, setCertificate] = useState([])

    const fetchEducationData = () => {
        fetch("https://chinmayakumarbiswal.in/api/education")
        .then(response => {
            return response.json()
        })
        .then(data => {
            setEdudation(data.data)
            console.log(data.data)
        })
    }

    const fetchCertificateData = () => {
        
    }

  useEffect(() => {
    fetchEducationData()
    fetchCertificateData()
  }, [])




  return (
    <section class="mh-skills" id="skills">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="resume-box">
                        <div class="title text-white">
                            <h3>Education & Achievement</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                {education.length > 0 && (
                                <ul class="education-box">
                                
                                    {education.map(educationdata => (
                                        <li>
                                        <span>{educationdata.year}</span>
                                        <h6>{educationdata.education}</h6>
                                        <p>{educationdata.details}</p>
                                        </li>
                                    ))}
                                
                                </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mh-professional-skills">
                        <h3>Skills</h3>
                        <ul class="mh-professional-progress">
                            <li>
                                <div class="mh-progress" data-progress="95">
                                    <div class="title-skills">AWS Infrastructure</div>
                                </div>
                            </li>
                            <li>
                                <div class="mh-progress" data-progress="80">
                                    <div class="title-skills">Redhat</div>
                                </div>
                            </li>
                            <li>
                                <div class="mh-progress" data-progress="90">
                                    <div class="title-skills">Web Development</div>
                                </div>
                            </li>
                            <li>
                                <div class="mh-progress" data-progress="80">
                                    <div class="title-skills">cyber Security</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="resume-box">
                        <div class="title text-white">
                            <h3>Certificate</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <ul class="education-box">
                                    <li>
                                        <span>2021</span>
                                        <h6><a href="https://chinmaya-static-certificate.s3.ap-south-1.amazonaws.com/Participation+in+AWS+Cloud+Masterclass+-+Discovery+Day-TZMP5PV5.pdf">Cloud Master Class</a></h6>
                                        
                                    </li>
                                    <li>
                                        <span>2022</span>
                                        <h6><a href="https://www.credly.com/badges/b0ef91ef-9859-437a-8f55-f548bc6aac3b/public_url">AWS CLF-C01</a></h6>
                                    </li>
                                    <li>
                                        <span>2022</span>
                                        <h6><a href="https://codered.eccouncil.org/certificate/f7e96217-ef66-4746-a247-959b3ddd681e">Ethical Hacking Essential</a></h6>
                                    </li>
                                    <li>
                                        <span>2022</span>
                                        <h6><a href="https://www.credly.com/badges/9ff37c9a-e415-4224-9bc2-f56a5f1a4b3c/public_url">AWS Academy Cloud Foundations</a></h6>
                                    </li>
                                    <li>
                                        <span>2022</span>
                                        <h6><a href="https://www.credly.com/badges/9265e87b-fd47-4232-8fcd-88ade5c3fa54/public_url">AWS Academy Cloud Security Foundations</a></h6>
                                    </li>
                                    <li>
                                        <span>2022</span>
                                        <h6><a href="https://www.credly.com/badges/93c0dbd9-1eee-4091-b61b-5669fe7d3edb/public_url">AWS Cloud Quest Game</a></h6>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separated"></div>
        </div>
    </section>
  )
}

export default Education