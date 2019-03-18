var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getProjects() {
  var http = new XMLHttpRequest();
  var url = "http://localhost:8080/project";
  http.open("GET", url, true);
  http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
          console.log(http.responseText);
      }
  }
  http.send();
}
getProjects();