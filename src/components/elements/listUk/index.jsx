import React, { useEffect, useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css';

// { name: 'UK', backendName: 'UK', code: 'gb' };ZZ
   const uk =  {
      "country": "UK",
      "dailyCostEur": 244.88,
      "minDays": 28,
      "maxStatementAgeDays": 28
    }


const FlagListUk = () => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(uk);
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

export default FlagListUk;
