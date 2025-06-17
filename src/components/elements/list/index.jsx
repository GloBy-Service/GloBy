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
  const [durationSelected, setDurationSelected] = useState(false);

  const handleDurationChange = (e) => {
    setSelected({
      ...selected,
      duration: e.target.value,
      customDays: '',
      specificDate: '',
    });
    setDurationSelected(true);
  };

  const isChooseDisabled =
    !durationSelected ||
    (selected?.duration === 'date' && (!selected?.customDays || Number(selected.customDays) <= 0));

  return (
    <>
      {!showUpload && (
        <div className="FlagList">
          <h2 className="H2">Choose your country</h2>
          {selected && <div className="selected-country">Selected: {selected.name}</div>}

          <div className="flag-grid">
            {countries.map((country) => (
              <div
                key={country.name}
                className={`flag-item ${selected?.name === country.name ? 'selected' : ''}`}
                onClick={() => {
                  setSelected(country);
                  setDurationSelected(false);
                }}
              >
                <img src={`https://flagcdn.com/w80/${country.code}.png`} alt={country.name} />
                <span>{country.name}</span>
              </div>
            ))}
          </div>

          {selected && (
            <>
              <h2 className="H2">Choose Stay Duration</h2>
              <div className="duration-options">
                <label>
                  <input
                    type="radio"
                    name="duration"
                    value="date"
                    checked={selected.duration === 'date'}
                    onChange={handleDurationChange}
                  />
                  Specific Date
                </label>

                <label>
                  <input
                    type="radio"
                    name="duration"
                    value="7"
                    checked={selected.duration === '7'}
                    onChange={handleDurationChange}
                  />
                  1 Week
                </label>
                <label>
                  <input
                    type="radio"
                    name="duration"
                    value="14"
                    checked={selected.duration === '14'}
                    onChange={handleDurationChange}
                  />
                  2 Weeks
                </label>

                <label>
                  <input
                    type="radio"
                    name="duration"
                    value="30"
                    checked={selected.duration === '30'}
                    onChange={handleDurationChange}
                  />
                  1 Month
                </label>

                <label>
                  <input
                    type="radio"
                    name="duration"
                    value="60"
                    checked={selected.duration === '60'}
                    onChange={handleDurationChange}
                  />
                  2 Months
                </label>

                <label>
                  <input
                    type="radio"
                    name="duration"
                    value="365"
                    checked={selected.duration === '365'}
                    onChange={handleDurationChange}
                  />
                  1 Year
                </label>
              </div>

              {selected.duration === 'date' && (
                <div className="custom-days">
                  <label htmlFor="daysInput">Or type custom days:</label>
                  <input
                    type="number"
                    id="daysInput"
                    min="1"
                    max="365"
                    placeholder="e.g. 14"
                    value={selected.customDays || ''}
                    onChange={(e) =>
                      setSelected((prev) => ({ ...prev, customDays: e.target.value }))
                    }
                  />
                </div>
              )}

              {isChooseDisabled && (
                <div style={{ color: 'red', marginTop: '8px' }}>
                  {selected?.duration === 'date'
                    ? 'Please enter a valid number of days for the specific date.'
                    : 'Please select a stay duration before choosing.'}
                </div>
              )}

              <button
                className="choose-btn"
                disabled={isChooseDisabled}
                onClick={() => setShowUpload(true)}
                style={{
                  opacity: isChooseDisabled ? 0.5 : 1,
                  cursor: isChooseDisabled ? 'not-allowed' : 'pointer',
                  marginTop: '12px',
                }}
              >
                Choose
              </button>
            </>
          )}
        </div>
      )}

      {showUpload && <Upload />}
    </>
  );
};

export default FlagList;
