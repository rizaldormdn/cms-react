import React from 'react'
import Image from '../atoms/Image';

type Props = {
  siteTitle: string;
  siteLogoUrl?: string;
}

const Header = (props: Props) => {
  return (
    <header>
      <h1 className='sr-only'>{props.siteTitle}</h1>
      {props.siteLogoUrl && <Image alt={props.siteTitle} src={props.siteLogoUrl} />}
    </header>
  )
}

export default Header