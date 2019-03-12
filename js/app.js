$.ajax({
  url: 'https://randomuser.me/api/?results=12&exc=login',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

$(document).ready(function() {
	//make the JSON request
	function displayEmployees(employee) {
		var directoryHTML = '<ul>';
		$.each(data.items, function(i, photo, name, etc) { //add in the necessary data from the API here
			directoryHTML +='<li class="employee-card">';
			directoryHTML += '<a href="' + photo.link + ' " class="profile-pic">';
			directoryHTML += '<img src="' + photo.media + '"> </a> </li>';
		});

		directoryHTML += '</ul>';
		$('#employee_gallery').html(directoryHTML);
	}
	$.getJSON(API, options, displayEmployees);

}); //end document ready

