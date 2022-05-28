import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState, useEffect } from 'react';
import ExpensesChart from './ExpensesChart';
import bin from '../../assets/bin.png';

const ExpenseItem = (props) => {
    const filterFunction = (expense) => {
        return expense.date.getFullYear() == props.filter;
    };

    const [filteredExpenses, setFilteredExpenses] = useState(props.expenses.filter(filterFunction));

    useEffect(() => {
        setFilteredExpenses(props.expenses.filter(filterFunction));
    }, [props.filter, props.expenses]);

    let expensesContent = (
        <div className="expense-noFound">
            <p>Nenhuma dispesa foi encontrada.</p>
        </div>
    );

    const deleteExpense = (event) => {
        props.removeExpense(event.target.parentNode.parentNode.id);
    };

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <div className="expense-item" id={expense.id} key={expense.id}>
                <ExpenseDate date={expense.date} />
                <div className="expense-item__description">
                    <h2>{expense.title}</h2>
                </div>
                <div className="expense-item__price">${expense.amount}</div>
                <button type="button" className="expense-item__del" onClick={deleteExpense}>
                    <img src={bin} />
                </button>
            </div>
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredExpenses} />;{expensesContent}
        </Card>
    );
};

export default ExpenseItem;
