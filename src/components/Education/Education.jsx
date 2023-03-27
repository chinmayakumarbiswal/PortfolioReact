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
        fetch("https://chinmayakumarbiswal.in/api/certificate")
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            setCertificate(data.data)
            console.log(data.data)
        })
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
                                {education.length > 0 && (
                                    <ul class="education-box">
                                        {certificate.map(certificatedata => (
                                            <li>
                                                <span>{certificatedata.year}</span>
                                                <h6><a href={certificatedata.link}>{certificatedata.name}</a></h6>
                                            </li>
                                        ))}
                                    </ul>
                                )}
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