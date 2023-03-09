import React from 'react'

type Props = {
    type: string,
    placeholder: string,
    title: string
}

const InputCustom = (props: Props) => {
    return (
        <div>
            <label>
                {props.title}
            </label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                className="px-2 py-2 border border-gray-800 focus:border-gray-400 lg:w-full md:w-full rounded-md"
            />
        </div>
    )
}

export default InputCustom