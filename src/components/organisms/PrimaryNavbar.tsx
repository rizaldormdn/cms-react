import React from 'react'
import MobileNavbar from './MobileNavbar'
import BadgeAvatars from '../molecules/BadgeAvatars'

type Props = {}

const PrimaryNavbar = (props: Props) => {
  return (
    <nav>
      <div className='flex float-right pr-4 mt-2 '>
      <BadgeAvatars/>
      </div>
      <MobileNavbar />
    </nav>
  )
}

export default PrimaryNavbar