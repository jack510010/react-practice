import './ExpenseItem.css'

function ExpenseItem(props) {
  //這個通常取名叫props， 這樣比較不容易搞混。
  /* 
  props is a super important concept because it allows you to make your components reuseable
  and it allows you to pass data from another component to this component.
  */

  const month = props.date.toLocaleString('zh-TW', { month: 'long' }) // 可以去w3school 查詢 date.toLocaleString 的使用方法
  const day = props.date.toLocaleString('zh-TW', { day: '2-digit' })
  const year = props.date.getFullYear() // 內建的 func， 會是西元20XX年的樣子。

  return (
    <div className="expense-item">
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
