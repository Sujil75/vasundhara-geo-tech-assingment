# Vasundhara Geo Tech – Frontend Assignment
### 📌 Project Overview

This repository contains a React (Vite) based frontend assignment implementing multiple UI tasks focused on component design, state management, form handling, persistence, and interactive UI behavior.

The assignment is divided into five independent tasks, each implemented using modular, reusable components and following clean code practices.

***Published Link***: 

---
### 🛠 Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS
- localStorage (for persistence)

---
### ⚙️ Steps to Run the Project Locally
### Prerequisites
- Node.js: >= 16.x
- npm: >= 8.x

### Installation

1. Clone the repository:
git clone [Github Link](https://github.com/Sujil75/vasundhara-geo-tech-assingment)

2. Navigate to the project directory:
```
cd vasundhara-geo-tech-assignment
```

3. Install dependencies:
```
npm install
```

### Start the Application
```
npm run dev
```

The app will be available at:
```
http://localhost:5173
```
---
### 📂 Project Structure
```
src/
│── components/
│   ├── enhancedProgressBar/
│   │   ├── MainBar.jsx
│   │   └── SubBars.jsx
│   ├── enhancedTodo/
│   │   ├── UserForm.jsx
│   │   ├── UserTaskCard.jsx
│   │   └── UserTaskList.jsx
│
│── pages/
│   ├── CountdownTimer.jsx
│   ├── Dashboard.jsx
│   ├── EnhancedTodoApp.jsx
│   ├── FormValidation.jsx
│   ├── LiveSearch.jsx
│   └── MultiInputProgressBar.jsx
│
│── App.jsx
│── App.css
│── main.jsx
│
public/
│── index.html
│
package.json
vite.config.js
README.md
```
---
### ✅ Task Implementations
### 📝 Task 1: Todo Application

#### Location:
```
src/components/enhancedTodo/
src/pages/EnhancedTodoApp.jsx
```
#### Features Implemented:
- Add new tasks using a form
- Display tasks using reusable components
- Delete individual tasks
- Toggle task completion status
- Persist tasks using localStorage
- Filter tasks (All / Active / Completed)
- Assign priority levels
- Clean and user-friendly UI

---
### 🔐 Task 2: Form Handling & Password Toggle
#### Location:
```
src/pages/FormValidation.jsx
```
#### Features Implemented:
- Input fields: Name, Email, ID, Password
- Prevents page reload on submit
- Displays submitted data below the form
- Show / Hide password toggle
- Inline validation:
  - All fields required
  - Valid email format
- Clears form after successful submission

---
### 📊 Task 3: Multi Input Progress Bar
#### Location:
```
src/pages/MultiInputProgressBar.jsx
src/components/enhancedProgressBar/
```
#### Features Implemented:
- Multiple numeric inputs (0–100)
- Single main progress bar synced with inputs
- Sub-bars displayed for each input
- Input validation:
  - < 0 → 0
  - 100 → 100
- Smooth animation
- Dynamic color changes:
  - Red (< 40%)
  - Yellow (40–70%)
  - Green (> 70%)

---
### ⏱ Task 4: Advanced Countdown Timer
#### Location:
```
src/pages/CountdownTimer.jsx
```
#### Features Implemented:
- Configurable start time (default: 10 seconds)
- Accepts only positive integers
- Controls:
  - Start
  - Pause
  - Resume
  - Reset
- Buttons enable/disable based on timer state
- Millisecond-level countdown display
- Status indicators: Running, Paused, Completed
- “Time’s up!” message on completion
- Start button hidden permanently after completion
- Persistent timer state using localStorage

---
### 🔍 Task 5: Live Search with Highlighting
#### Location:
```
src/pages/LiveSearch.jsx
```
#### Features Implemented:

Case-insensitive live search
- Filters a predefined list of names
- Highlights matched text in bold
- Highlights multiple occurrences
- Displays result count
- Shows “No matches found” when applicable

---

### 🧠 Assumptions & Design Decisions
- Each task is implemented as a separate page/component for clarity
- State management handled using React hooks only
- localStorage used instead of backend persistence (as per scope)
- Focus placed on logic correctness and UI behavior
- Vite chosen for faster development and build performance
---

### ⚠️ Limitations & Trade-offs
- No backend or API integration
- Styling kept minimal to prioritize functionality
- Optimizations for very large datasets not implemented

---