import React, { useEffect, useState } from 'react';
import Upload from '../upload';
import './../../../common/style/country.css';

const canada =   { name: 'Canada', backendName: 'Canada', code: 'ca' };


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
