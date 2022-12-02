import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';
import { Dropdown } from '@wordpress/components';
import { DropdownMenu } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {
	const { text } = attributes;
	return (
		<>
		<BlockControls group="first" controls={[
			{
			title: "Button 1",
			icon:"admin-generic",
			onClick:() => alert('Button 1 click'),
			isActive: true,
			},
			{
				title: "Button 2",
				icon:"dashboard",
				onClick:() => alert('Button 2 click'),
				isActive: true,
			},
			]}>
			<ToolbarGroup>
				<ToolbarButton
				title= "Left Align"
				icon="editor-alignleft"
				onClick= {() => alert('left')}
				
				/>
				<ToolbarButton
				title= "Center Align"
				icon="editor-aligncenter"
				onClick= {() => alert('center')}
				
				/>
				<ToolbarButton
				title= "Right Align"
				icon="editor-alignright"
				onClick= {() => alert('right')}
				
				/>
				<ToolbarDropdownMenu
							icon="arrow-down-alt2"
							label={ __( 'More Alignments', 'text-box' ) }
							controls={ [
								{
									title: __( 'Wide', 'text-box' ),
									icon: 'align-wide',
								},
								{
									title: __( 'Full', 'text-box' ),
									icon: 'align-full-width',
								},
							] }
						/>
			</ToolbarGroup>

			</BlockControls>
		<RichText
			{ ...useBlockProps() }
			onChange={ ( value ) => setAttributes( { text: value } ) }
			value={ text }
			placeholder={ __( 'Your Text', 'text-box' ) }
			tagName="h4"
			allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
			/>
	
	</>
	);
}
