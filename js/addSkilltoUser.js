var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function addSkilltoUser(skillName, userId) {
    var http = new XMLHttpRequest();
    var url = "http://localhost:8080/users/addskill?id=" + userId;
    var params = "skillName=" + skillName;
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if(http.readyState == 4) {
            console.log(http.responseText);
        }
    }
    http.send(params);
}
addSkilltoUser("CSS", 1);