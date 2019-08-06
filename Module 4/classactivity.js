
function addtask(){
    taskName=document.getElementById("taskName").value;
    current=document.querySelector(".task-list").innerHTML ;
    document.querySelector(".task-list").innerHTML= current + "<br>"+ taskName;
}
 
