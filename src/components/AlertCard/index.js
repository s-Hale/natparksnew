import React from 'react';
import { shape } from 'prop-types';



const AlertCard = ({ alertData }) => (
    <div className="alert-card">


        <h3>
            {alertData.title}
        </h3>
        <div className="img-row">
            <img
                className='alertIcon'
                alt="bear"
                src="https://www.dropbox.com/s/ncqh09fv2b6jvlg/bear.png?raw=1"
            />
        </div>
        <p>
            {alertData.description}
        </p>
        <p>
            {alertData.category}
        </p>
    </div>
);

AlertCard.propTypes = {
    alertData: shape({}).isRequired
};


export default AlertCard;