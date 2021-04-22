
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { shape } from 'prop-types';
import AlertCard from '../../components/AlertCard/';
import ActivityCard from '../../components/ActivityCard/';
import CampgroundCard from '../../components/CampgroundCard/';
import Tabs from '../../components/Tabs';
import ParkHeader from '../../components/ParkHeader/';

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

    const cardStyle = 'flex flex-col border border-gray-500 rounded-xl bg-gray-100 m-2 w-72';
    const cardArrangement = 'flex flex-wrap justify-center';
    if (loading) return null;
    return (
        <>
            <button className="text-center w-24 sm:w-28 px-8 py-4 m-4 bg-gray-100 border-2 rounded-xl border-gray-400 text-lg" onClick={() => history.goBack()}>Back</button>
            <div className="flex flex-col items-center">
                <ParkHeader parkInfo={parkInfo}/>

                <div className="w-3/4 border border-gray-400 bg-white bg-opacity-80">
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