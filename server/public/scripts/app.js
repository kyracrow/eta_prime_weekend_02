$( function() {

  // The source variable contains all the html inside my people id
  var source = $( "#people" ).html();

  //TheTemplate variable converts source html into Handlebars
  var theTemplate = Handlebars.compile( source );

  var completeHandlebarsTemplate;

  //Starting position at array of data is 5
  var person = 4;

  //Data is a global variable that stores my json object
  var students;

  //This .ajax function grabs json data...when its '.done' grabbing the data
  // it passes the data to the shoveToTemplate function
$.ajax( {
  url:"/data/eta.json"
    } ).done( function( data ) {
      students = data;
        shoveToTemplate( );
    } );

// The shoveToTemplate function takes the data and passes into theTemplate and
//specifies which data to use by data.eta [person].
function shoveToTemplate ( ) {
  completeHandlebarsTemplate = theTemplate( students.eta[ person ] );

  //CompleteHandlebarsTemplate is appended to the body
    $( "section" ).html( completeHandlebarsTemplate );
}

$( ".prevButton" ).on( "click", function() {
  console.log( "Hello" );

} );

} );
