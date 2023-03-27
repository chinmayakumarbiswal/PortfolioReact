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
    <section className="mh-skills" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="resume-box">
                        <div className="title text-white">
                            <h3>Education & Achievement</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                {education.length > 0 && (
                                    <ul className="education-box">
                                    
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
                <div className="col-md-6">
                    <div className="mh-professional-skills">
                        <h3>Skills</h3>
                        <ul className="mh-professional-progress">
                            <li>
                                <div className="mh-progress" data-progress="95">
                                    <div className="title-skills">AWS Infrastructure</div>
                                </div>
                            </li>
                            <li>
                                <div className="mh-progress" data-progress="80">
                                    <div className="title-skills">Redhat</div>
                                </div>
                            </li>
                            <li>
                                <div className="mh-progress" data-progress="90">
                                    <div className="title-skills">Web Development</div>
                                </div>
                            </li>
                            <li>
                                <div className="mh-progress" data-progress="80">
                                    <div className="title-skills">cyber Security</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="resume-box">
                        <div className="title text-white">
                            <h3>Certificate</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                {certificate.length > 0 && (
                                    <ul className="education-box">
                                        {certificate.map(certificatedata => (
                                            <li>
                                                <span>{certificatedata.year}</span>
                                                <h6><a href={certificatedata.link} target="_blank" rel="noopener noreferrer">{certificatedata.name}</a></h6>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separated"></div>
        </div>
    </section>
  )
}

export default Education