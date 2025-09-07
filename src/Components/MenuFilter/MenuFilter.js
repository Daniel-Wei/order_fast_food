import MenuFilterModule from './MenuFilter.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';

const MenuFilter = ({ onFilterTextChanged }) => {
    const inputRef = useRef();
    const [filter, setFilter] = useState('');

    // Requirement: Only trigger filtering after the user has finished typing.
    // Do not filter while the user is still typing.
    // A user is considered "finished typing" if no new input occurs within 0.5s.
    useEffect(() => {
        const inputTimer = setTimeout(() => {
            onFilterTextChanged(filter.trim());
        }, 500);

        // Cleanup function: runs before the next effect call.
        // If a new timer is started, cancel the previous one to avoid multiple triggers.
        return () => {
            clearTimeout(inputTimer);
        };
    }, [filter, onFilterTextChanged]);

    const onFilterInputChange = () => {
        setFilter(_ => inputRef.current.value);
    }

    return <div className={MenuFilterModule.filterContainer}>
        <div className={MenuFilterModule.inputContainer}>
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className={MenuFilterModule.magnifyingGlass}
            />
            <input type="text" 
                placeholder="Search..." 
                ref={inputRef}
                value={filter}
                onChange={onFilterInputChange}></input>

        </div>
    </div>
}

export default MenuFilter;