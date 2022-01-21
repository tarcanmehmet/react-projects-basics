import React from 'react'

const Alert = ({msg, type}) => {
  return (
    <p className={`alert alert-${type==='success' ? 'success' : 'danger'}`}>{msg}</p>
  );
}

export default Alert
