import React, { useState } from 'react';
import '../../../common/style/root.css';
import WomanImg from '../../../assets/image/woman.png';

const countries = [
  'Azerbaijan', 'Turkey', 'Canada', 'United States', 'United Kingdom', 'Australia', 'Schengen', 'France', 'Germany'
];

const Input = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(5);
  const [country, setCountry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCountryList, setShowCountryList] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim() || !country) return;
    
    setIsAnimating(true);

    try {
      await fetch('https://globy.space/apix/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Anonymous',
          country,
          comment: feedback,
          rating
        })
      });

      setTimeout(() => {
        setIsSubmitted(true);
        setIsAnimating(false);
      }, 1500);
    } catch (err) {
      console.error('Submit failed:', err);
      setIsAnimating(false);
    }
  };

  const handleReset = () => {
    setFeedback('');
    setRating(5);
    setCountry('');
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

              {/* Star Rating */}
              <div className="Stars" style={{ margin: '10px 0' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <span
                    key={s}
                    onClick={() => setRating(s)}
                    style={{ cursor: 'pointer', color: rating >= s ? '#f5b50a' : '#ccc' }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Country Select */}
              <div className="Dropdown" style={{ position: 'relative' }}>
                <button
                  className="Input-Button"
                  type="button"
                  onClick={() => setShowCountryList(!showCountryList)}
                >
                  {country || 'Select Country'}
                </button>
                {showCountryList && (
                  <div style={{
                    position: 'absolute',
                    background: '#fff',
                    border: '1px solid #ccc',
                    width: '100%',
                    maxHeight: '160px',
                    overflowY: 'auto',
                    zIndex: 5
                  }}>
                    {countries.map((c, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          setCountry(c);
                          setShowCountryList(false);
                        }}
                        style={{
                          padding: '8px 12px',
                          cursor: 'pointer',
                          borderBottom: '1px solid #eee'
                        }}
                      >
                        {c}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="Input-Actions">
                <button
                  className={`Input-Button ${isAnimating ? 'loading' : ''}`}
                  onClick={handleSubmit}
                  disabled={!feedback.trim() || !country || isAnimating}
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
                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
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
