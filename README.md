
# **TaskMaster**

TaskMaster is a full-stack task management application that helps users organize, track, and manage their tasks effectively. Built using Node.js, Express.js, MongoDB, and a responsive HTML/CSS/JavaScript frontend, TaskMaster is perfect for personal productivity or team-based task management.

## **Features**

- **Add Tasks**: Create new tasks with a title and description.
- **View Tasks**: Display all tasks in an organized list.
- **Update Tasks**: Edit task details or mark them as completed.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Interactive UI**: Responsive and colorful interface with real-time updates.
## **Technologies Used**

### Backend:
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Framework for creating RESTful APIs.
- **MongoDB**: Database for storing and retrieving task information.

### Frontend:
- **HTML5**: Structure and content of the app.
- **CSS3**: Styling and layout with gradients and animations.
- **JavaScript**: Dynamic interactions and API communication using Fetch.

---

## **Installation and Setup**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/taskmaster.git
   cd taskmaster
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the project root.
   - Add the following variables:
     ```
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/TaskMaster?retryWrites=true&w=majority
     PORT=3000
     ```

4. **Run the Application**:
   ```bash
   node server.js
   ```
   - The app will be available at `http://localhost:3000`.

5. **Access the Frontend**:
   - Open your browser and navigate to `http://localhost:3000`.

---

## **Usage**

1. **Add Tasks**: Use the form at the top of the app to create a new task.
2. **View Tasks**: All tasks are displayed in a list format.
3. **Update or Delete Tasks**: Use the buttons next to each task for updates or deletions.
4. **Interactive Updates**: Changes reflect instantly without needing a page reload.

---

## **Project Structure**

```
/taskmaster
├── index.js          # Main server file
├── .env              # Environment variables
├── models/
│   └── Task.js       # Mongoose schema for tasks
├── routes/
│   └── taskRoutes.js # API routes for CRUD operations
├── public/
│   ├── index.html    # Frontend HTML
│   ├── style.css     # Frontend CSS
│   └── script.js     # Frontend JavaScript
└── README.md         # Project documentation
```

---
live demo link


---

## **Future Improvements**

- Add user authentication for personalized task management.
- Include drag-and-drop functionality for prioritization.
- Implement reminders and notifications for tasks.
- Add a search and filter feature.



## **Contributing**

Contributions are welcome! Please fork the repository, create a new branch, and submit a pull request with your changes.
