import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import Home from '../src/pages/home/index';
import Park from './pages/park';

const App = ()=> {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/park/:parkCode" component={Park} />
                </Switch>
                <div className="App" />
            </div>
        </BrowserRouter>
    );
};

export default App;
