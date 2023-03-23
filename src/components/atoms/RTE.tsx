import { useState, useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw, AtomicBlockUtils } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import axios from 'axios';

type Props = {}

const RichTextEditor = ({ }: Props) => {
	const [editorState, setEditorState] = useState(() => {
		const content = {
			entityMap: {},
			blocks: [
				{
					key: '1',
					text: 'Default value',
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

	const toolbarOptions = {
		fontSize: {
			options: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 36, 48, 60, 72, 96],
			className: undefined,
			component: undefined,
			dropdown: true,
			dropdownClassName: undefined,
		  },
		  fontFamily: {
			options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
			className: undefined,
			component: undefined,
			dropdownClassName: undefined,
		  },
	  };

	const handleImageUpload = async (file: File) => {
		const formData = new FormData();
		formData.append('image', file);
		const response = await fetch('/api/upload', {
		  method: 'POST',
		  body: formData,
		});
		const imageUrl = await response.text();
		const contentState = editorState.getCurrentContent();
		const contentStateWithEntity = contentState.createEntity(
		  'IMAGE',
		  'IMMUTABLE',
		  { src: imageUrl }
		);
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		const newEditorState = EditorState.set(editorState, {
		  currentContent: contentStateWithEntity,
		});
		return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
	  };

	return (
		<div className="border border-gray-400 mt-5 mb-5 focus:border-gray-500 lg:w-full md:w-full rounded-md">
			<Editor
				editorState={editorState}
				onEditorStateChange={onEditorStateChange}
				wrapperClassName="wrapper-class"
				editorClassName="editor-class"
				toolbarClassName="toolbar-class"
				// onImageUpload={handleImageUpload}
				toolbar={{toolbarOptions,
					
					image: { uploadCallback: handleImageUpload },
				}}
			/>
		</div>
	);
};

export default RichTextEditor;