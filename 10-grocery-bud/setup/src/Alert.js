import React from 'react'

const Alert = ({ message, status }) => {
  return (
    <p className={'alert alert-' + status}>{message}</p>
  )
}

export default Alert
