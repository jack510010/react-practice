import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  //這個通常取名叫props， 這樣比較不容易搞混。
  /* 
  props is a super important concept because it allows you to make your components reuseable
  and it allows you to pass data from another component to this component.
  */

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
