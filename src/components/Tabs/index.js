/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import Tab from '../Tab/';

const Tabs = ({children}) => {
    const [activeTab, setActiveTab]=useState('Things to do');

    const onClickTab = (tab) => {
        setActiveTab(tab );
    };

    return (
        <div>
            <div className="tabs">
                <ol className="tab-list flex">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClickTab={onClickTab}
                            />
                        );
                    })}
                </ol>
                <div className="tab-content">
                    {children.map((child) => {
                        if (child.props.label !== activeTab) return undefined;
                        return child.props.children;
                    })}
                </div>
            </div>
        </div>);
};


export default Tabs;