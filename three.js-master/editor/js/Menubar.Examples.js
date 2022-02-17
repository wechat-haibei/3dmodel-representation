import * as THREE from 'three';

import { UIPanel, UIRow } from './libs/ui.js';

function MenubarExamples( editor ) {

	var strings = editor.strings;

	var container = new UIPanel();
	container.setClass( 'menu' );

	var title = new UIPanel();
	title.setClass( 'title' );
	title.setTextContent( strings.getKey( 'menubar/examples' ) );
	container.add( title );

	var options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Examples

	var items = [
		{ title: 'menubar/examples/8', file: 'scene1.app.json' },
		
		{ title: 'menubar/examples/19-22', file: 'scene2.app.json' },
		{ title: 'menubar/examples/24', file: 'scene3.app.json' }
	];

	var loader = new THREE.FileLoader();

	for ( var i = 0; i < items.length; i ++ ) {

		( function ( i ) {

			var item = items[ i ];

			var option = new UIRow();
			option.setClass( 'option' );
			option.setTextContent( strings.getKey( item.title ) );
			option.onClick( function () {

				if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

					loader.load( 'examples/' + item.file, function ( text ) {

						editor.clear();
						editor.fromJSON( JSON.parse( text ) );

					} );

				}

			} );
			options.add( option );

		} )( i );

	}

	return container;

}

export { MenubarExamples };
