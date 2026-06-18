# Random String Generator

A React-based web application that generates random strings with customizable options. This project was developed as part of the QSkill Frontend Internship Assignment.

---

## Assignment Requirements Covered

### Task 2 Requirements

1. Create a basic React application that generates random strings using:

   * useState
   * useCallback
   * useEffect

2. Create client-side routing using react-router-dom.

### Implementation

This project combines both requirements into a single React application:

* Home Page (`/`)
* Random String Generator Page (`/generator`)
* Client-side routing using React Router DOM
* Random string generation with customizable character options
* Copy generated string to clipboard
* Generation count tracking
* Last generated time display

---

## Features

* Generate random strings of custom length
* Select character types:

  * Uppercase Letters
  * Lowercase Letters
  * Numbers
* Copy generated string to clipboard
* Track number of generated strings
* Display last generated time
* Responsive and user-friendly interface
* Client-side routing between pages

---

## Technologies Used

* React
* Vite
* Tailwind CSS
* React Router DOM
* JavaScript

---

## React Hooks Used

### useState

Used to manage:

* String length
* Generated string
* Generation count
* Last generated time
* Character type selections

### useCallback

Used to optimize the random string generation function and prevent unnecessary re-creation.

### useEffect

Used to update the browser tab title whenever the generation count changes.

---

## Routes

| Route        | Description                  |
| ------------ | ---------------------------- |
| `/`          | Home Page                    |
| `/generator` | Random String Generator Page |

---

## Project Structure

```text
src
│
├── pages
│   ├── Home.jsx
│   └── Generator.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## Installation

Clone the repository:

```bash
git clone <repository-link>
```

Navigate to the project folder:

```bash
cd qskill-task2-random-string-generator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Learning Outcomes

Through this project, the following concepts were implemented and practiced:

* React Functional Components
* React Hooks
* State Management
* Client-Side Routing
* Event Handling
* Conditional Rendering
* Tailwind CSS Styling
* Responsive UI Development

---

## Author

Name: Toshika Chettier

Submitted for: QSkill Frontend Internship Assignment
