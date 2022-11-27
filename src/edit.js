import { __ } from '@wordpress/i18n';
import { useBlockProps , RichText} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit(attributes) {
	console.log(attributes);
	return (
		<RichText { ...useBlockProps()}  
		placeholder={__("your Content", "text-box" )}  
		tagName="h1"
		allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow othe formatting options

		/>
		
	);
}
