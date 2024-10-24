# Task Manager for Fun

- [Live Link](https://task-manager-nhb.vercel.app)

## Overview

The Task Manager is a user-friendly application designed to help users manage their tasks effectively. This application allows users to create, update, and delete tasks, set budgets, and track their progress. Built with React, it leverages local storage for persistent data storage, ensuring that user data remains intact across sessions.

## Features

### Core Features

- **Task Creation**: Users can create new tasks with a title, description, and budget. The app supports input validation for these fields to ensure they meet specified criteria.
  
- **Task Management**: Users can:
  - View a list of all tasks.
  - Mark tasks as completed or pending.
  - Delete tasks from the list.

- **Dynamic Character Count**: The application displays the number of characters remaining for the task title and description, providing real-time feedback to the user.

- **Task Budgeting**: Users can specify a budget for each task, with an automatic calculation of deducted amounts and effective budgets.

- **Package Selection**: Users can select a task package (Basic, Standard, Premium) that limits the number of tasks they can create:
  - Basic: 5 tasks
  - Standard: 15 tasks
  - Premium: 30 tasks

- **Summary Overview**: The application provides a summary of task statistics, including:
  - Total tasks created
  - Completed tasks
  - Total budget and total deducted amounts
  - Remaining budget

### User Interface

- The app features a clean, responsive design that adjusts to different screen sizes. The task list is displayed in a grid format for easy viewing.
- Intuitive icons enhance the user experience, providing visual feedback for task actions (add, delete, toggle status).
- Toast notifications provide real-time feedback for user actions, such as successfully adding a task or reaching the limit for the selected package.

### Local Storage Integration

- The application utilizes the browser's local storage to persist tasks between sessions. When a user adds, deletes, or updates tasks, the changes are automatically saved to local storage.
- On application load, tasks are retrieved from local storage, ensuring a seamless experience for users.

## Technologies Used

- **Frontend**: React, Tailwind CSS, React Icons
- **State Management**: React's built-in state and effect hooks
- **Data Persistence**: Local Storage for persistent task data
- **ID Generation**: `@nazmul-nhb/id-generator` for unique task identifiers
- **Notifications**: `react-hot-toast` for toast notifications
