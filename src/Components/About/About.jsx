import React from 'react'
import './About.css'
import about_img from '../../assets/edusity_assets/about.png'
import play_icon from '../../assets/edusity_assets/play-icon.png'
const About = ({setPlaystate}) => {
  return (
    <div className='about' id='program'>
      <div className="about-left">
        <img src={about_img} alt='' className='about_img'></img>
         <img src={play_icon} alt='' className='play_icon' onClick={()=>{
          setPlaystate(true)
         }}></img>
      </div>
      <div className="about-right">
       <h3>ABOUT UNIVERSITY</h3>
       <h2>Nurturing Tomorrow Leaders Today</h2>
       <p>It provides a structured environment where learners gain theoretical knowledge as well as practical exposure in their chosen fields of study. Colleges offer a wide range of undergraduate and postgraduate programs across disciplines such as science, technology, commerce, arts, and management. </p>

<p>
In addition to academics, colleges focus heavily on the overall personality development of students. Various co-curricular and extracurricular activities such as sports, cultural events, technical fests, debates, and student clubs provide opportunities for students to explore their talents beyond the classroom.
</p>

<p> Colleges continuously strive to improve infrastructure, adopt new technologies, and update academic practices to meet global standards of education.
</p>

      </div>
    </div>
  )
}

export default About
