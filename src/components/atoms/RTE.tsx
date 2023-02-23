import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const RichTextEditor = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

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
    </div>
  );
};

export default RichTextEditor;
