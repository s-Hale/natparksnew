import React from 'react';
import { string, func } from 'prop-types';

const Tab = ({activeTab, label, onClickTab}) => {

    const onClick = () => {
        onClickTab(label);
    };

    let className = 'tab-list-item text-gray-500 list-none px-8 py-4 hover:bg-gray-300 cursor-pointer w-1/3 md:w-44 text-center';

    if (activeTab === label) {
        className += 'tab-list-active bg-gray-300 border-b-4 border-gray-500 text-gray-700 w-1/3 md:w-44 text-center';
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