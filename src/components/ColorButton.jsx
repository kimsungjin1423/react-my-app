import React from 'react'

function ColorButton(props) {
  //props 확인
  console.log(props.bgColor, props.color, props.children);
  const {bgColor,color,children} = props;
  return (
    <button style={{
      background: bgColor,
      padding: '5px',
      border: 'none',
      backgroundColor:color,
    }}>
      {children}
    </button>
  )
}

export default ColorButton
