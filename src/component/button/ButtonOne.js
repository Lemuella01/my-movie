import React from 'react'

const ButtonOne = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
}


export default ButtonOne