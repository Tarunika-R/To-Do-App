# To-Do List Application

## Overview

This is a responsive, feature-rich To-Do List application built with **React**, **Vite**, and **Tailwind CSS**. The app includes features such as task creation, editing, deletion, status filtering, and dynamic light/dark themes.

## Features

- Add, edit, delete tasks.
- Mark tasks as completed or incomplete using a custom checkbox design.
- Filter tasks by their status: All, To-Do, and Done.
- Light and dark themes.
- Fully responsive design adaptable to various screen sizes.

## Installation

Follow these steps to set up the application on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Tarunika-R/To-Do_App.git
cd To-Do_App
```

### 2. Install Dependencies
Make sure you have Node.js and npm installed. Run the following commands:
```bash
# Install dependencies using npm
npm install
```

### 3. Install React with Vite
Vite is used for fast builds and efficient development.
```bash
npm create vite@latest
# Choose React as the framework
cd <vite-project-folder>
```

### 4. Install Tailwind CSS
Follow these steps to set up Tailwind CSS:
**1. Install Tailwind CSS**.
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```
**2. Configure Tailwind in ```tailwind.config.js```**.
```bash
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
**3. Add Tailwind CSS to your ```src/index.css``` file.
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Run the Development Server
Start the application with:
```bash
npm run dev
```
The app should now be running on ```http://localhost:5173```

## Screenshots of Application
![alt text](https://i.imgur.com/wVFOebZ.png)
![alt text](https://i.imgur.com/Mj1FSTK.png)
![alt text](https://i.imgur.com/6bPMzgN.png)
![alt text](https://i.imgur.com/guGfOkO.png)

## Video Demonstration

<video width="600" controls>
  <source src="https://github.com/user-attachments/assets/251efcc8-1dec-453b-9feb-6ad6d00a70b5">
  Your browser does not support the video tag.
</video>