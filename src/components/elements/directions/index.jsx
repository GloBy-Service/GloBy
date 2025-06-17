import React, { useRef } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import '../../../common/style/root.css';
import usaFlagMp4 from '../../../assets/video/USA.mp4';
import europeFlagMp4 from '../../../assets/video/Europe.mp4';
import ukFlagMp4 from '../../../assets/video/UK.mp4';
import canadaFlagMp4 from '../../../assets/video/Canada.mp4';

const FlagItem = ({ videoSrc, label, path }) => {
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
      <Link to={path}>
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className="Flag-Video"
        />
        <div className="Flag-Label">{label}</div>
      </Link>
    </div>
  );
};

const Directions = () => {
  return (
    <div className="Directions-Group">
      <p>Select Direction</p>
      <div className="Directions">
        <FlagItem videoSrc={usaFlagMp4} label="USA" path="/usa" />
        <FlagItem videoSrc={europeFlagMp4} label="Europe" path="/europe" />
        <FlagItem videoSrc={ukFlagMp4} label="UK" path="/uk" />
        <FlagItem videoSrc={canadaFlagMp4} label="Canada" path="/canada" />
      </div>
    </div>
  );
};

export default Directions;
