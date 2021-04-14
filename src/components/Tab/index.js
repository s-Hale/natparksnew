/* eslint-disable react/prop-types */
import React from 'react';
import { string, func } from 'prop-types';

const Tab = ({activeTab, label, onClickTab}) => {

    const onClick = () => {
        onClickTab(label);
    };

    let className = 'tab-list-item';

    if (activeTab === label) {
        className += ' tab-list-active';
    }
    return (
        <li
            className={className}
            onClick={onClick}
        >
            {label}
        </li>);
};

Tab.propTypes = {
    activeTab: string.isRequired,
    label:string.isRequired,
    onClick: func.isRequired,
};

export default Tab;