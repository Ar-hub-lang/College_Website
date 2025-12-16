import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../assets/edusity_assets/next-icon.png'
import back_icon from '../../assets/edusity_assets/back-icon.png'
import user_1 from '../../assets/edusity_assets/user-1.png'
import user_2 from '../../assets/edusity_assets/user-2.png'
import user_3 from '../../assets/edusity_assets/user-3.png'
import user_4 from '../../assets/edusity_assets/user-4.png'
const Testimonial = () => {
    const slider=useRef();
    let tx=0;
    const SlideForward=()=>{
        if(tx>-50){
            tx-=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
    const SlideBackward=()=>{
        if(tx<0){
            tx+=25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }
  return (
    <div className='testimonial' id='testimonial'>
      <img src={next_icon} alt="" className='next-btn' onClick={SlideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick={SlideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Alina</h3>
                            <span>Dehradun</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Graphic Era is one of my best desicion I've ever made.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Anubhav</h3>
                            <span>Bijnor</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Graphic Era is one of my best desicion I've ever made.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Aliya</h3>
                            <span>Dehradun</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Graphic Era is one of my best desicion I've ever made.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user_info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Abhinav</h3>
                            <span>Saharanpur</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Graphic Era is one of my best desicion I've ever made.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
