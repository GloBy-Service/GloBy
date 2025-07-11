import React, { useEffect, useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css';

const usa =     {
      "country": "USA",
      "dailyCostEur": 282.20,
      "minDays": 30,
      "maxStatementAgeDays": 30
    }

const FlagListUsa = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(usa);
  }, []);

  return (
    <>
      {selected && (
        <Upload
          country={selected.backendName}
          stayDays="30"
        />
      )}
    </>
  );
};

export default FlagListUsa;
