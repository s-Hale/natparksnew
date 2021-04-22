/* eslint-disable react/prop-types */
import React from 'react';


const ParkHeader = ({parkInfo}) => (
    <div className="w-3/4 mb-4">
        <div className="h-1/3 md:h-96 flex md:items-end" style={{background: 'url(' + parkInfo.images[0].url + ')', backgroundSize: '100%', backgroundPosition: '50% 25%', backgroundRepeat: 'no-repeat'}}>
            <div className="bg-gray-900 md:bg-opacity-80 px-8">
                <h3 className="text-white text-4xl mt-8">{parkInfo.fullName}</h3>
                <div className="text-white my-4">{parkInfo.description}</div>
            </div></div>

    </div>

);

ParkHeader.propTypes = {

};

export default ParkHeader;