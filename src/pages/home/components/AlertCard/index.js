import React from 'react';



const AlertCard = ({ alertData }) => (
    <div className="alert-card">

      <p>
       {alertData.category}
      </p>
      <p>
       {alertData.title}
      </p>
      <p>
       {alertData.description}
      </p>

    </div>
  );


export default AlertCard;