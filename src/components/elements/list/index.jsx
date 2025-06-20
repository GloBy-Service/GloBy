// import React, { useState } from 'react';
// import Upload from '../upload';
// import './../../../common/style/country.css';

// const countries = [
//   { name: 'Albania', backendName: 'Albaniya', code: 'al' },
//   { name: 'Andorra', backendName: 'Andorra', code: 'ad' },
//   { name: 'Austria', backendName: 'Avstriya', code: 'at' },
//   { name: 'Azerbaijan', backendName: 'Azərbaycan', code: 'az' },
//   { name: 'Belgium', backendName: 'Belçika', code: 'be' },
//   { name: 'Bosnia and Herzegovina', backendName: 'Bosniya və Herseqovina', code: 'ba' },
//   { name: 'Bulgaria', backendName: 'Bolqarıstan', code: 'bg' },
//   { name: 'Croatia', backendName: 'Xorvatiya', code: 'hr' },
//   { name: 'Cyprus', backendName: 'Kipr', code: 'cy' },
//   { name: 'Czechia', backendName: 'Çexiya', code: 'cz' },
//   { name: 'Denmark', backendName: 'Danimarka', code: 'dk' },
//   { name: 'Estonia', backendName: 'Estoniya', code: 'ee' },
//   { name: 'Finland', backendName: 'Finlandiya', code: 'fi' },
//   { name: 'France', backendName: 'Fransa', code: 'fr' },
//   { name: 'Georgia', backendName: 'Gürcüstan', code: 'ge' },
//   { name: 'Germany', backendName: 'Almaniya', code: 'de' },
//   { name: 'Greece', backendName: 'Yunanıstan', code: 'gr' },
//   { name: 'Hungary', backendName: 'Macarıstan', code: 'hu' },
//   { name: 'Iceland', backendName: 'İslandiya', code: 'is' },
//   { name: 'Ireland', backendName: 'İrlandiya', code: 'ie' },
//   { name: 'Italy', backendName: 'İtaliya', code: 'it' },
//   { name: 'Kosovo', backendName: 'Kosovo', code: 'xk' },
//   { name: 'Latvia', backendName: 'Latviya', code: 'lv' },
//   { name: 'Liechtenstein', backendName: 'Lixtenşteyn', code: 'li' },
//   { name: 'Lithuania', backendName: 'Litva', code: 'lt' },
//   { name: 'Luxembourg', backendName: 'Lüksemburq', code: 'lu' },
//   { name: 'Malta', backendName: 'Malta', code: 'mt' },
//   { name: 'Moldova', backendName: 'Moldova', code: 'md' },
//   { name: 'Monaco', backendName: 'Monako', code: 'mc' },
//   { name: 'Montenegro', backendName: 'Monteneqro', code: 'me' },
//   { name: 'Netherlands', backendName: 'Niderland', code: 'nl' },
//   { name: 'North Macedonia', backendName: 'Şimali Makedoniya', code: 'mk' },
//   { name: 'Norway', backendName: 'Norveç', code: 'no' },
//   { name: 'Poland', backendName: 'Polşa', code: 'pl' },
//   { name: 'Portugal', backendName: 'Portuqaliya', code: 'pt' },
//   { name: 'Romania', backendName: 'Rumıniya', code: 'ro' },
//   { name: 'San Marino', backendName: 'San Marino', code: 'sm' },
//   { name: 'Serbia', backendName: 'Serbiya', code: 'rs' },
//   { name: 'Slovakia', backendName: 'Slovakiya', code: 'sk' },
//   { name: 'Slovenia', backendName: 'Sloveniya', code: 'si' },
//   { name: 'Spain', backendName: 'İspaniya', code: 'es' },
//   { name: 'Sweden', backendName: 'İsveç', code: 'se' },
//   { name: 'Switzerland', backendName: 'İsveçrə', code: 'ch' },
//   { name: 'Turkey', backendName: 'Türkiyə', code: 'tr' },
//   { name: 'Ukraine', backendName: 'Ukrayna', code: 'ua' },
//   { name: 'United Kingdom', backendName: 'Birləşmiş Krallıq', code: 'gb' },
//   { name: 'Vatican', backendName: 'Vatikan', code: 'va' },
// ];

// const FlagList = () => {
//   const [selected, setSelected] = useState(null);
//   const [showUpload, setShowUpload] = useState(false);
//   const [durationSelected, setDurationSelected] = useState(false);

//   const handleDurationChange = (e) => {
//     setSelected({
//       ...selected,
//       duration: e.target.value,
//       customDays: '',
//       specificDate: '',
//     });
//     setDurationSelected(true);
//   };

//   const isChooseDisabled =
//     !durationSelected ||
//     (selected?.duration === 'date' && (!selected?.customDays || Number(selected.customDays) <= 0));

//   return (
//     <>
//       {!showUpload && (
//         <div className="FlagList">
//           <h2 className="H2">Choose your country</h2>
//           {selected && <div className="selected-country">Selected: {selected.name}</div>}

//           <div className="flag-grid">
//             {countries.map((country) => (
//               <div
//                 key={country.name}
//                 className={`flag-item ${selected?.name === country.name ? 'selected' : ''}`}
//                 onClick={() => {
//                   setSelected(country);
//                   setDurationSelected(false);
//                 }}
//               >
//                 <img src={`https://flagcdn.com/w80/${country.code}.png`} alt={country.name} />
//                 <span>{country.name}</span>
//               </div>
//             ))}
//           </div>

//           {selected && (
//             <>
//               <h2 className="H2">Choose Stay Duration</h2>
//               <div className="duration-options">
//                 <label>
//                   <input
//                     type="radio"
//                     name="duration"
//                     value="date"
//                     checked={selected.duration === 'date'}
//                     onChange={handleDurationChange}
//                   />
//                   Specific Date
//                 </label>

//                 <label>
//                   <input
//                     type="radio"
//                     name="duration"
//                     value="7"
//                     checked={selected.duration === '7'}
//                     onChange={handleDurationChange}
//                   />
//                   1 Week
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="duration"
//                     value="14"
//                     checked={selected.duration === '14'}
//                     onChange={handleDurationChange}
//                   />
//                   2 Weeks
//                 </label>

//                 <label>
//                   <input
//                     type="radio"
//                     name="duration"
//                     value="30"
//                     checked={selected.duration === '30'}
//                     onChange={handleDurationChange}
//                   />
//                   1 Month
//                 </label>

//                 <label>
//                   <input
//                     type="radio"
//                     name="duration"
//                     value="60"
//                     checked={selected.duration === '60'}
//                     onChange={handleDurationChange}
//                   />
//                   2 Months
//                 </label>

//                 <label>
//                   <input
//                     type="radio"
//                     name="duration"
//                     value="365"
//                     checked={selected.duration === '365'}
//                     onChange={handleDurationChange}
//                   />
//                   1 Year
//                 </label>
//               </div>

//               {selected.duration === 'date' && (
//                 <div className="custom-days">
//                   <label htmlFor="daysInput">Or type custom days:</label>
//                   <input
//                     type="number"
//                     id="daysInput"
//                     min="1"
//                     max="365"
//                     placeholder="e.g. 14"
//                     value={selected.customDays || ''}
//                     onChange={(e) =>
//                       setSelected((prev) => ({ ...prev, customDays: e.target.value }))
//                     }
//                   />
//                 </div>
//               )}

//               {isChooseDisabled && (
//                 <div style={{ color: 'red', marginTop: '8px' }}>
//                   {selected?.duration === 'date'
//                     ? 'Please enter a valid number of days for the specific date.'
//                     : 'Please select a stay duration before choosing.'}
//                 </div>
//               )}

//               <button
//                 className="choose-btn"
//                 disabled={isChooseDisabled}
//                 onClick={() => setShowUpload(true)}
//                 style={{
//                   opacity: isChooseDisabled ? 0.5 : 1,
//                   cursor: isChooseDisabled ? 'not-allowed' : 'pointer',
//                   marginTop: '12px',
//                 }}
//               >
//                 Choose
//               </button>
//             </>
//           )}
//         </div>
//       )}

//       {showUpload && (
//         <Upload
//           country={selected.backendName}
//           stayDays={selected.customDays || selected.duration}
//         />
//       )}
//     </>
//   );
// };

// export default FlagList;



import React, { useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css';

const countries = [
  // { name: 'Albania', backendName: 'Albaniya', code: 'al' },
  // { name: 'Andorra', backendName: 'Andorra', code: 'ad' },
  { name: 'Austria', backendName: 'Avstriya', code: 'at' },
  // { name: 'Azerbaijan', backendName: 'Azərbaycan', code: 'az' },
  { name: 'Belgium', backendName: 'Belçika', code: 'be' },
  // { name: 'Bosnia and Herzegovina', backendName: 'Bosniya və Herseqovina', code: 'ba' },
  // { name: 'Bulgaria', backendName: 'Bolqarıstan', code: 'bg' },
  // { name: 'Croatia', backendName: 'Xorvatiya', code: 'hr' },
  // { name: 'Cyprus', backendName: 'Kipr', code: 'cy' },
  { name: 'Czechia', backendName: 'Çexiya', code: 'cz' },
  // { name: 'Denmark', backendName: 'Danimarka', code: 'dk' },
  // { name: 'Estonia', backendName: 'Estoniya', code: 'ee' },
  // { name: 'Finland', backendName: 'Finlandiya', code: 'fi' },
  { name: 'France', backendName: 'Fransa', code: 'fr' },
  // { name: 'Georgia', backendName: 'Gürcüstan', code: 'ge' },
  { name: 'Germany', backendName: 'Almaniya', code: 'de' },
  // { name: 'Greece', backendName: 'Yunanıstan', code: 'gr' },
  { name: 'Hungary', backendName: 'Macarıstan', code: 'hu' },
  // { name: 'Iceland', backendName: 'İslandiya', code: 'is' },
  // { name: 'Ireland', backendName: 'İrlandiya', code: 'ie' },
  { name: 'Italy', backendName: 'İtaliya', code: 'it' },
  // { name: 'Kosovo', backendName: 'Kosovo', code: 'xk' },
  // { name: 'Latvia', backendName: 'Latviya', code: 'lv' },
  // { name: 'Liechtenstein', backendName: 'Lixtenşteyn', code: 'li' },
  // { name: 'Lithuania', backendName: 'Litva', code: 'lt' },
  // { name: 'Luxembourg', backendName: 'Lüksemburq', code: 'lu' },
  // { name: 'Malta', backendName: 'Malta', code: 'mt' },
  // { name: 'Moldova', backendName: 'Moldova', code: 'md' },
  // { name: 'Monaco', backendName: 'Monako', code: 'mc' },
  // { name: 'Montenegro', backendName: 'Monteneqro', code: 'me' },
  { name: 'Netherlands', backendName: 'Niderland', code: 'nl' },
  // { name: 'North Macedonia', backendName: 'Şimali Makedoniya', code: 'mk' },
  { name: 'Norway', backendName: 'Norveç', code: 'no' },
  { name: 'Poland', backendName: 'Polşa', code: 'pl' },
  // { name: 'Portugal', backendName: 'Portuqaliya', code: 'pt' },
  // { name: 'Romania', backendName: 'Rumıniya', code: 'ro' },
  // { name: 'San Marino', backendName: 'San Marino', code: 'sm' },
  // { name: 'Serbia', backendName: 'Serbiya', code: 'rs' },
  // { name: 'Slovakia', backendName: 'Slovakiya', code: 'sk' },
  // { name: 'Slovenia', backendName: 'Sloveniya', code: 'si' },
  // { name: 'Spain', backendName: 'İspaniya', code: 'es' },
  // { name: 'Sweden', backendName: 'İsveç', code: 'se' },
  // { name: 'Switzerland', backendName: 'İsveçrə', code: 'ch' },
  // { name: 'Turkey', backendName: 'Türkiyə', code: 'tr' },
  // { name: 'Ukraine', backendName: 'Ukrayna', code: 'ua' },
  { name: 'USA', backendName: 'USA', code: 'us' },
  { name: 'Canada', backendName: 'Canada', code: 'ca' },
  { name: 'UK', backendName: 'UK', code: 'gb' }
  // { name: 'Vatican', backendName: 'Vatikan', code: 'va' },
];

const FlagList = () => {
  const [selected, setSelected] = useState(null);
  const [showUpload, setShowUpload] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleCountrySelect = (country) => {
    setSelected(country);
    setDropdownOpen(false);
    setShowUpload(true);
  };

  return (
    <>

      {!showUpload && (
        <div className="FlagList">
          <h2 className="H2">Choose your country</h2>

          <div className="country-dropdown">
            <div
              className="dropdown-header"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selected ? (
                <div className="selected-option">
                  <img
                    src={`https://flagcdn.com/w20/${selected.code}.png`}
                    alt={selected.name}
                    style={{ marginRight: '8px' }}
                  />
                  {selected.name}
                </div>
              ) : (
                <div className="placeholder">Select a country</div>
              )}
              <span className="dropdown-icon">
                {dropdownOpen ? '▲' : '▼'}
              </span>
            </div>

            {dropdownOpen && (
              <div className="dropdown-options">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className={`dropdown-option ${selected?.name === country.name ? 'selected' : ''}`}
                    onClick={() => handleCountrySelect(country)}
                  >
                    <img
                      src={`https://flagcdn.com/w20/${country.code}.png`}
                      alt={country.name}
                      style={{ marginRight: '8px' }}
                    />
                    {country.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {showUpload && selected && (
        <Upload
          country={selected.backendName}
          stayDays="30"
        />
      )}
    </>
  );
};


export default FlagList;
