import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPrimary from "../../atoms/Buttons/ButtonPrimary"
import ButtonSecondary from "../../atoms/Buttons/ButtonSecondary"
import Input from "../../atoms/Input"
import RichTextEditor from "./RichTextEditor"
import InputWithInfo from "../inputs/InputWithInfo"
import axios from 'axios'

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
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const publishArticle = async (e: any) => {
    e.preventDefault();
    try {
        await axios.post("http://localhost:8080/v1/article", {
            title: title,
            content: content,
            tags: tags,
            excerpt: excerpt,
            image: image,
        });
        navigate("/article");
    } catch (error) {
        if (error) {
            console.log(error);
            
        }
    }
};

const saveDraft = async (e: any) => {
  e.preventDefault();
  try {
      await axios.post("http://localhost:8080/v1/article", {
          title: title,
          content: content,
          tags: tags,
          excerpt: excerpt,
          image: image,
      });
      navigate("/article");
  } catch (error) {
      if (error) {
          console.log(error);
          
      }
  }
};

  return (
    <div className="grid grid-cols-1">
      <section>
        <InputWithInfo infoText="Title" placeholder="A Journey to the great Article title" onChange={titleOnChange!} />
      </section>
      <section>
        <RichTextEditor />
      </section>
      <section className="flex flex-row gap-5">
        <InputWithInfo wrapperStyle="w-full" desc="To enter multiple tags please use a coma (,)" infoText="Tags" placeholder="tutorial, review, ... " onChange={tagsOnChange!} />
        <InputWithInfo wrapperStyle="w-full" infoText="Excerpt" placeholder="Some interesting excerpt" onChange={excerptOnChange!} />
        <InputWithInfo wrapperStyle="w-full" desc="Insert Featured Image" type="file" onChange={fileHandler!} />
        {/* <Input style="w-full" type="file" onchange={fileHandler!} /> */}
      </section>
      <section className="flex py-5 items-center justify-center gap-5">
        <ButtonPrimary title="save draft" action={saveDraftAction!} />
        <ButtonSecondary title="publish" action={publishAction!} />
      </section>
    </div>
  )
}

export default FormCreateArticle