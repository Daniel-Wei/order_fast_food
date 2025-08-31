import MenuFilterModule from './MenuFilter.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';

const MenuFilter = ({ onFilterTextChanged }) => {
    const inputRef = useRef();

    const onMagnifyingGlassClicked = () => {
        onFilterTextChanged(inputRef.current.value);
    }

    const onKeyDown = (e) => {
        if(e.key === "Enter"){
             onFilterTextChanged(inputRef.current.value);
        }
    }


    return <div className={MenuFilterModule.filterContainer}>
        <div className={MenuFilterModule.inputContainer}>
            <FontAwesomeIcon 
                icon={faMagnifyingGlass} 
                className={MenuFilterModule.magnifyingGlass}
                onClick={onMagnifyingGlassClicked}
            />
            <input type="text" placeholder="Search..." ref={inputRef} onKeyDown={onKeyDown}></input>

        </div>
    </div>
}

export default MenuFilter;