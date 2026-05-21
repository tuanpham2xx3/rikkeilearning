const task = [];
let input;

do {
  input = Number(
    prompt(
      "1: Thêm công việc mới\n2: Xóa công việc\n3: Hiển thị danh sách công việc\n0: Thoát",
    ),
  );
  if (input == 1) {
    let title = prompt("Nhập tên công việc:");
    addTask(title);
  } else if (input == 2) {
    let indexTask = prompt("Nhập vị trí việc cần xóa:");
    deleTask(indexTask);
  } else if (input == 3) {
    displayTasks();
  }
} while (input !== 0);
function addTask(title) {
  task.push(title);
}

function displayTasks() {
  if (task.length === 0) {
    console.log("Không có công việc nào.");
    return;
  }

  task.forEach((t, i) => {
    console.log(i + 1 + ". " + t);
  });
}
function deleTask(indexTask) {
  task.splice(indexTask, 1);
}
