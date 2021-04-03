
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { shape } from 'prop-types';
import AlertCard from '../../components/AlertCard/';
import ActivityCard from '../../components/ActivityCard/';
import CampgroundCard from '../../components/CampgroundCard/';
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

    if (loading) return null;
    return (
        <>
            <div className="flex flex-col">
                <h3 className="text-4xl m-8">{parkInfo.fullName}</h3>
                <div className="mx-8">{parkInfo.description}</div>
                <img className="m-8 w-80" src={`${parkInfo.images[0].url}`}></img>
                <button className="text-center w-32 px-8 py-4 mx-8 bg-gray-100 border rounded-xl border-gray-500 text-lg" onClick={() => history.goBack()}>Back</button>
                <h3 className="text-4xl m-8">Things to do</h3>

                <div className="flex flex-wrap mx-6">
                    {thingsToDo.slice([0],[4]).map((thing, i) =>
                        <ActivityCard key={i} activityData={thingsToDo[i]}/>
                    )}
                </div>
                <h3 className="text-4xl m-8">Where to stay</h3>
                <div className="flex flex-col w-full">
                    {campgrounds.map((campground, i) =>
                        <CampgroundCard key={i} campground={campgrounds[i]}/>
                    )}</div>
                <h3 className="text-4xl m-8">Alerts</h3>
                <div className="flex flex-wrap w-2/3 mx-4">
                    {alerts.map((alert, i) =>
                        <AlertCard key={i} alertData={alerts[i]} />
                    )}
                </div>
            </div>
        </>
    );
};

Park.propTypes = {
    match: shape({}).isRequired
};

export default Park;