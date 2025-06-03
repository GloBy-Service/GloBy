import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../../../common/style/root.css';
import BgVideoMp4 from '../../../assets/video/Earth.mp4';

const Numbers = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div className="Numbers-Group">
      <div className="Numbers-Wrapper">
        <video className="Numbers-BgVideo" autoPlay loop muted playsInline>
          <source src={BgVideoMp4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="Numbers-Overlay" ref={ref}>
          <h1 className="Numbers-Title">The Numbers Speak</h1>
          <p className="Numbers-Subtitle">Need help? We’re here to guide you.</p>

          <div className="Numbers-Stats">
            <div className="Stat-Item">
              <h2>
                {inView && <CountUp end={650} duration={4} />}+
              </h2>
              <p>We Have Worked<br />With Clients</p>
            </div>

            <div className="Stat-Item">
              <h2>
                {inView && <CountUp end={99} duration={4} />}%
              </h2>
              <p>Succesful Visa<br />Process Rate</p>
            </div>

            <div className="Stat-Item">
              <h2>2 min</h2>
              <p>Application<br />Aproval Time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
