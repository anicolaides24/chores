document.addEventListener('DOMContentLoaded', () => {
  const taskList = document.getElementById('task-list');
  if (taskList) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    if (tasks.length === 0) {
      taskList.innerHTML = '<p>No tasks for today yet.</p>';
    } else {
      taskList.innerHTML = '<tbody>' + tasks.map(task => (
          `<tr><td><strong>${task.task}</strong></td>
          <td>${task.person}</td>
          <td><input type="checkbox" onchange="toggleStrike(this)" class="status"  ></td></tr>`
      )).join('') + '</tbody>';
    }
  }
});
