import React from 'react'
import Anchor from '../atoms/Anchor';

type Props = {
  established: boolean;
  author: string;
  authorLink?: string;
}

const Footer = (props: Props) => {
  return (
    <footer className='w-full py-5'>
      © {props.established ? 2023 : new Date().getFullYear()}, Made with ❤️ by <Anchor internal={false} title='Salt Academy' url="https://saltacademy.id"  />
    </footer>
  )
}

export default Footer