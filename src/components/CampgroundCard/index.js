
import React, {useState} from 'react';
import { shape, string } from 'prop-types';


const CampgroundCard = ({ campground, cardStyle }) => {

    const [noAmenities, setNoAmenities] = useState(false);
    const truncateDescription =(string) => string && string.length > 150 ? string.slice(0, 145).split(' ').slice(0, -1).join(' ') + ('...') : string;
    const includesYes = (data) => {
        if(!data) {
            setNoAmenities(true);
            return false;
        }
        return (data.toLowerCase().includes('yes') || data.toLowerCase().includes('seasonal') || data.toLowerCase().includes('toilets'));
    };

    const amenitieslabel = 'text-green-900 text-opacity-80';
    return (
        <div className={cardStyle}>
            <div className="h-20 m-4">
                <h2 className="text-2xl text-gray-700">{campground.name}</h2>
            </div>
            {campground.images[0] && <div className="w-full h-40" style={{background: 'url(' + campground.images[0].url + ')', backgroundSize: 'cover'}}></div>}
            <div className="mx-2 mt-2 mb-8"><p className="noto text-gray-600 tracking-wide">{truncateDescription(campground.description)}</p></div>


            <div className="text-right mt-auto mx-4 mb-4">
                {noAmenities ? <div className={amenitieslabel}>Call site for more info</div> :
                    <><div className={amenitieslabel}>{includesYes(campground.amenities.campStore) && 'Camp Store'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.cellPhoneReception) && 'Cellphone reception'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.firewoodForSale) && 'Firewood for sale'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.foodStorageLockers) && 'Food storage lockers available'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.showers[0]) && 'Showers'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.toilets[0]) && 'Toilets'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.laundry) && 'Laundry facilities'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.potableWater[0]) && 'Potable water'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.internetConnectivity) && 'Internet connectivity'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.staffOrVolunteerHostOnsite) && 'Staff or volunteers on-site'}</div>
                        <div className={amenitieslabel}>{includesYes(campground.amenities.trashRecyclingCollection) && 'Trash / Recycling collection'}</div></>
                }
            </div>
        </div>
    );
};

CampgroundCard.propTypes = {
    campground: shape({}).isRequired,
    cardStyle: string.isRequired
};

export default CampgroundCard;
