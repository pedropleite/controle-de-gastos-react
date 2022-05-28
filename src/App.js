import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';
import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [filterValue, setFilterValue] = useState(2022);
    const [expenses, setExpenses] = useState([]);

    const onSaveExpenseData = (expense) => {
        setExpenses((previousStat) => {
            return [expense, ...previousStat];
        });
    };

    const enteringFilter = (value) => {
        setFilterValue(value);
    };

    const removeExpense = (event) => {
        const id = event;
        console.log(id);
        setExpenses(
            expenses.filter((expense) => {
                return expense.id !== id;
            })
        );
    };

    return (
        <div>
            <NewExpense onSaveExpenseData={onSaveExpenseData} />
            <div className="expenses">
                <ExpensesFilter enteringFilter={enteringFilter} filter={enteringFilter} />
                <ExpenseItem expenses={expenses} filter={filterValue} removeExpense={removeExpense} />
            </div>
        </div>
    );
};

export default App;
