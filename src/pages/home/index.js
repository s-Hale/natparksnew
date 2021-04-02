import React from 'react';
import Autocomplete from './../../components/Autocomplete/index';
import parkCodes from './assets/parkcodes.js';

const Home = () =>
    <>
        <Autocomplete options={parkCodes}/>
    </>

;


export default Home;