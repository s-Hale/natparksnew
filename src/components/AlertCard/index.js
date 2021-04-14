import React from 'react';
import { shape, string } from 'prop-types';


const AlertCard = ({ alertData, cardStyle }) => (
    <div className={cardStyle}>
        <h3 className="text-xl">
            {alertData.title}
        </h3>

        <img
            className="w-20 my-2"
            alt="bear"
            src="https://www.dropbox.com/s/ncqh09fv2b6jvlg/bear.png?raw=1"
        />

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