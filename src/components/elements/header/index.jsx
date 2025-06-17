import React from 'react';
import videoMp4 from '../../../assets/video/screen-capture.mp4';
import '../../../common/style/root.css';

const Header = () => {
    return (
        <div className="Header-Group">
            <div className="Header">
                <video
                    src={videoMp4}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="header-video"
                ></video>

                <div className="header-overlay">
                    <p>Visa-Ready? Verify Your Bank Statement Now</p>
                    <p>Checking and evaluating your bank statement with AI.</p>
                    <button>Check Now</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
