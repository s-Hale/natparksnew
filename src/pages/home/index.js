import React, {useEffect, useState} from 'react';
import AlertCard from '../home/components/AlertCard/index'
import fetchAlerts from '../../api/api.js'
const Home = () => {
    const [alerts, setAlerts] = useState([])

    useEffect(()=> {
      fetchAlerts('glac').then(res => {
      setAlerts(res.data);
   })
  }, [])

 return (
     <div className="alerts-wrap">
   <>
     {alerts.map((alert, i) => (
        <AlertCard alertData={alert} key={i}/>
     ))}
 </>
 </div>
 )
}

export default Home;