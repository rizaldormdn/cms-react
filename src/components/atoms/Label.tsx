import { type } from 'os'
import React from 'react'

type Props = {
    label: string,
    labelStyle?: string,
    style?: string
}
const Label = (props: Props) => {
  return (
    <div className={`${props.style}`} >
        <label className={`${props.labelStyle}`}>{props.label}</label>
    </div>
  )
}

export default Label