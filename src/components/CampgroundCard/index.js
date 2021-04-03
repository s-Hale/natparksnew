
import React from 'react';
import { shape } from 'prop-types';

const CampgroundCard = ({ campground }) => (
    <div className="flex bg-gray-100 border border-gray-500 p-4 my-4 mx-8 rounded-xl justify-between">
        <div className="flex flex-col mr-6">
            <h2 className="font-bold text-lg my-4">{campground.name}</h2>
            <p className="text">{campground.description}</p>
        </div>
        {campground.images[0] && (<img className="w-48 max-h-40" src={`${campground.images[0].url}`}></img>)}
    </div>
);

CampgroundCard.propTypes = {
    campground: shape({}).isRequired
};

export default CampgroundCard;