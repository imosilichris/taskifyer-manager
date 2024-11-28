const API_URL = "/api"; // Relative URL since the backend serves the frontend

// DOM Elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const addTaskForm = document.getElementById("add-task-form");
const tasksSection = document.getElementById("tasks-section");
const authSection = document.getElementById("auth-section");
const tasksList = document.getElementById("tasks-list");
const logoutButton = document.getElementById("logout-button");

// Store token
let token = localStorage.getItem("token");

// Toggle UI Sections
function toggleUI() {
  if (token) {
    authSection.style.display = "none";
    tasksSection.style.display = "block";
    fetchTasks();
  } else {
    authSection.style.display = "block";
    tasksSection.style.display = "none";
  }
}

// Register User
registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("register-username").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Registration successful! You can now log in.");
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error registering user:", error);
  }
});

// Login User
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      token = data.token;
      localStorage.setItem("token", token);
      toggleUI();
    } else {
      alert(data.message);
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
});

// Fetch Tasks
async function fetchTasks() {
  try {
    const res = await fetch(`${API_URL}/tasks`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const tasks = await res.json();
    renderTasks(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
  }
}

// Render Tasks
function renderTasks(tasks) {
  tasksList.innerHTML = tasks
    .map(
      (task) => `
      <div class="task">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    `
    )
    .join("");
}

// Add Task
addTaskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-description").value;

  try {
    const res = await fetch(`${API_URL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, description }),
    });

    fetchTasks(); // Refresh task list
  } catch (error) {
    console.error("Error adding task:", error);
  }
});

// Delete Task
async function deleteTask(taskId) {
  try {
    await fetch(`${API_URL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchTasks(); // Refresh task list
  } catch (error) {
    console.error("Error deleting task:", error);
  }
}

// Logout
logoutButton.addEventListener("click", () => {
  token = null;
  localStorage.removeItem("token");
  toggleUI();
});

// Initial UI toggle
toggleUI();
