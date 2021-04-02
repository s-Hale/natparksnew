/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import AlertCard from '../../components/AlertCard/';
import {fetchAlerts, fetchParkInfo, fetchCampgrounds} from '../../api/api.js';

const Park = ({match}) => {
    let history = useHistory();
    const [parkInfo, setParkInfo] = useState([]);
    const [campgrounds, setCampgrounds] = useState([]);
    const [alerts, setAlerts] = useState([]);
    const [loading, setLoading] = useState(true);

    const parkCode = match.params.parkCode;
    useEffect(()=> {
        Promise.all([
            fetchParkInfo(parkCode),
            fetchAlerts(parkCode),
            fetchCampgrounds(parkCode)
        ])
            .then(([parkInfo, alerts, campgrounds]) => {
                setParkInfo(parkInfo.data[0]);
                setAlerts(alerts.data);
                setCampgrounds(campgrounds.data);
                setLoading(false);
            });
    }, []);

    if (loading) return null;
    return (
        <>
            <div className="flex flex-col">
                <h3 className="m-6">{parkInfo.fullName}</h3>

                <div className="m-6">{parkInfo.description}</div>

                {/* <img src={`${parkInfo.images[0].url}`}></img> */}
                <button className="text-center w-32 px-8 py-4 bg-indigo-100 border rounded-xl border-indigo-500 text-lg m-6" onClick={() => history.goBack()}>Back</button>

                <div className="flex flex-col items-end">{campgrounds.map((campground, i) =>
                    <div className="flex bg-gray-100 border border-gray-500 p-4 m-4 rounded-xl" key={i}>
                        <div className="flex flex-col mr-6">
                            <h2 className="font-bold text-lg my-4">{campgrounds[i].name}</h2>
                            <p className="text">{campgrounds[i].description}</p>
                        </div>
                        {campgrounds[i].images[0] && (<img className="w-60" src={`${campgrounds[i].images[0].url}`}></img>)}

                    </div>
                )}</div>



                <div className="flex flex-wrap">
                    {alerts.map((alert, i) =>
                        <AlertCard key={i} alertData={alerts[i]} />
                    )}

                </div>


            </div>


        </>

    );
};

export default Park;