import React from 'react'
import errorImg from '../../../assets/image/404.png'
const Error = () => {
  return (
    <div>
      <div className="Error-Group">
        <img className="error-image" src={errorImg} />
      </div>
    </div>
  )
}

export default Error