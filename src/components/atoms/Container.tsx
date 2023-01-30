import React from 'react'

type Props = {
  children: React.ReactNode
  fullsize?: boolean
}

const Container = (props: Props) => {
  return (
    <div className='flex flex-col bg-white p-2 w-full h-full rounded-sm my-2'>{props.children}</div>
  )
}

export default Container