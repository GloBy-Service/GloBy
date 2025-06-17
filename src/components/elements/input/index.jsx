import React from 'react';
import '../../../common/style/root.css';
import WomanImg from '../../../assets/image/woman.png';


const Input = () => {
  return (
    <div className="Input-Group">
      <div className="Input-Card">
        <div className="Input-Left">
          <h2>Help us improve</h2>
          <p>How would you like to describe your experience with Globy ?</p>
          <textarea placeholder="Please share your thoughts..." rows={6} />
          
          <div className="Input-Actions">
            <button className="Input-Button">
              Share <span className="arrow">→</span>
            </button>
            {/* <label className="Input-Checkbox">
              <input type="checkbox" />
              <span>I may be contacted about this feedback. <a href="#">Read Privacy Policy</a>.</span>
            </label> */}
          </div>
        </div>
        <div className="Input-Right">
          <img src={WomanImg} />
        </div>
      </div>

    </div>
  );
};

export default Input;
