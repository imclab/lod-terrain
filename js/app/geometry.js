define( ["three"], function ( THREE ) {
  var plane = new THREE.PlaneGeometry( 1, 1, 32, 32 );
  // Place origin at bottom left corner, rather than center
  var m = new THREE.Matrix4();
  m.makeTranslation( 0.5, 0.5, 0 );
  plane.applyMatrix( m );
  return {
    cube: new THREE.CubeGeometry( 200, 200, 200 ),
    plane: plane
  };
} );
