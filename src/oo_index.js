
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();

  const form = document.getElementById ('create-task-form')

  form.addEventListener ('submit', function (e) {
    e.preventDefault ()

    const description = e.target.elements ['new-task-description'].value
    const newTask = new Task (description)

    taskList.addTask(newTask)
  })
});


//Adding classes is for organizational purposes, not to get things done
//TaskList - saving all tasks on the page in an array
//Task - done property(check)

//MVC is a way of thinking about programming
//Safae to put up 'solution' branch on github
//Look up object oriented MVC structure

//Step process for lab
//1. event listeners
//2. probably form (e.preventDefault())
//3. write out handlers
//4. console log to check that connection is working
//5. extract info needed from form
//6. query through form to get .value
//7. use data to create new element