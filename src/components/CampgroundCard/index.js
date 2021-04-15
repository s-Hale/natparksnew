
import React from 'react';
import { shape, string } from 'prop-types';


const CampgroundCard = ({ campground, cardStyle }) => {

    const truncateDescription =(string) => string && string.length > 150 ? string.slice(0, 145).split(' ').slice(0, -1).join(' ') + ('...') : string;


    return(
        <div className={cardStyle}>
            <div className="h-20 m-4">
                <h2 className="text-2xl">{campground.name}</h2>
            </div>
            {campground.images[0] && <div className="w-full h-40" style={{background: 'url(' + campground.images[0].url + ')', backgroundSize: 'cover'}}></div>}
            <div className="m-4"><p className="lato tracking-wide text-gray-800 font-semibold">{truncateDescription(campground.description)}</p></div>
        </div>
    );
};

CampgroundCard.propTypes = {
    campground: shape({}).isRequired,
    cardStyle: string.isRequired
};

export default CampgroundCard;
