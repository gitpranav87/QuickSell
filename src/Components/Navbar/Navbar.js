import React, { useState } from 'react';
import filterIcon from '../../Assets/Images/Display.svg';
import downIcon from '../../Assets/Images/down.svg';

import './Navbar.css';

export default function Navbar(props) {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    function handleFilterToggle(e) {
        setIsFilterVisible(!isFilterVisible);
        if (e.target.value !== undefined) {
            props.handleGroupValue(e.target.value);
        }
    }

    function handleOrderChange(e) {
        setIsFilterVisible(!isFilterVisible);
        if (e.target.value !== undefined) {
            props.handleOrderValue(e.target.value);
        }
    }

    return (
        <>
            <section className="navbar">
                <div className="navbar-container">
                    <div>
                        <div className="navbar-display-button" onClick={handleFilterToggle}>
                            <div className="navbar-display-icon navbar-filter-icon">
                                <img src={filterIcon} alt="icon" />
                            </div>
                            <div className="navbar-display-heading">
                                Display
                            </div>
                            <div className="navbar-display-icon navbar-dropdown-icon">
                                <img src={downIcon} alt="icon" />
                            </div>
                        </div>
                        <div className={isFilterVisible ? "navbar-display-dropdown navbar-display-dropdown-show" : "navbar-display-dropdown"}>
                            <div className="navbar-filters">
                                <div className="navbar-dropdown-category">
                                    Grouping
                                </div>
                                <div className="navbar-dropdown-selector">
                                    <select value={props.groupValue} onChange={handleFilterToggle} className='navbar-selector' name="grouping" id="">
                                        <option value="status">Status</option>
                                        <option value="user">User</option>
                                        <option value="priority">Priority</option>
                                    </select>
                                </div>
                            </div>
                            <div className="navbar-filters">
                                <div className="navbar-dropdown-category">
                                    Ordering
                                </div>
                                <div className="navbar-dropdown-selector">
                                    <select value={props.orderValue} onChange={handleOrderChange} className='navbar-selector' name="ordering" id="">
                                        <option value="priority">Priority</option>
                                        <option value="title">Title</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
