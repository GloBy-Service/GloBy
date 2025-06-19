import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import videoMp4 from '../../../assets/video/screen-capture.mp4';
import '../../../common/style/root.css';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const scrollToSection = (id) => {
        setIsMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollTo: id } });
        } else {
            const section = document.getElementById(id);
            if (section) {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const sectionHeight = section.offsetHeight;
                const viewportHeight = window.innerHeight;
                const offset = sectionTop - (viewportHeight / 2) + (sectionHeight / 2);
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        }
    };

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
                    <button onClick={() => scrollToSection('countries')} style={{ marginLeft: '10px' }}>
                        Check Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;