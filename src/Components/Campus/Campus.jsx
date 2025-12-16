import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/edusity_assets/gallery-1.png'
import gallery_2 from '../../assets/edusity_assets/gallery-2.png'
import gallery_3 from '../../assets/edusity_assets/gallery-3.png'
import gallery_4 from '../../assets/edusity_assets/gallery-4.png'
import whiteArrow from '../../assets/edusity_assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <button className='btn dark-btn'>See More Here <img src={whiteArrow} alt="" className='whiteArrow'/></button>
    </div>
  )
}

export default Campus
