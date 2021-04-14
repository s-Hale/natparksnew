import React from 'react';
import { shape, string } from 'prop-types';
import bearIcon from '../assets/bear.png';


const AlertCard = ({ alertData, cardStyle }) => (
    <div className={cardStyle}>
        <h3 className="text-xl">
            {alertData.title}
        </h3>
        <div className="flex justify-center">
            <img
                className="w-20 my-2"
                alt="bear"
                src={bearIcon}
            />
        </div>
        <p>
            {alertData.description}
        </p>
    </div>
);

AlertCard.propTypes = {
    alertData: shape({}).isRequired,
    cardStyle: string.isRequired
};

export default AlertCard;