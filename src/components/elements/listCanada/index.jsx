import React, { useEffect, useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css';

//  { name: 'Canada', backendName: 'Canada', code: 'ca' };

   const canada =   {
      "country": "Canada",
      "dailyCostEur": 282.20,
      "minDays": 30,
      "maxStatementAgeDays": 30
    }


const FlagListCanada = () => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(canada);
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

export default FlagListCanada;
