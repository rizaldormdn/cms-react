import ButtonPrimary from "../../atoms/Buttons/ButtonPrimary"
import ButtonSecondary from "../../atoms/Buttons/ButtonSecondary"
import Input from "../../atoms/Input"
import RichTextEditor from "../../atoms/RTE"
import InputWithInfo from "../inputs/InputWithInfo"

type Props = {
  saveDraftAction?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  publishAction?: (e: React.MouseEvent<Element, MouseEvent>) => void;
  titleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  tagsOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  excerptOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  fileHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormCreateArticle = ({
  saveDraftAction,
  excerptOnChange,
  fileHandler,
  publishAction,
  tagsOnChange,
  titleOnChange
}: Props) => {
  return (
    <div className="grid grid-cols-1">
      <section>
        <InputWithInfo infoText="Title" placeholder="A Journey to the great Article title" onChange={titleOnChange!} />
      </section>
      <section>
        <RichTextEditor />
      </section>
      <section className="flex flex-row gap-5 items-end flex-wrap">
        <InputWithInfo wrapperStyle="w-1/3" infoText="Tags" placeholder="tutorial, review, ... " onChange={tagsOnChange!} />
        <InputWithInfo wrapperStyle="w-1/3" infoText="Excerpt" placeholder="Some interesting excerpt" onChange={excerptOnChange!} />
        <Input style="w-1/3" type="file" onchange={fileHandler!} />
      </section>
      <section className="flex py-5 items-center justify-center gap-5">
        <ButtonPrimary title="save draft" action={saveDraftAction!} />
        <ButtonSecondary title="publish" action={publishAction!} />
      </section>
    </div>
  )
}

export default FormCreateArticle