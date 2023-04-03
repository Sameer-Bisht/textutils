import React from 'react'

export default function Alert(props) {
  return (
   props.alert && <div style={{position : "absolute",left: "0",right: "0",top:"0",marginLeft: "auto",marginRight: "auto", width: "400px",
   }} className='my-3'>
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.msg}</strong> 
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
   </div>
  )
}
