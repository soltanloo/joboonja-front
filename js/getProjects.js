var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getProjects() {
  var http = new XMLHttpRequest();
  var url = "http://localhost:8080/projects";
  http.open("GET", url, true);
  http.onreadystatechange = function() {
      if(http.readyState == 4) {
          console.log(http.responseText);
      }
  }
  http.send();
}
getProjects();