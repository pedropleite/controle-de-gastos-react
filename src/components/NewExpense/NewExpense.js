import './NewExpense.css';
import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [condiction, setCondiction] = useState(true);

    const checkCondiction = () => {
        setCondiction(!condiction);
    };

    return (
        <div className="new-expense">
            {condiction ? (
                <button className="new-expense__button openbtn" onClick={checkCondiction}>
                    ADICIONE UMA DISPESA
                </button>
            ) : (
                <ExpenseForm onSaveExpenseData={props.onSaveExpenseData} checkCondiction={checkCondiction} />
            )}
        </div>
    );
};

export default NewExpense;
