
document.getElementById("issueInputForm").addEventListener("submit",SetIssues);

function SetIssues(){

let  saveDesc = document.getElementById("issueDescInput").value;
console.log(saveDesc);
let saverityInput = document.getElementById("issueSeverityInput").value;
console.log(saverityInput);


let X = document.getElementById("er").value;
console.log(X);


}











function fetchIssues() {

    let issues = JSON.parse(localStorage.getItem("SetIssues"));
    console.log(issues);
    let issueList1;
    issueList1= document.getElementById("issueList").innerHTML +=" ";
    console.log(issueList1);
       //issueList.innerHTML = " ";
    for (let i = 0; i < issues.length; i++) {

       let id =issues[i].id;
        let desc = issues[i].desc;
        let serverity = issues[i].serverity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;

issueList.innerHTML += `<div class="well">
<h6>Issue ID : ${id}
<p>
<span class="label label-info">
    ${status}
    </span></p>              
    <h3>${desc}</h3>
    <span class= "glyphicon glyphicon-time ">
    <p>
    ${serverity}
    </p>
    </span>
    <p>
    <span class="glyphicon glyphicon-user">
    ${assignedTo}
    </span>
    </p>
    <a class=btn btn-warning onclick="CloseIsue(${id});">Close Issue</a>
 <a class="btn btn-danger" onclick="DeleteIssue(${id})">Delete Issue </a>
    </div>`

    }

   // issueList.innerHTML += "<div class = 'well'>" + "<h6>Issue ID: " + id + "<p><span class= label label-info> " + status + "</span></p>" + "<h3> " + desc + "</h3>" + "<p><span class= 'glyphicon glyphicon-time '></span>" + serverity + "</p>" + "<p><span class= 'glyphicon glyphicon-user '></span>" + assignedTo + "</p>" + '<a href="#" onclick="Closed(\'' + id + '\' )" class="btn btn-warning">Close </a>' + '<a Class="btn btn-danger" onclick="Delete(\'' + id + '\')">Delete</a>' + '</div>';



} 