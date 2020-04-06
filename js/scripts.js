function toDoList() {
  this.toDo = [];
  this.currentId = 0;
}

toDoList.prototype.addTask = function(task) {
  var newTask = $("task").val();
  newTask.push(toDo);
}

//front end
$(duc)