# Random String Generator

A React-based web application that generates random strings with customizable options.

## Features

* Generate random strings of custom length
* Select character types:

  * Uppercase Letters
  * Lowercase Letters
  * Numbers
* Copy generated string to clipboard
* Track number of generated strings
* Display last generated time
* Client-side routing using React Router DOM

## Technologies Used

* React
* Vite
* Tailwind CSS
* React Router DOM

## React Hooks Used

### useState

Used to manage:

* String length
* Generated string
* Generation count
* Character type selections

### useCallback

Used to optimize the string generation function.

### useEffect

Used to update the browser tab title whenever the generation count changes.

## Routes

| Route      | Description                  |
| ---------- | ---------------------------- |
| /          | Home Page                    |
| /generator | Random String Generator Page |

## Installation

```bash
npm install
npm run dev
```

## Author
Toshika
Created as part of the QSkill Frontend Internship Assignment.
