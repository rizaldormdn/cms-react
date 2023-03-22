import AdminTemplate from '../../templates/AdminTemplate'
import FormCreateArticle from '../../molecules/forms/FormCreateArticle'

const EditArticlePage = () => {
  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    console.log(e.target.value);
  }

  return (
    <AdminTemplate>
      <FormCreateArticle fileHandler={fileHandler} />
    </AdminTemplate>
  )
}

export default EditArticlePage