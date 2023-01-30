import React from 'react'
import MobileNavbar from './MobileNavbar'

type Props = {}

const PrimaryNavbar = (props: Props) => {
  return (
    <nav>
      <div>
        <h2>Avatar Here</h2>
      </div>
      <MobileNavbar />
    </nav>
  )
}

export default PrimaryNavbar