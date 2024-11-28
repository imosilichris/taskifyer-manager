const token = localStorage.getItem("token");
fetch("/api/tasks", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
  body: JSON.stringify({ title: "New Task", description: "Task description" }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Update the DOM here
  })
  .catch((error) => console.error("Error:", error));
fetch("/api/tasks", { headers })
  .then((res) => res.json())
  .then((tasks) => renderTasks(tasks));
