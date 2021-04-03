import React from 'react';
import Autocomplete from './../../components/Autocomplete/index';
import parkCodes from './assets/parkcodes.js';
import glacierIcon from '../../components/assets/003-glacier.png';
import canyonIcon from '../../components/assets/003-canyon.png';
import cascadeIcon from '../../components/assets/001-cascade.png';
import forestIcon from '../../components/assets/009-forest.png';
import lakeIcon from '../../components/assets/010-lake.png';
import desertIcon from '../../components/assets/002-desert.png';

const Home = () =>
    <>
        <Autocomplete options={parkCodes}/>

        <div className="mt-10 flex justify-center pr-4">
            <img className="w-24 mx-6" src={glacierIcon}></img>
            <img className="w-24 mx-6" src={canyonIcon}></img>
            <img className="w-24 mx-6" src={desertIcon}></img>
            <img className="w-24 mx-6" src={cascadeIcon}></img>
            <img className="w-24 mx-6" src={forestIcon}></img>
            <img className="w-24 mx-6" src={lakeIcon}></img>
        </div>
    </>

;


export default Home;