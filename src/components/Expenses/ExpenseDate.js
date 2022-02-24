import './ExpenseDate.css'

function ExpenseDate(props) {
  const month = props.date.toLocaleString('zh-TW', { month: 'long' }) // 可以去w3school 查詢 date.toLocaleString 的使用方法
  const day = props.date.toLocaleString('zh-TW', { day: '2-digit' })
  const year = props.date.getFullYear() // 內建的 func， 會是西元20XX年的樣子。

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

export default ExpenseDate
