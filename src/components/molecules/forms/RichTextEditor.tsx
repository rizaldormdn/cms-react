import { useState } from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";



const RichTextEditor = () => {
    const [content, setContent] = useState("");

    // const imageHandler = async () => {
    //     const input = document.createElement('input');
    //     input.setAttribute('type', 'file');
    //     input.setAttribute('accept', 'image/*');
    //     input.click();
    //     input.onchange = async () => {
    //         var file: any = input && input.files ? input.files[0] : null;
    //         var formData = new FormData();
    //         formData.append("file", file);
    //         // let quillObj = quillRef.current.getEditor();

    //     };
    // }
    
    const modules = {
        toolbar: {
            container: [
                [{ font: [] }, { 'size': [] }, { 'header': [1, 2, 3, 4, 5, 6] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                [{ 'header': 1 }, { 'header': 2 }, 'blockquote', 'code-block'],
                [
                    { list: 'ordered' },
                    { list: 'bullet' },
                    { indent: '-1' },
                    { indent: '+1' },
                ],
                [{ 'direction': 'rtl' }, { 'align': [] }],
                ['link', 'image', 'clean'],
            ],
            'handlers': {
                // image: imageHandler
            }
        }
    }

    const handleChange = (value: string) => {
        setContent(value);
    };

    return (
        <div className="mx-auto h-auto w-full mt-5 mb-20">
            <ReactQuill
                style={{ height: "300px" }}
                theme="snow"
                modules={modules}
                value={content}
                onChange={setContent}
                placeholder={'type here...'}
            />
        </div>
    );
};



export default RichTextEditor