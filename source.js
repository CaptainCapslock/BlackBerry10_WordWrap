function scale(){
	// Elements to downsize
	e = new Array( 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'li', 'blockquote' );
	
	// Scaling size in pixels
	s = '300px';
	
	for( var i in e ){
		var o = document.getElementsByTagName( e[i] );
		for ( var j in o ){
			if( typeof o[j] === 'object' ){
				o[j].style.maxWidth = s;
				o[j].style.textAlign = 'justify';
			}
		}
	}
}