import React from 'react'

const Square = ({color, title}) => (
  <div style={{
    width: '100px',
    height: '100px',
    backgroundColor: color
  }} onClick={ (e) => {
    alert(title)
  }}/>
)

export default Square