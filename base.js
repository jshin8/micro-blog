console.log("Sanity Check: JS is working!");

$(document).ready(function() {
    getPost();
  

});

//function to grab input from form
function getPost() {
$('.btn').click(function() {
    	event.preventDefault();	
      	postPost($('#post').val());
	});
}
//function to add input and timestamp to the DOM and then clear typebox
function postPost(content) {
	$('#postlist').append('<p>' + content + '</p>' + '@' + new Date($.now()));
	$('#post').val('');
}


