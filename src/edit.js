import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	InspectorControls,
	AlignmentToolbar,
	PanelColorSettings
} from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text, alignment,backgroundColor, textColor } = attributes;
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};
	const onbackgroundColorChange = ( newbgColor ) => {
		setAttributes( { backgroundColor: newbgColor } );
	};
	const ontextColorChange = ( newtextColor ) => {
		setAttributes( { textColor: newtextColor } );
	};
	return (
		<>
		   <InspectorControls>
		   
				<PanelBody
					title={ __( 'Background Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					<TextareaControl
						label="Text Area Label"
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					
					
					<ColorPalette

						colors={ [
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						] }
						value= { backgroundColor}
						onChange={onbackgroundColorChange}
						help="help text"

					/>
					
				</PanelBody>
				<PanelBody
					title={ __( 'Text Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
				>
					<TextControl
						label="Input Label"
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					<TextareaControl
						value={ text }
						onChange={ onChangeText }
						help="help text"
					/>
					
					
					
					<ColorPalette
					    label={ __( 'Text Color', 'text-box' ) }

						colors={ [
							{ name: 'White', color: '#fff' },
							{ name: 'black', color: '#000' },
						] }
						value= { textColor}
						onChange={ontextColorChange}
						help="help text"

					/>
				</PanelBody>
			</InspectorControls>	

			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
					style: {
						backgroundColor,
						color: textColor,
					}
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
				allowedFormats={ [] }
			/>
		</>
	);
}
