import AdminTemplate from '../../templates/AdminTemplate'
import FormCreateArticle from '../../molecules/forms/FormCreateArticle'

const CreateArticlePage = () => {
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(e.target.value);
  }

  return (
    <AdminTemplate pageTitle='Create Article'>
      <FormCreateArticle fileHandler={fileHandler} />
    </AdminTemplate>
  )
}

export default CreateArticlePage