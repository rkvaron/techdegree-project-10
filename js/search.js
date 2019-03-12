


function myFunction() {
  // Declare variables
  var userSearch;
  userSearch = document.getElementById('search');
  var filter;
  filter = userSearch.value.toUpperCase();
  var ul;
  ul = document.getElementById("image_gallery");
  var li;
  li = ul.getElementsByTagName('li');
  var a, i;

//  var caption = document.getElementsByTagName("A")[0].getAttribute("data-caption"); for future reference


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i+=1 ) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.getAttribute("data-caption").toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
