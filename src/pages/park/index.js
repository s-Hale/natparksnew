/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import fetchParkInfo from '../../api/api.js';

const Park = ({match}) => {
    let history = useHistory();
    const [parkInfo, setParkInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    const parkCode = match.params.parkCode;
    useEffect(()=> {
        fetchParkInfo(parkCode).then(res => {
            setParkInfo(res.data[0]);
            setLoading(false);
        });
    }, []);

    if (loading) return null;
    return (
        <>
            <div className="park-page-wrap">
                <h3>{parkInfo.fullName}</h3>

                <div>{parkInfo.description}</div>
                <img className="image" src={`${parkInfo.images[0].url}`}></img>




            </div>
            <button onClick={() => history.goBack()}>Back</button>
        </>

    );
};

export default Park;