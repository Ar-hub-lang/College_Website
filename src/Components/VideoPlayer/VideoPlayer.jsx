import React, { useRef } from 'react'
import './VideoPlayer.css'
import video from'../../assets/edusity_assets/arpitvideo.mp4'
const VideoPlayer = ({playState, setPlaystate}) => {
    const player=useRef(null);
    const closePlayer=(e)=>{
        if(e.target==player.current){
            setPlaystate(false)
        }
    }
  return (
    <div className={`videoplayer ${playState?'':'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer
