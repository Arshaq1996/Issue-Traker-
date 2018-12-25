
document.getElementById("issueInputForm").addEventListener("submit",SetIssues);

function SetIssues(){
let  saveDesc = document.getElementById("issueDescInput").value;
console.log(saveDesc);
let saverityInput = document.getElementById("issueSverityInput").value;
console.log(saverityInput);
let isuueAssigned = document.getElementById("issueAssignedToInput").value;



}











function fetchIssues() {

    let issues = JSON.parse(localStorage.getItem("issues"));
    console.log(issues);
    let issueList ;
    issueList1= document.getElementById("issueList").innerHTML =" ";
    console.log(issueList);
       //issueList.innerHTML = " ";
    for (let i = 0; i < issueList1.length; i++) {

        let id =issues[i].id;
        let desc = issues[i].desc;
        let serverity = issues[i].serverity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;


        issueList.innerHTML += "<div class = 'well'>" + "<h6>Issue ID: " + id + "<p><span class= label label-info> " + status + "</span></p>" + "<h3> " + desc + "</h3>" + "<p><span class= 'glyphicon glyphicon-time '></span>" + serverity + "</p>" + "<p><span class= 'glyphicon glyphicon-user '></span>" + assignedTo + "</p>" + '<a href="#" onclick="Closed(\'' + id + '\' )" class="btn btn-warning">Close </a>' + '<a Class="btn btn-danger" onclick="Delete(\'' + id + '\')">Delete</a>' + '</div>';


    }


}