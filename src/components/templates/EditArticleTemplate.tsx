import PrimaryNavbar from '../organisms/PrimaryNavbar'
import Sidebar from '../organisms/Sidebar'
import Footer from '../molecules/Footer'
import Container from '../atoms/Container'
import FormEditArticle from '../molecules/FormEditArticle'

type Props = {
}

const CreateArticleTemplate = (props: Props) => {
  return (
    <div className='flex flex-row-reverse min-h-screen w-full'>
      <div className='flex flex-col justify-between w-full'>
        <PrimaryNavbar />
        <Container>
            <FormEditArticle />
        </Container>
        <Footer established={false} author='Salt Academy' authorLink='https://saltacademy.id' />
      </div>
      <div className='flex flex-col w-1/5'>
        <Sidebar />
      </div>
    </div>
  )
}

export default CreateArticleTemplate