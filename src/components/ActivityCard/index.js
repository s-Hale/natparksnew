/* eslint-disable react/prop-types */

import React from 'react';
import { shape } from 'prop-types';

const ActivityCard = ({ activityData, cardStyle }) => {

    const truncateDescription =(string) => string && string.length > 140 ? string.slice(0, 138).split(' ').slice(0, -1).join(' ') + ('...') : string;

    return(
        <div className={cardStyle}>
            <div className="h-24 m-4">
                <h2 className="text-2xl">{activityData.title}</h2>
            </div>
            {activityData.images[0] && <div className="w-full h-40" style={{background: 'url(' + activityData.images[0].url + ')', backgroundSize: 'cover'}}></div>}
            <div className="m-4"><p className="noto text-gray-600 tracking-wide">{truncateDescription(activityData.shortDescription)}</p></div>
        </div>
    );
};

ActivityCard.propTypes = {
    alertData: shape({}).isRequired
};

export default ActivityCard;
