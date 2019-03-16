function addSkilltoUser(skillName){
    
    var myreq = new XMLHttpRequest();
    myreq.open("POST","localhost:8080/user/addskill",true);
    myreq.send("skillName=Python");
    myreq.onload = function(){
        if(myreq.status != 200){
            console.log("200 hast");
        }
        console.log("200 nist");
    }
}
console.log("Hello!");
addSkilltoUser("Python");
console.log("World!");