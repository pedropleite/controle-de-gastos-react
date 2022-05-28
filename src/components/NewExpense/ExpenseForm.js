import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            id: Math.random().toString(36),
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate + 'T00:00'),
        };

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
        props.checkCondiction();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Título</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Preço</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} required />
                </div>
                <div className="new-expense__control">
                    <label>Data</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} required />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" className="new-expense__button cancelbtn" onClick={props.checkCondiction}>
                    CANCELAR
                </button>
                <button type="submit" className="new-expense__button">
                    ADICIONAR
                </button>
            </div>
        </form>
    );
};

export default ExpenseForm;
