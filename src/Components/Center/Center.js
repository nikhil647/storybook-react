import React from 'react'

function Center(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}} >{props.children}</div>
  )
}

export default Center