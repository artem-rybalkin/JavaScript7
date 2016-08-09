  $(document).ready(function() {
  	$( "#tabs-2" ).hide ();
  	$( "#tabs-3" ).hide ();
  	$( "#tabs_1" ).click(function(){
  		$( "#tabs-1" ).show ();
  		$( "#tabs-2" ).hide ();
	  	$( "#tabs-3" ).hide ();
  		
  	});
  	$( "#tabs_2" ).click(function(){
  		$( "#tabs-2" ).show();
  		$( "#tabs-1" ).hide ();
	  	$( "#tabs-3" ).hide ();
  	});
  	$( "#tabs_3" ).click(function(){
  		$( "#tabs-3" ).show();
  		$( "#tabs-2" ).hide ();
	  	$( "#tabs-1" ).hide ();
  	});
  } );