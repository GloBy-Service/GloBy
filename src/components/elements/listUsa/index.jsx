import React, { useEffect, useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css';

const usa = { name: 'USA', backendName: 'USA', code: 'us' };

const FlagList = () => {
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

export default FlagList;
