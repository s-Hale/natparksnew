/* eslint-disable no-unused-vars */
import React from 'react';
import Autocomplete from './../../components/Autocomplete/index';
import parkCodes from './assets/parkcodes.js';

const Home = () => {


    return (
        <>
            <Autocomplete options={parkCodes}/>
        </>
    );
};


export default Home;