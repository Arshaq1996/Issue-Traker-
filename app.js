function fetchIssues() {


    let issues = JSON.parse(localStorage.getItem("issues"));
    let issueListAssigned = document.getElementById("issueAssignedToInput");
    issueList.innerHTML = " ";
    for (let i = 0; i < issues.length; i++) {

        let id = issues[i].id;
        let desc = issues[i].desc;
        let serverity = issues[i].serverity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;


        issueList.innerHTML += "<div class = 'well'>" + "<h6>Issue ID: " + id + "<p><span class= label label-info> " + status + "</span></p>" + "<h3> " + desc + "</h3>" + "<p><span class= 'glyphicon glyphicon-time '></span>" + serverity + "</p>"+"<p><span class= 'glyphicon glyphicon-user '></span>" + assignedTo + "</p>" 

    }


}