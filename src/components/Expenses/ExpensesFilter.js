import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const handleSelect = (event) => {
        props.filter(event.target.value);
    };
    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filtre pelo ano</label>
                <select onChange={handleSelect}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
