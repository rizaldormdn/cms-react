import React from 'react'
import ErrorTemplate from '../templates/ErrorTemplate'

const BadRequest = () => {
  return (
    <ErrorTemplate statusCode={404} />
  )
}

export default BadRequest