import React from 'react'
import PrimaryNavbar from '../organisms/PrimaryNavbar'
import Sidebar from '../organisms/Sidebar'
import Footer from '../molecules/Footer'
import Container from '../atoms/Container'
import AddArticle from '../pages/AddArticle'

type Props = {
}

const AddArticleTemplate = () => {
  return (
    <div className='flex flex-row-reverse min-h-screen w-full'>
      <div className='flex flex-col justify-between w-full'>
        <PrimaryNavbar />
        <Container>
            <AddArticle />
        </Container>
        <Footer established={false} author='Salt Academy' authorLink='https://saltacademy.id' />
      </div>
      <div className='flex flex-col w-1/5'>
        <Sidebar />
      </div>
    </div>
  )
}

export default AddArticleTemplate