import './Card.css'

function Card(props) {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
  /*
    the value of this special children props will always be the content between the opening and closing tags of your custom components.
    這個 props.children 是內建的。

    custom components only support what you tell them to support. So we have to tweak the code in the card component.
    意思是共用的 .card{css} 可以提取出來沒錯，做一個公版給大家用，但還要再補上其他沒共用的 css ，不然會跑版， 譬如補上 font-size or display: flex 的class等等之類。

    
    『 const classes = 'card ' + props.className 』這串意思是 公版的card class + 其他的 class。
    然後！！！再下『 className={classes} 』
    完成之後， <Card className="expense-item"></Card> 這串就會變被看成是 className="card expense-item"
  */
}

export default Card
