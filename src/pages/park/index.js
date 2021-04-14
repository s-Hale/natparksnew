
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { shape } from 'prop-types';
import AlertCard from '../../components/AlertCard/';
import ActivityCard from '../../components/ActivityCard/';
import CampgroundCard from '../../components/CampgroundCard/';
import Tabs from '../../components/Tabs';

import {fetchAlerts, fetchParkInfo, fetchCampgrounds, fetchThingsToDo} from '../../api/api.js';

const Park = ({match}) => {
    let history = useHistory();
    const [parkInfo, setParkInfo] = useState([]);
    const [campgrounds, setCampgrounds] = useState([]);
    const [thingsToDo, setThingsToDo] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);

    const parkCode = match.params.parkCode;
    useEffect(()=> {
        Promise.all([
            fetchParkInfo(parkCode),
            fetchAlerts(parkCode),
            fetchCampgrounds(parkCode),
            fetchThingsToDo(parkCode)
        ])
            .then(([parkInfo, alerts, campgrounds, thingstodo]) => {
                setParkInfo(parkInfo.data[0]);
                setAlerts(alerts.data);
                setCampgrounds(campgrounds.data);
                setThingsToDo(thingstodo.data);
                setLoading(false);
            });
    }, []);

    const cardStyle = 'border border-gray-500 bg-gray-100 p-4';
    const cardArrangement = 'flex space-x-4';

    if (loading) return null;
    return (
        <>

            <div className="flex flex-col items-center">
                <div className="w-3/4">
                    <h3 className="text-4xl my-4">{parkInfo.fullName}</h3>
                    <div className="mb-4">{parkInfo.description}</div>
                    <img className="my-8 w-80" src={`${parkInfo.images[0].url}`}></img>
                    <button className="text-center w-32 px-8 py-4 mb-4 bg-gray-100 border rounded-xl border-gray-500 text-lg" onClick={() => history.goBack()}>Back</button>
                </div>

                <div className="w-3/4 border border-gray-500 bg-gray-200 bg-opacity-50">
                    <Tabs>
                        <div label="Things to do">
                            <div className={cardArrangement}>
                                {thingsToDo.slice([0],[4]).map((thing, i) =>
                                    <ActivityCard key={i} activityData={thingsToDo[i]} cardStyle={cardStyle}/>
                                )}

                            </div>
                        </div>

                        <div label="Where to stay">
                            <div className={cardArrangement}>
                                {campgrounds.map((campground, i) =>
                                    <CampgroundCard key={i} campground={campgrounds[i]} cardStyle={cardStyle}/>
                                )}
                            </div>
                        </div>

                        <div label="Alerts">
                            <div className={cardArrangement}>
                                {alerts.map((alert, i) =>
                                    <AlertCard key={i} alertData={alerts[i]} cardStyle={cardStyle}/>
                                )}
                            </div>
                        </div>

                    </Tabs>
                </div>
            </div>





        </>
    );
};

Park.propTypes = {
    match: shape({}).isRequired
};

export default Park;