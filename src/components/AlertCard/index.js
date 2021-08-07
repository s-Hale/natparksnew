import React from 'react';
import { shape, string } from 'prop-types';
import bearIcon from '../assets/bear.png';


const AlertCard = ({ alertData, cardStyle }) => (
    <div className={cardStyle}>

        <div className="m-4">
            <h2 className="text-2xl text-gray-700">{alertData.title}</h2>
        </div>

        <div className="m-4">
            {alertData.description}
        </div>
        <div className="flex justify-end">
            <img
                className="w-20 m-2"
                alt="bear"
                src={bearIcon}
            />
        </div>
    </div>
);

AlertCard.propTypes = {
    alertData: shape({}).isRequired,
    cardStyle: string.isRequired
};

export default AlertCard;