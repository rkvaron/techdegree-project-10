const url = "https://randomuser.me/api/?results=12&inc=name,gender,picture,email,location,phone,dob&nat=gb,us,es&exc=login";
let employeeData = [];
//CAPITALIZE LETTERS and fixing data formatting

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeCase(str) {
    var arr = str.split(' ');
    var t;
    var newt;
    var newarr = arr.map(function(d){
        t = d.split('');
        newt = t.map(function(d, i){
                  if(i === 0) {
                     return d.toUpperCase();
                    }
                 return d.toLowerCase();
               });
        return newt.join('');
      });
    var s = newarr.join(' ');
    return s;
  }

  function convertDOB(str){
  	var m = str.substring(5,7);
  	var d = str.substring(8,10);
  	var y = str.substring(0,4);
  	var formattedDOB = m +'/' + d +'/' + y;
  	return formattedDOB;
  }

//GET RANDOM USER DATA USING AJAX AND BUILD EMPLOYEE CARD HTML
$.ajax({
  url,
  dataType: 'json',
  success: function(data) {
  	console.log(data);
  	let directoryHTML = '';
  	$.each(data.results, function(i){
  		//loop each employee 
  		let photo = data.results[i].picture.large;
  		let firstname = capitalizeFirstLetter(data.results[i].name.first);
  		let lastname = capitalizeFirstLetter(data.results[i].name.last);
  		let email = data.results[i].email;
  		let city = capitalizeCase(data.results[i].location.city);
  		let phone = data.results[i].phone;
  		let address = capitalizeCase(data.results[i].location.street) +', '+ city + ', ' + capitalizeCase(data.results[i].location.state) + ' ' + data.results[i].location.postcode;
  		let dob = convertDOB(data.results[i].dob.date);

  		//write employee's card data
  		directoryHTML += '<div class="employee" id="employee' +i+ '">';
  		directoryHTML += '<a><li><div class="employeePic">';
  		directoryHTML += '<img src="' + photo + '" alt="Picture of ' + firstname + '"" />'+'</div>';
		directoryHTML += '<div class="employeeText"><p class="name">'+ firstname + ' ' + lastname + '</p>';	
		directoryHTML += '<p class="email">' + email + '</p>';
		directoryHTML += '<p class="location">' + city + '</p>';
		directoryHTML += '<p class="phone">' + phone + '</p>';
		directoryHTML += '<p class="address">' + address + '</p>';
		directoryHTML += '<p class="dob">' + dob + '</p></div></li></a></div>';

		}); //end loop

		directoryHTML += '</ul>';
		//PLACE IT INTO THE #EMPLOYEEGALLERY DIV
		$('#employeeGallery').html(directoryHTML);

  	}
  	}); //end AJAX








