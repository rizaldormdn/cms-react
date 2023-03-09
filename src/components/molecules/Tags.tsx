import React from 'react'
import Input from '../atoms/Input'
import Label from '../atoms/Label'

const Tags = () => {
  return (
    <div>
        <Label label='Tags'/>
        <Input placeHolder='To enter multiple tags please use a coma (,)' />
    </div>
  )
}

export default Tags