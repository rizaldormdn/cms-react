import { useState, useEffect } from 'react'

const index = () => {
  const [location, setLocation] = useState()

  useEffect(() => {
    setLocation(location)
  }, [window.location])
  

  return [location, setLocation]
}

export default index