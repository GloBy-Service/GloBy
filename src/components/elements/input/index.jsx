import React, { useState } from 'react';
import '../../../common/style/root.css';
import WomanImg from '../../../assets/image/woman.png';

const Input = () => {
  const [feedback, setFeedback] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setIsSubmitted(true);
      setIsAnimating(false);
    }, 1500);
  };

  const handleReset = () => {
    setFeedback('');
    setIsSubmitted(false);
  };

  return (
    <div className="Input-Group">
      <div className={`Input-Card ${isSubmitted ? 'submitted' : ''}`}>
        {!isSubmitted ? (
          <>
            <div className="Input-Left">
              <h2>Help us improve</h2>
              <p>How would you like to describe your experience with Globy?</p>
              <textarea 
                placeholder="Please share your thoughts..." 
                rows={6}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
              
              <div className="Input-Actions">
                <button 
                  className={`Input-Button ${isAnimating ? 'loading' : ''}`}
                  onClick={handleSubmit}
                  disabled={!feedback.trim() || isAnimating}
                >
                  {isAnimating ? (
                    <span className="spinner"></span>
                  ) : (
                    <>
                      Share <span className="arrow">→</span>
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="Input-Right">
              <img src={WomanImg} alt="Woman illustration" />
            </div>
          </>
        ) : (
          <div className="Input-Complete">
            <div className="checkmark-animation">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <h2>Thank You!</h2>
            <p>Your feedback has been submitted successfully.</p>
            <button className="Input-Button" onClick={handleReset}>
              Share More Feedback
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;