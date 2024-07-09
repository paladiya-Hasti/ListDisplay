import React from 'react'


const Item = ({thumbnail,title,price,category}) => {

  return (
    <div id='box2'>
        <img src={thumbnail} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <p>{category}</p>
        <button>buy</button>
    </div>
  )
}

export default Item