import React from 'react'

type Props = {
  url: string
  alt: string
}

const Image = (props: Props) => {
  return (
    <img src={props.url} alt={props.alt} loading='lazy' />
  )
}

export default Image