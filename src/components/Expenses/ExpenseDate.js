import './ExpenseDate.css';
import Card from '../UI/Card';

const ExpenseDate = (props) => {
    return (
        <Card className="expense-date">
            <div className="expense-date__month">{props.date.toLocaleString('pt-br', { month: 'long' })}</div>
            <div className="expense-date__year">{props.date.getFullYear()}</div>
            <div className="expense-date__day">{props.date.toLocaleString('pt-br', { day: '2-digit' })}</div>
        </Card>
    );
};

export default ExpenseDate;
