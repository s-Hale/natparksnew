/* eslint-disable react/prop-types */
import React from 'react';


const ParkHeader = ({parkInfo}) => (
    <div className="w-3/4 mb-4">
        <div className="h-96 flex items-end" style={{background: 'url(' + parkInfo.images[0].url + ')', backgroundSize: '100%', backgroundPosition: '50% 25%', backgroundRepeat: 'no-repeat'}}>
            <div className="z-10 w-full bg-gray-900 bg-opacity-80 px-8">
                <h3 className="text-white text-4xl mt-8">{parkInfo.fullName}</h3>
                <div className="text-white my-4">{parkInfo.description}</div>
            </div></div>

    </div>

);

ParkHeader.propTypes = {

};

export default ParkHeader;