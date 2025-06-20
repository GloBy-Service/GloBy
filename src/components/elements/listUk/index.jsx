import React, { useEffect, useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css';

const uk = { name: 'UK', backendName: 'UK', code: 'gb' };

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
