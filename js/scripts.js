function toDoList() {
  this.toDo = [];
  this.currentId = 0;
}

toDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

toDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

//front end
$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var task = $("input#task").val();
    $("#output").append("<li>" + task + "</li>");
  })

  $("#output.children").click(function() {
    this.addClass("clickedOn");
  });
});