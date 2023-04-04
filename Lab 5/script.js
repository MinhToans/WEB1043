// Lấy các phần tử HTML bằng ID
const form = document.getElementById('add-task-form');
const taskList = document.getElementById('task-list');

// Tạo một mảng để chứa các nhiệm vụ
let tasks = [];

// Hàm này dùng để render danh sách các nhiệm vụ
function renderTasks() {
  // Xóa toàn bộ nội dung của taskList
  taskList.innerHTML = '';
  // Duyệt qua từng nhiệm vụ trong mảng tasks và tạo các phần tử HTML tương ứng
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    span.textContent = `${task.name} - ${task.description}`;
    editButton.textContent = 'Edit';
    // Thêm sự kiện click cho nút Edit
    editButton.addEventListener('click', () => {
      const newName = prompt('Enter new name:', task.name);
      const newDescription = prompt('Enter new description:', task.description);
      // Nếu người dùng nhập đầy đủ tên và mô tả mới thì cập nhật lại thông tin nhiệm vụ và render lại danh sách
      if (newName && newDescription) {
        tasks[index].name = newName;
        tasks[index].description = newDescription;
        renderTasks();
      }
    });
    deleteButton.textContent = 'Delete';
    // Thêm sự kiện click cho nút Delete
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}

// Thêm sự kiện submit cho form
form.addEventListener('submit', (event) => {
  event.preventDefault();
  // Lấy giá trị của các trường input
  const name = form.elements['task-name'].value;
  const description = form.elements['task-description'].value;
  // Nếu người dùng nhập đầy đủ tên và mô tả thì thêm nhiệm vụ mới vào mảng tasks, xóa toàn bộ nội dung của form và render lại danh sách
  if (name && description) {
    tasks.push({ name, description });
    form.reset();
    renderTasks();
  }
});

// Render danh sách các nhiệm vụ lần đầu tiên khi trang web được tải
renderTasks();
