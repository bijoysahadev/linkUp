import React from 'react'

const Image = ({className,alt,src}) => {
  return (
    <img className={className} src={src} alt={alt} />
  )
}

export default Image
