
import React from 'react';
import { shape, string } from 'prop-types';

const CampgroundCard = ({ campground, cardStyle }) => (
    <div className={cardStyle}>
        <h2 className="text-2xl">{campground.name}</h2>
        <div className="flex justify-center">
            {campground.images[0] && (<img className="w-56 my-4" src={`${campground.images[0].url}`}></img>)}
        </div>
        <p>{campground.description}</p>
    </div>
);

CampgroundCard.propTypes = {
    campground: shape({}).isRequired,
    cardStyle: string.isRequired
};

export default CampgroundCard;
