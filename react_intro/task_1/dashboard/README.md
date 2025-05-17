# React Intro - Embedding Expressions & Functions

## Resources
- [React Documentation](https://reactjs.org/)
- JSX and Expression Embedding
- React Functional Components
- React Dev Tools

---

## Learning Objectives

By the end of this task, you should be able to:

- Embed expressions and functions in JSX
- Dynamically update component content using JavaScript logic
- Render multiple components in different root elements
- Apply CSS styling using an external stylesheet
- Use the React Developer Tools to inspect rendered components

---

## Requirements

- No linting errors in the console
- All files end with a new line
- Files are interpreted on **Ubuntu 18.04 LTS**, using **Node 12.x.x** and **npm 6.x.x**

---

## Tasks

### utils.js
Located at: `task_1/dashboard/src/utils.js`

- Create a function `getFullYear` that returns the **current year**.
- Create a function `getFooterCopy` that accepts one argument `isIndex` (boolean):
  - If `true`, return: `Holberton School`
  - If `false`, return: `Holberton School main dashboard`

---

### App.js
Located at: `task_1/dashboard/src/App.js`

- Modify the footer to **use `getFullYear()` and `getFooterCopy()`** for dynamic text rendering.

---

### Notifications.js
Located at: `task_1/dashboard/src/Notifications.js`

- Create a **functional React component** named `Notifications`.
- Return a `<div>` with:
  - Class name: `Notifications`
  - A `<p>` tag containing the text: `Here is the list of notifications`
- Import the CSS file: `Notifications.css`

---

### Notifications.css
Located at: `task_1/dashboard/src/Notifications.css`

- Style the `.Notifications` class:
  - Add a **border**
  - Add **padding** around the div

---

### index.js
Located at: `task_1/dashboard/src/index.js`

- Render the new `Notifications` component into a **separate `div`** with the ID: `root-notifications`
- Ensure both `App` and `Notifications` are rendered and visible in the browser

---

## Check
- You should see:
  - The `App` content inside the `root` element
  - The `Notifications` content inside the `root-notifications` element
- Confirm both components in the **React browser extension**

---

## Repository Info

- **GitHub Repository**: `alu-web_react`
- **Directory**: `react_intro`
- **Files Involved**:
  - `task_1/dashboard/src/utils.js`
  - `task_1/dashboard/src/App.js`
  - `task_1/dashboard/src/Notifications.css`
  - `task_1/dashboard/src/Notifications.js`
  - `task_1/dashboard/src/index.js`

---
