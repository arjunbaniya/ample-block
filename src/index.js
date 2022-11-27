import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType( 'blocks-course/text-box', {
	icon:  {
		src: 'text-page',
		background: '#1e90ff',
		foreground: '#fff',

	},
	edit: Edit,
	save,
} );
