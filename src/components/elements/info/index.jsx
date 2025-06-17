import React from 'react';
import '../../../common/style/root.css';
import infoImg from '../../../assets/image/info.png';

const Info = () => {
  return (
    <section className="Info-Group">
      <div className="Info-Container">
        <div className="Info-Text">
          <h2 className="Info-Title">
            With our years of experience, you’ll get the best service
          </h2>
          <p className="Info-Description">
            GloBy uses advanced technologies, including artificial intelligence, to review your documents before you submit your visa application. We carefully analyze each file, identify errors and inconsistencies, and help increase your chances of successfully obtaining a visa.
          </p>
          <p className="Info-Description">
            Ensure your bank statement meets all the required standards for visa applications, financial verification, or official documentation. Our experts carefully examine your statements for completeness, consistency, and compliance — giving you peace of mind before submission.
          </p>
          <a href="#" className="Info-Link">Learn more →</a>
        </div>
        <div className="Info-Image">
          <img src={infoImg} alt="Visa Application" className="Info-Image-File" />
        </div>
      </div>
    </section>
  );
};

export default Info;