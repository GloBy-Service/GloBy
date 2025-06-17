import React, { useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css'; 

const countries = [
  { name: 'Albania', code: 'al' }, { name: 'Andorra', code: 'ad' }, { name: 'Austria', code: 'at' }, { name: 'Azerbaijan', code: 'az' },
  { name: 'Belgium', code: 'be' }, { name: 'Bosnia and Herzegovina', code: 'ba' }, { name: 'Bulgaria', code: 'bg' }, { name: 'Croatia', code: 'hr' },
  { name: 'Cyprus', code: 'cy' }, { name: 'Czechia', code: 'cz' }, { name: 'Denmark', code: 'dk' }, { name: 'Estonia', code: 'ee' },
  { name: 'Finland', code: 'fi' }, { name: 'France', code: 'fr' }, { name: 'Georgia', code: 'ge' }, { name: 'Germany', code: 'de' },
  { name: 'Greece', code: 'gr' }, { name: 'Hungary', code: 'hu' }, { name: 'Iceland', code: 'is' }, { name: 'Ireland', code: 'ie' },
  { name: 'Italy', code: 'it' }, { name: 'Kosovo', code: 'xk' }, { name: 'Latvia', code: 'lv' }, { name: 'Liechtenstein', code: 'li' },
  { name: 'Lithuania', code: 'lt' }, { name: 'Luxembourg', code: 'lu' }, { name: 'Malta', code: 'mt' }, { name: 'Moldova', code: 'md' },
  { name: 'Monaco', code: 'mc' }, { name: 'Montenegro', code: 'me' }, { name: 'Netherlands', code: 'nl' }, { name: 'North Macedonia', code: 'mk' },
  { name: 'Norway', code: 'no' }, { name: 'Poland', code: 'pl' }, { name: 'Portugal', code: 'pt' }, { name: 'Romania', code: 'ro' },
  { name: 'San Marino', code: 'sm' }, { name: 'Serbia', code: 'rs' }, { name: 'Slovakia', code: 'sk' }, { name: 'Slovenia', code: 'si' },
  { name: 'Spain', code: 'es' }, { name: 'Sweden', code: 'se' }, { name: 'Switzerland', code: 'ch' }, { name: 'Turkey', code: 'tr' },
  { name: 'Ukraine', code: 'ua' }, { name: 'United Kingdom', code: 'gb' }, { name: 'Vatican', code: 'va' },
];

const FlagList = () => {
  const [selected, setSelected] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      {!showUpload && (
        <div className="FlagList">
          <h2 className='H2'>Choose your country</h2>
          {selected && (
            <div className="selected-country">Selected: {selected.name}</div>
          )}

          <div className="flag-grid">
            {countries.map((country) => (
              <div
                key={country.name}
                className={`flag-item ${selected?.name === country.name ? 'selected' : ''}`}
                onClick={() => setSelected(country)}
              >
                <img
                  src={`https://flagcdn.com/w80/${country.code}.png`}
                  alt={country.name}
                />
                <span>{country.name}</span>
              </div>
            ))}
          </div>

          {selected && (
            <button className="choose-btn" onClick={() => setShowUpload(true)}>
              Choose
            </button>
          )}
        </div>
      )}

      {showUpload && <Upload />}
    </>
  );
};

export default FlagList;
