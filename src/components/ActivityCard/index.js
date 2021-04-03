/* eslint-disable react/prop-types */

import React from 'react';
import { shape } from 'prop-types';

const ActivityCard = ({ activityData }) => (
    <div className="border border-gray-500 rounded-xl bg-gray-100 m-2 p-8 w-72">
        <div className="text-2xl ">{activityData.title}</div>
        <img className="w-40 my-4" src={`${activityData.images[0].url}`}></img>
        <div>{activityData.shortDescription}</div>
    </div>
);

ActivityCard.propTypes = {
    alertData: shape({}).isRequired
};

export default ActivityCard;