import React from 'react'
import Input from '../../atoms/Input'

type Props = {
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  inputStyle?: string
  value?: string
  type?:
		| "button"
		| "checkbox"
		| "color"
		| "date"
		| "datetime-local"
		| "email"
		| "file"
		| "hidden"
		| "image"
		| "month"
		| "number"
		| "password"
		| "radio"
		| "range"
		| "reset"
		| "search"
		| "submit"
		| "tel"
		| "text"
		| "time"
		| "url"
		| "week",
		wrapperStyle?: string;
		infoText?: string;
		disabled?: boolean;
}

const InputWithInfo = (props: Props) => {
  const { onChange, inputStyle, placeholder, type, value, wrapperStyle, infoText, disabled } = props

  return (
    <div className={`flex flex-col ${wrapperStyle}`}>
      <label htmlFor={type} className='text-gray-600'>{infoText}</label>
      <Input disabled={disabled} value={value} onchange={onChange} style={`${inputStyle}`} type={type ? type : "text"} placeHolder={placeholder}   />
    </div>
  )
}

export default InputWithInfo