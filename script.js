$.get( "index.html", function( data ) {
    $( ".result" ).html( data );
    document.write( "Load was performed." );
  });

$.get( "api.json", function( data ) {
    document.write( "Data Loaded: " + data );
  });

  $.get( "api.json", { name: "John", time: "2pm" } )
  .done(function( data ) {
    document.write( "Data Loaded: " + data );
  });

  $.get( "api.json", function( data ) {
    $( "body" )
      .append( "Name: " + data.q ) // John
      .append( "Time: " + data.device ); //  2pm
  }, "json" );