import React from 'react';
import { shape } from 'prop-types';

const AlertCard = ({ alertData }) => (
    <div className="border border-dotted border-gray-500 rounded-lg bg-gray-200 p-8 m-4 w-96">
        <h3 className="text-xl">
            {alertData.title}
        </h3>
        <div className="flex justify-center">
            <img
                className="w-20 my-8"
                alt="bear"
                src="https://www.dropbox.com/s/ncqh09fv2b6jvlg/bear.png?raw=1"
            />
        </div>
        <p>
            {alertData.description}
        </p>
    </div>
);

AlertCard.propTypes = {
    alertData: shape({}).isRequired
};

export default AlertCard;