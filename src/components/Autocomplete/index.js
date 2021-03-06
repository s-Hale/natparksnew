import React, {useState} from 'react';
import { shape, arrayOf } from 'prop-types';
import { Link } from 'react-router-dom';


const Autocomplete = ({options}) => {
    const [activeOption, setActiveOption]=useState(0);
    const [filteredOptions, setFilteredOptions]=useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [userInput, setUserInput] = useState('');

    const onChange =(e)=> {
        const userInput = e.currentTarget.value;
        const filteredOptions = options.filter(
            (option) =>
                option.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveOption(0),
        setFilteredOptions(filteredOptions),
        setShowOptions( true),
        setUserInput(userInput);
    };

    const onClick = (e) => {
        setActiveOption(0),
        setFilteredOptions ([]),
        setShowOptions (false),
        setUserInput(e.currentTarget.innerText);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            setActiveOption(0),
            setShowOptions(false),
            setUserInput(filteredOptions[activeOption]);

        } else if (e.keyCode === 38) {
            if (activeOption === 0) {
                return;
            }
            setActiveOption(activeOption - 1);
        } else if (e.keyCode === 40) {
            if (activeOption - 1 === filteredOptions.length) {
                return;
            }
            setActiveOption(activeOption + 1);
        }
    };

    let optionList;
    if (showOptions && userInput) {
        if (filteredOptions.length) {
            optionList = (
                <ul className="options">
                    {filteredOptions.map((option, index) => {

                        let className;
                        if (index === activeOption) {
                            className = 'option-active';
                        }
                        return (
                            <Link
                                to={{pathname: `/park/${option.parkCode}`}}
                                className={className}
                                key={option.parkCode}
                                onClick={onClick}>
                                {option.name}
                            </Link>
                        );
                    })}
                </ul>
            );
        } else {
            optionList = (
                <div className="text-gray-500 ml-2 mt-1">
                    <em>None found</em>
                </div>
            );
        }
    }
    return(

        <div className="w-2/6 mt-40 m-auto mb-8 m-auto">
            <h3 className="text-4xl mb-3 ml-2 text-gray-800">Start your adventure here</h3>
            <input type="text" className="border-2 border-gray-500 rounded-xl text-lg p-4 w-full focus:outline-none focus:border-blue-300" onChange={onChange} onKeyDown={onKeyDown} value={userInput}/>
            {optionList}
        </div>


    );
};

Autocomplete.propTypes = {
    options: arrayOf(shape({})).isRequired
};


export default Autocomplete;