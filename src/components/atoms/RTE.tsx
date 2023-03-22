import { useState, useEffect } from 'react';
import { EditorState, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import axios from 'axios';

type Article = {
    title: string,
}

const RichTextEditor = () => {
    const [first, setfirst] = useState<Article>(Object)
    const init = first.title

    useEffect(() => {
        axios.get(`http://localhost:8080/v1/articles?search=Saya baik`).then((res) => {
            setfirst(res.data.data.articles[0])
            console.log(res.data.data);

        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const [editorState, setEditorState] = useState(() => {
        const content = {
            entityMap: {},
            blocks: [
                {
                    key: '1',
                    text: init,
                    type: 'unstyled',
                    depth: 0,
                    inlineStyleRanges: [],
                    entityRanges: [],
                    data: {},
                },
            ],
        };
        const rawContentState = convertFromRaw(content);
        return EditorState.createWithContent(rawContentState);
    });

    const onEditorStateChange = (editorState: EditorState) => {
        setEditorState(editorState);
    };

    return (
        <div className='border border-gray-400 mt-5 mb-5 focus:border-gray-500 lg:w-full md:w-full rounded-md'>
            <Editor
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                wrapperClassName={'wrapper-class'}
                editorClassName={'editor-class'}
                toolbarClassName={'toolbar-class'}
            />
            <p>{init}</p>
        </div>
    );
};

export default RichTextEditor;
