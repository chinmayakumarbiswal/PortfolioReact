import React from 'react'
import './Education.css'

const Education = () => {
  return (
    <section class="mh-skills" id="skills">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="resume-box">
                        <div class="title text-white">
                            <h3>Education</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <ul class="education-box">
                                    <li>
                                        <span>2015-2016</span>
                                        <h6>10th</h6>
                                        <p>B.N.D.B.P, Jankia</p>
                                    </li>
                                    <li>
                                        <span>2016-2018</span>
                                        <h6>12th</h6>
                                        <p>Uniitech Residential College, Nayagarh</p>
                                    </li>
                                    <li>
                                        <span>2018-2021</span>
                                        <h6>Graduation</h6>
                                        <p>Centurion University of Technology and Management</p>
                                    </li>
                                    <li>
                                        <span>2018-2021</span>
                                        <h6>Graduation</h6>
                                        <p>Centurion University of Technology and Management</p>
                                    </li>
                                    
                                </ul>
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
                </div>
            </div>
            <div class="separated"></div>
        </div>
    </section>
  )
}

export default Education