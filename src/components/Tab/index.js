/* eslint-disable react/prop-types */
import React from 'react';
import { string, func } from 'prop-types';

const Tab = ({activeTab, label, onClickTab}) => {

    const onClick = () => {
        onClickTab(label);
    };

    let className = 'tab-list-item text-gray-400 list-none px-8 py-4 hover:bg-gray-300 cursor-pointer';

    if (activeTab === label) {
        className += 'tab-list-active bg-gray-300 border-b-4 border-gray-500 text-gray-900';
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
    onClickTab: func.isRequired,
};

export default Tab;