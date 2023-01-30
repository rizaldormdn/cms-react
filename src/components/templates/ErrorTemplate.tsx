import React from 'react'

type Props = {
  statusCode: number
}

const ErrorTemplate = (props: Props) => {
  return (
    <div>{props.statusCode && props.statusCode} Error bad page Request, edit at <code>src/components/templates/ErrorTemplates</code></div>
  )
}

export default ErrorTemplate