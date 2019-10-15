var todoTasks = localStorage.getItem('storedTasks');

if (todoTasks==null){
    todoTasks='[{"task":"Do intro test","id":1,"isDone":true},{"task":"Learn about JS basics","id":2,"isDone":true},{"id":3,"task":"Implement TODO list","isDone":false},{"id":4,"task":"Implement Kanban","isDone":false}]';
}

var tasks=JSON.parse(todoTasks);

var maxId = 0;

function addTaskToHtml(newTask){


    if(newTask.id>maxId){
        maxId=newTask.id;
    }
    

    var newTaskElm = document.createElement("button");
    newTaskElm.innerHTML=newTask.task;
    newTaskElm.classList.add("taskAsBt");

    if(newTask.isDone){
        newTaskElm.classList.add("completedTask");
    } else {
        newTaskElm.classList.add("activeTask");
    }

    newTaskElm.setAttribute("type","button");
    newTaskElm.setAttribute("data-id",newTask.id);

    newTaskElm.addEventListener("click",
        function () {
            //vdaka closure mam pristup k newTaskElm aj newTask a tie maju spravne hodnoty
            newTaskElm.classList.toggle("completedTask");
            newTaskElm.classList.toggle("activeTask");
            newTask.isDone = !newTask.isDone;

            localStorage.setItem('storedTasks',JSON.stringify(tasks));
        }
);


    document.getElementById("frmTasks").appendChild(newTaskElm);


    
}

//--------------------------------------


//1.nacitanie uloh
for(var i=0, len=tasks.length; i<len; i++){
    addTaskToHtml(tasks[i]);
}

/*
//Alternatíva predch. cyklu pre EcmaScript 6
for(var task of tasks){
     addTaskToHtml(task);
}
*/

document.getElementById("btAddTask").addEventListener("click",
    function () {
        var newTaskName=document.getElementById("inNewTask").value.trim();
        if(newTaskName!=""){

            maxId++;
            var newTask = {id:maxId,task:newTaskName,isDone:false};
            tasks.push(newTask);

            localStorage.setItem('storedTasks',JSON.stringify(tasks));

            addTaskToHtml(newTask);


        }
    }
);

document.getElementById("btRemCmpl").addEventListener("click",
    function () {
        tasks = tasks.filter(task => !task.isDone);

        localStorage.setItem('storedTasks',JSON.stringify(tasks));

        var completedTasks = document.getElementsByClassName("completedTask");
        //tu vyuzijeme, ze completedTasks je ziva kolekcia
        while(completedTasks.length > 0){
            completedTasks[0].parentNode.removeChild(completedTasks[0]); //tento kod je univerzalnejsi ako tu potrebujeme
        }


    }
);


