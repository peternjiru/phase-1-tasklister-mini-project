document.addEventListener("DOMContentLoaded", (e) => {


  document.querySelector("form").addEventListener("submit", (e) => {

    e.preventDefault()

    //creating task container for out new tasks
    let task_container = document.getElementById("tasks")

    //creating p element for the individual tasks
    let p = document.createElement("p")
    
    //adding tasks to the task container
    p.textContent = e.target.new_task_description.value
    task_container.append(p)

    // clearing the text box after adding a task
    let cleared_form = document.getElementById("create-task-form")
    cleared_form.reset()


  })


});
