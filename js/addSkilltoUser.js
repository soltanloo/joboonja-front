var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function addSkilltoUser(skillName) {
    var http = new XMLHttpRequest();
    var url = "http://localhost:8080/user/addskill";
    var params = "skillName=" + skillName;
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }
    http.send(params);
}

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
addSkilltoUser("CSS");