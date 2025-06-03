import React, { useRef } from 'react';
import '../../../common/style/root.css';
import usaFlagMp4 from '../../../assets/video/USA.mp4'
import europeFlagMp4 from '../../../assets/video/Europe.mp4'
import ukFlagMp4 from '../../../assets/video/UK.mp4'
import canadaFlagMp4 from '../../../assets/video/Canada.mp4'

const FlagItem = ({ videoSrc, label }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="Flag-Item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        loop
        playsInline
        className="Flag-Video"
      />
      <div className="Flag-Label">{label}</div>
    </div>
  );
};

const Directions = () => {
  return (
    <div className="Directions-Group">
        <p>Select Direction</p>
      <div className="Directions">
        <FlagItem videoSrc={usaFlagMp4} label="USA" />
        <FlagItem videoSrc={europeFlagMp4} label="Europe" />
        <FlagItem videoSrc={ukFlagMp4} label="UK" />
        <FlagItem videoSrc={canadaFlagMp4} label="Canada" />
      </div>
    </div>
  );
};

export default Directions;
