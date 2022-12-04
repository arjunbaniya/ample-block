import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text , alignment } = attributes;
	const onChangeText = (newText) => {setAttributes({ text: newText}); };
	const onChangeAlignment = (newAlignment) => {setAttributes({ alignment: newAlignment}); };

	return (
		<>
			<BlockControls group="inline">
				<AlignmentToolbar value= {alignment} onChange={onChangeAlignment}/>
			</BlockControls>
		
			<RichText
				{      ...useBlockProps({
					className: `text-align-${alignment}`
				}) }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="p"
				allowedFormats={ [] }
				//style= {{textAlign: alignment}} //aligment throung predifine code
			/>
		</>
	);
}