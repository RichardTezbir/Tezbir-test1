var newPerson = '[]';


function createPerson() {
    document.getElementById("areaName").innerHTML = document.getElementById("name").value; 
    document.getElementById("name").value = "";
    document.getElementById("areaAge").innerHTML = document.getElementById("age").value; 
    document.getElementById("age").value = "";
    document.getElementById("areaGender").innerHTML = document.getElementById("gender").value; 
    document.getElementById("gender").value = "";

    var table = document.getElementsByTagName("table");

    if (table<1) {
        var row = table.insertRow();
        var name = row.insertCell(0);
        var age = row.insertCell(1);
        var gender = row.insertCell(2);
    }
}

function pushThePerson () {
    
    
    
    
    // for (var i=newPerson;newPersonElm.newPerson<newPersonElm.length;newPersonElm++) {
        
    }
function deletePerson () {

}
function editPerson () {

}

function writeSuccResponse(response){
    console.log(response);
    tareaOut.value="SUCCESS. \n\nResponse:\n"+JSON.stringify(response);

}

function writeErrMsg(status, response){
    tareaOut.value="ERROR \nStatus:"+status+"\nResponse: "+response;

}

