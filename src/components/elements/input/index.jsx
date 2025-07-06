import React, { useState } from 'react';
import '../../../common/style/root.css';
import WomanImg from '../../../assets/image/woman.png';

const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
    "Chile", "China", "Colombia", "Comoros", "Congo",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
    "Guyana", "Haiti", "Honduras", "Hungary", "Iceland",
    "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia",
    "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
    "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
    "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "Norway", "Oman", "Pakistan", "Palau",
    "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
    "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain",
    "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland",
    "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
    "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const Input = () => {
    const [feedback, setFeedback] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [rating, setRating] = useState(5);
    const [showCountryDropdown, setShowCountryDropdown] = useState(false);
    const [filteredCountries, setFilteredCountries] = useState(countries);
    const [countrySearch, setCountrySearch] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [error, setError] = useState('');

    const handleCountrySearch = (e) => {
        const search = e.target.value;
        setCountrySearch(search);
        setFilteredCountries(
            countries.filter(c => 
                c.toLowerCase().includes(search.toLowerCase())
        ))
    };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!feedback.trim() || !name.trim() || !country) {
    setError('Please fill all fields');
    return;
  }
  
  const payload = {
    name,
    country,
    comment: feedback,
    rating,
    comment_date: new Date().toISOString(),
    is_active: true
  };

  console.log('Submitting:', payload); // Check console
  
  try {
    const response = await fetch('https://globy.space/apix/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json(); // Add this line
    console.log('Response:', responseData); // Check response
    
    if (!response.ok) throw new Error(responseData.message || 'Failed to submit');
    
    setIsSubmitted(true);
  } catch (err) {
    console.error('Submission error:', err);
    setError(err.message);
  } finally {
    setIsAnimating(false);
  }
};

    const handleReset = () => {
        setFeedback('');
        setName('');
        setCountry('');
        setRating(5);
        setIsSubmitted(false);
        setError('');
    };

    return (
        <div className="Input-Group">
            <div className={`Input-Card ${isSubmitted ? 'submitted' : ''}`}>
                {!isSubmitted ? (
                    <>
                        <div className="Input-Left">
                            <h2>Help us improve</h2>
                            <p>How would you like to describe your experience with Globy?</p>
                            
                            <input
                                type="text"
                                placeholder="Your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="Input-Name"
                            />
                            
                            <div className="Input-Country">
                                <input
                                    type="text"
                                    placeholder="Select country"
                                    value={country}
                                    onClick={() => setShowCountryDropdown(true)}
                                    readOnly
                                />
                                {showCountryDropdown && (
                                    <div className="Country-Dropdown">
                                        <input
                                            type="text"
                                            placeholder="Search countries..."
                                            value={countrySearch}
                                            onChange={handleCountrySearch}
                                            autoFocus
                                            className='search-country'
                                        />
                                        <div className="Country-List">
                                            {filteredCountries.map((c) => (
                                                <div 
                                                    key={c} 
                                                    className="Country-Item"
                                                    onClick={() => {
                                                        setCountry(c);
                                                        setShowCountryDropdown(false);
                                                        setCountrySearch('');
                                                    }}
                                                >
                                                    {c}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            
                            <textarea 
                                placeholder="Please share your thoughts..." 
                                rows={6}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            
                            <div className="Rating-Input">
                                <label>Rating:</label>
                                <div className="Stars-Input">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <span 
                                            key={star}
                                            className={`Star ${star <= rating ? 'active' : ''}`}
                                            onClick={() => setRating(star)}
                                        >
                                            {star <= rating ? '★' : '☆'}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {error && <div className="Error-Message">{error}</div>}
                            
                            <div className="Input-Actions">
                                <button 
                                    className={`Input-Button ${isAnimating ? 'loading' : ''}`}
                                    onClick={handleSubmit}
                                    disabled={isAnimating}
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