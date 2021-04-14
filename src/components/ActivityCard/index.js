/* eslint-disable react/prop-types */

import React from 'react';
import { shape } from 'prop-types';

const ActivityCard = ({ activityData, cardStyle }) => (
    <div className={cardStyle}>
        <div className="text-2xl">{activityData.title}</div>
        <img className="w-40 my-4" src={`${activityData.images[0].url}`}></img>
        <div>{activityData.shortDescription}</div>
    </div>
);

ActivityCard.propTypes = {
    alertData: shape({}).isRequired
};

export default ActivityCard;
